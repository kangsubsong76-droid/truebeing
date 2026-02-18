import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Users, UserPlus, MessageSquare, AlertTriangle, Phone, CheckCircle, PieChart as PieChartIcon } from 'lucide-react';
import * as XLSX from 'xlsx';
import { supabase } from './lib/supabase';
import { sendAligoSMS } from './services/aligo';

// Extracted Components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import StatsGrid from './components/StatsGrid';
import MemberTable from './components/MemberTable';
import StatsView from './components/StatsView';
import AttendanceView from './components/AttendanceView';
import SMSView from './components/SMSView';
import SettingsView from './components/SettingsView';
import AddMemberView from './components/AddMemberView';
import MemberDetailModal from './components/MemberDetailModal';
import SMSModal from './components/SMSModal';
import NotificationModal from './components/NotificationModal';
import BulkActionBar from './components/BulkActionBar';

const App = () => {
    // --- State Management ---
    const [memberList, setMemberList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('members');
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');
    const [isSidebarOpen, setIsSidebarOpen] = useState(typeof window !== 'undefined' ? window.innerWidth > 1024 : true);
    const [isNotifyOpen, setIsNotifyOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    const [isEditingMember, setIsEditingMember] = useState(false);
    const [editForm, setEditForm] = useState({});
    const [isSmsOpen, setIsSmsOpen] = useState(false);
    const [smsMessage, setSmsMessage] = useState('');
    const [isSendingSms, setIsSendingSms] = useState(false);
    const [selectedIds, setSelectedIds] = useState(new Set());
    const [isUploading, setIsUploading] = useState(false);

    // Global Settings State
    const [settings, setSettings] = useState(() => {
        const saved = localStorage.getItem('system_settings');
        return saved ? JSON.parse(saved) : {
            centerName: '현존명상센터',
            realtimeUpdate: true,
            showPhotos: false,
            showAdminMemo: true,
            showSelection: true,
            mobileNavStyle: 'drawer'
        };
    });

    useEffect(() => {
        localStorage.setItem('system_settings', JSON.stringify(settings));
    }, [settings]);

    // Filter/Sort State
    const [colFilters, setColFilters] = useState({
        name: '', phone: '', status: '', gender: '', memo: '', join_date: '', end_date: '', address: ''
    });
    const [activeColFilter, setActiveColFilter] = useState(null);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

    // SMS & Attendance State
    const [smsLogs, setSmsLogs] = useState([]);
    const [attendanceSearch, setAttendanceSearch] = useState('');
    const [attendanceSearchResults, setAttendanceSearchResults] = useState([]);
    const [todayAttendance, setTodayAttendance] = useState([]);

    const [newMember, setNewMember] = useState({
        name: '', phone: '', status: '회원', gender: '여', join_date: new Date().toISOString().split('T')[0], end_date: '', memo: '', address: ''
    });

    // --- Data Fetching ---
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const { data, error } = await supabase
                .from('members')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setMemberList(data || []);
            const actual = (data || []).filter(m => !(m.memo && m.memo.includes('상담')));
            setFilteredList(actual);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchAttendance = async () => {
        const today = new Date().toISOString().split('T')[0];
        const { data, error } = await supabase
            .from('attendance')
            .select('*, members(name, phone)')
            .gte('check_in_time', `${today}T00:00:00`)
            .lte('check_in_time', `${today}T23:59:59`)
            .order('check_in_time', { ascending: false });

        if (!error) setTodayAttendance(data || []);
    };

    const fetchSmsHistory = async () => {
        const { data } = await supabase.from('sms_logs').select('*').order('created_at', { ascending: false }).limit(20);
        if (data) setSmsLogs(data);
    };

    useEffect(() => {
        fetchData();
        fetchAttendance();
        fetchSmsHistory();
    }, []);

    // Realtime Subscription
    useEffect(() => {
        let subscription;

        if (settings.realtimeUpdate) {
            console.log('🔌 Realtime connection established');
            subscription = supabase
                .channel('public:members')
                .on('postgres_changes', { event: '*', schema: 'public', table: 'members' }, (payload) => {
                    console.log('⚡ Realtime change detected:', payload);
                    fetchData();
                })
                .subscribe();
        }

        return () => {
            if (subscription) {
                console.log('🔌 Realtime connection disconnected');
                supabase.removeChannel(subscription);
            }
        };
    }, [settings.realtimeUpdate]);

    // --- Handlers ---
    const handleAddNewMember = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            // Enforce Phone Formatting
            const formattedPhone = newMember.phone.replace(/[^0-9]/g, '').replace(/^(\d{3})(\d{4})(\d{4})$/, '$1-$2-$3');
            const { error } = await supabase.from('members').insert([{ ...newMember, phone: formattedPhone }]);
            if (error) throw error;
            alert('회원이 성공적으로 등록되었습니다.');
            setNewMember({ name: '', phone: '', status: '회원', gender: '여', join_date: new Date().toISOString().split('T')[0], end_date: '', memo: '', address: '' });
            fetchData();
            setActiveTab('members');
        } catch (error) {
            alert('등록 실패: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleUpdateMember = async () => {
        setIsLoading(true);
        try {
            const formattedPhone = editForm.phone?.replace(/[^0-9]/g, '').replace(/^(\d{3})(\d{4})(\d{4})$/, '$1-$2-$3');
            const { error } = await supabase.from('members').update({ ...editForm, phone: formattedPhone }).eq('id', selectedMember.id);
            if (error) throw error;
            alert('정보가 업데이트되었습니다.');
            setIsEditingMember(false);
            setSelectedMember(null);
            fetchData();
        } catch (error) {
            alert('수정 실패: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDeleteMember = async () => {
        if (!confirm('정말로 이 회원을 삭제하시겠습니까?')) return;
        setIsLoading(true);
        try {
            const { error } = await supabase.from('members').delete().eq('id', selectedMember.id);
            if (error) throw error;
            alert('회원 정보가 삭제되었습니다.');
            setSelectedMember(null);
            fetchData();
        } catch (error) {
            alert('삭제 실패: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSendSms = async () => {
        const targets = selectedMember
            ? [selectedMember]
            : selectedIds.size > 0
                ? memberList.filter(m => selectedIds.has(m.id))
                : filteredList;

        if (targets.length === 0) return alert('전송 대상을 선택해주세요.');
        if (!confirm(`${targets.length}명에게 메시지를 전송하시겠습니까?`)) return;

        setIsSendingSms(true);
        let successCount = 0;

        for (const target of targets) {
            if (!target.phone) continue;
            try {
                const result = await sendAligoSMS(target.phone, smsMessage);
                if (result.row) {
                    successCount++;
                    await supabase.from('sms_logs').insert([{
                        receiver: target.phone,
                        msg: smsMessage,
                        status: 'success'
                    }]);
                }
            } catch (err) {
                console.error('SMS Send Error:', err);
            }
        }

        alert(`${targets.length}명 중 ${successCount}명에게 전송 완료`);
        setIsSendingSms(false);
        setIsSmsOpen(false);
        setSmsMessage('');
        setSelectedMember(null);
        setSelectedIds(new Set());
        fetchSmsHistory();
    };

    const handleAttendanceSearch = (term) => {
        setAttendanceSearch(term);
        if (term.length >= 2) {
            const results = memberList.filter(m =>
                m.name.includes(term) || m.phone.includes(term)
            ).slice(0, 5);
            setAttendanceSearchResults(results);
        } else {
            setAttendanceSearchResults([]);
        }
    };

    const handleAttendanceRecord = async (memberId) => {
        try {
            const { error } = await supabase.from('attendance').insert([{ member_id: memberId }]);
            if (error) throw error;
            alert('출석 처리가 완료되었습니다.');
            setAttendanceSearch('');
            setAttendanceSearchResults([]);
            fetchAttendance();
        } catch (error) {
            alert('출석 처리 실패: ' + error.message);
        }
    };

    const handleDownloadExcel = () => {
        const data = filteredList.map(m => ({
            '이름': m.name,
            '전화번호': m.phone,
            '상태': m.status,
            '성별': m.gender,
            '맴버십 타입': m.memo,
            '가입일': m.join_date,
            '만기일': m.end_date,
            '주소': m.address
        }));
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Members");
        XLSX.writeFile(wb, `TrueBeing_Members_${new Date().toISOString().split('T')[0]}.xlsx`);
    };

    // --- Derived State ---
    const actualMembers = memberList.filter(m => !(m.memo && m.memo.includes('상담')));
    const consultationMembers = memberList.filter(m => m.memo && m.memo.includes('상담'));
    const realStats = [
        { label: '전체 회원', value: actualMembers.length, color: '#10b981', icon: Users, filter: 'all' },
        { label: '유효 회원', value: actualMembers.filter(m => ['active', '회원', '정상'].includes(m.status)).length, color: '#34d399', icon: CheckCircle, filter: 'active' },
        {
            label: '만기 예정', value: actualMembers.filter(m => {
                if (!m.end_date) return false;
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const endDate = new Date(m.end_date);
                const diff = (endDate - today) / (1000 * 60 * 60 * 24);
                return diff >= 0 && diff <= 7;
            }).length, color: '#fbbf24', icon: AlertTriangle, filter: 'expiring'
        },
        { label: '만기/마감', value: actualMembers.filter(m => m.status === '만기').length, color: '#f87171', icon: Phone, filter: 'expired' },
        { label: '맞춤상담/체험', value: actualMembers.filter(m => m.memo && (m.memo.includes('맞춤') || m.memo.includes('체험') || m.memo.includes('1회'))).length, color: '#8b5cf6', icon: UserPlus, filter: 'personal' },
        { label: '원데이클래스', value: actualMembers.filter(m => m.memo && m.memo.includes('원데이')).length, color: '#a78bfa', icon: UserPlus, filter: 'oneday' },
        { label: '지도자반', value: actualMembers.filter(m => m.memo && m.memo.includes('지도자')).length, color: '#f472b6', icon: PieChartIcon, filter: 'leadership' },
        {
            label: '기타/일반', value: actualMembers.filter(m => {
                const isKnown = ['active', '회원', '정상', '만기'].includes(m.status) ||
                    (m.memo && (m.memo.includes('맞춤') || m.memo.includes('체험') || m.memo.includes('1회') || m.memo.includes('원데이') || m.memo.includes('지도자')));
                return !isKnown;
            }).length, color: '#94a3b8', icon: Users, filter: 'other'
        },
        { label: '상담전화', value: consultationMembers.length, color: '#6366f1', icon: MessageSquare, filter: 'consultation' },
    ];

    const mainStats = realStats.slice(0, 7);
    const extraStats = realStats.slice(7, 9);

    return (
        <div className="flex min-h-screen bg-[#050b18] text-slate-200 selection:bg-emerald-500/30 font-['GmarketSansMedium'] overflow-x-hidden">
            {/* Backdrop for Mobile Sidebar */}
            <AnimatePresence>
                {(isSidebarOpen && settings.mobileNavStyle !== 'bottom') && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsSidebarOpen(false)}
                        className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[60] lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar Component */}
            {settings.mobileNavStyle !== 'bottom' && (
                <Sidebar
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                    centerName={settings.centerName}
                    settings={settings}
                    setSettings={setSettings}
                />
            )}

            <main className={`flex-1 min-w-0 h-screen overflow-y-auto relative p-4 lg:p-10 custom-scrollbar ${settings.mobileNavStyle === 'bottom' ? 'pb-24 lg:pb-10' : ''}`}>
                <Header
                    handleDownloadExcel={handleDownloadExcel}
                    fetchData={fetchData}
                    isLoading={isLoading}
                    isUploading={isUploading}
                    setIsUploading={setIsUploading}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    memberList={memberList}
                    setFilteredList={setFilteredList}
                    setFilterType={setFilterType}
                    setIsNotifyOpen={setIsNotifyOpen}
                    settings={settings}
                    extraStats={extraStats}
                    setIsSidebarOpen={setIsSidebarOpen}
                />

                {activeTab === 'members' && (
                    <>
                        <StatsGrid
                            realStats={mainStats}
                            filterType={filterType}
                            setFilterType={setFilterType}
                            setFilteredList={setFilteredList}
                            memberList={memberList}
                            settings={settings}
                        />

                        <MemberTable
                            filterType={filterType}
                            filteredList={filteredList}
                            memberList={memberList}
                            setFilterType={setFilterType}
                            setFilteredList={setFilteredList}
                            selectedIds={selectedIds}
                            setSelectedIds={setSelectedIds}
                            colFilters={colFilters}
                            setColFilters={setColFilters}
                            activeColFilter={activeColFilter}
                            setActiveColFilter={setActiveColFilter}
                            sortConfig={sortConfig}
                            setSortConfig={setSortConfig}
                            isLoading={isLoading}
                            setSelectedMember={setSelectedMember}
                            settings={settings}
                        />
                    </>
                )}

                {activeTab === 'add' && (
                    <AddMemberView
                        newMember={newMember}
                        setNewMember={setNewMember}
                        handleAddNewMember={handleAddNewMember}
                        isLoading={isLoading}
                    />
                )}

                {activeTab === 'sms' && (
                    <SMSView
                        filteredList={filteredList}
                        selectedIds={selectedIds}
                        smsLogs={smsLogs}
                        fetchSmsHistory={fetchSmsHistory}
                        setIsSmsOpen={setIsSmsOpen}
                    />
                )}

                {activeTab === 'settings' && (
                    <SettingsView
                        settings={settings}
                        setSettings={setSettings}
                    />
                )}

                {activeTab === 'stats' && (
                    <StatsView
                        realStats={realStats}
                        memberList={memberList}
                    />
                )}

                {activeTab === 'attendance' && (
                    <AttendanceView
                        attendanceSearch={attendanceSearch}
                        handleAttendanceSearch={handleAttendanceSearch}
                        attendanceSearchResults={attendanceSearchResults}
                        handleAttendanceRecord={handleAttendanceRecord}
                        todayAttendance={todayAttendance}
                    />
                )}
            </main>

            {/* Modals & Overlays */}
            <AnimatePresence>
                {isNotifyOpen && (
                    <NotificationModal
                        memberList={memberList}
                        setIsNotifyOpen={setIsNotifyOpen}
                        setSelectedMember={setSelectedMember}
                        setIsSmsOpen={setIsSmsOpen}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {selectedIds.size > 0 && (
                    <BulkActionBar
                        selectedIds={selectedIds}
                        setSelectedIds={setSelectedIds}
                        setIsSmsOpen={setIsSmsOpen}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {selectedMember && (
                    <MemberDetailModal
                        selectedMember={selectedMember}
                        setSelectedMember={setSelectedMember}
                        isEditingMember={isEditingMember}
                        setIsEditingMember={setIsEditingMember}
                        editForm={editForm}
                        setEditForm={setEditForm}
                        handleUpdateMember={handleUpdateMember}
                        handleDeleteMember={handleDeleteMember}
                        setIsSmsOpen={setIsSmsOpen}
                        isLoading={isLoading}
                        settings={settings}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isSmsOpen && (
                    <SMSModal
                        isSmsOpen={isSmsOpen}
                        setIsSmsOpen={setIsSmsOpen}
                        selectedMember={selectedMember}
                        selectedIds={selectedIds}
                        filteredList={filteredList}
                        smsMessage={smsMessage}
                        setSmsMessage={setSmsMessage}
                        handleSendSms={handleSendSms}
                        isSendingSms={isSendingSms}
                    />
                )}
            </AnimatePresence>

            {/* Bottom Nav for Mobile */}
            {settings.mobileNavStyle === 'bottom' && (
                <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
            )}

            {/* Custom Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
        /* Tailwind-like utilities for quick prototype */
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .flex-1 { flex: 1 1 0%; }
        .items-center { align-items: center; }
        .justify-between { justify-content: space-between; }
        .gap-2 { gap: 0.5rem; }
        .gap-3 { gap: 0.75rem; }
        .gap-4 { gap: 1rem; }
        .gap-6 { gap: 1.5rem; }
        .p-2 { padding: 0.5rem; }
        .p-3 { padding: 0.75rem; }
        .p-4 { padding: 1rem; }
        .p-6 { padding: 1.5rem; }
        .p-8 { padding: 2rem; }
        .px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .m-4 { margin: 1rem; }
        .mr-0 { margin-right: 0px; }
        .mt-1 { margin-top: 0.25rem; }
        .mt-4 { margin-top: 1rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-10 { margin-bottom: 2.5rem; }
        .w-full { width: 100%; }
        .w-10 { width: 2.5rem; }
        .w-64 { width: 16rem; }
        .h-2 { height: 0.5rem; }
        .h-8 { height: 2rem; }
        .h-10 { height: 2.5rem; }
        .rounded-full { border-radius: 9999px; }
        .rounded-xl { border-radius: 0.75rem; }
        .text-sm { font-size: 0.875rem; }
        .text-xs { font-size: 0.75rem; }
        .text-2xl { font-size: 1.5rem; }
        .text-3xl { font-size: 1.875rem; }
        .font-bold { font-weight: 700; }
        .font-semibold { font-weight: 600; }
        .font-medium { font-weight: 500; }
        .text-white { color: white; }
        .text-slate-200 { color: #e2e8f0; }
        .text-slate-300 { color: #cbd5e1; }
        .text-slate-400 { color: #94a3b8; }
        .text-slate-500 { color: #64748b; }
        .text-emerald-400 { color: #34d399; }
        .text-emerald-500 { color: #10b981; }
        .text-red-400 { color: #f87171; }
        .text-red-500 { color: #ef4444; }
        .bg-slate-800 { background-color: #1e293b; }
        .bg-slate-900 { background-color: #0f172a; }
        .divide-y > * + * { border-top-width: 1px; }
        .divide-slate-800 { border-color: #1e293b; }
        .border-b { border-bottom-width: 1px; }
        .border-slate-800 { border-color: #1e293b; }
        .overflow-hidden { overflow: hidden; }
        .overflow-y-auto { overflow-y: auto; }
        .relative { position: relative; }
        .absolute { position: absolute; }
        .left-3 { left: 0.75rem; }
        .top-2 { top: 0.5rem; }
        .right-2 { right: 0.5rem; }
        .top-1/2 { top: 50%; }
        .-translate-y-1/2 { transform: translateY(-50%); }
        .grid { display: grid; }
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        .z-40 { z-index: 40; }
        .z-50 { z-index: 50; }
        .fixed { position: fixed; }
        .bottom-6 { bottom: 1.5rem; }
        .right-6 { right: 1.5rem; }
        .hidden { display: none; }
        @media (min-width: 640px) { .sm\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (min-width: 1024px) { 
            .lg\\:flex { display: flex; }
            .lg\\:relative { position: relative; }
            .lg\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
            .lg\\:p-8 { padding: 2rem; }
        }
      ` }} />
        </div>
    );
};

export default App;
