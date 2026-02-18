import React from 'react';
import { motion } from 'framer-motion';

const StatsGrid = ({ realStats, filterType, setFilterType, setViewAll, setFilteredList, memberList, settings }) => {
    return (
        <div className="space-y-6 mb-10">
            <div className="flex gap-2 w-full overflow-x-auto pb-2 scrollbar-hide">
                {realStats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        onClick={() => {
                            setFilterType(stat.filter);
                            const actualMembers = memberList.filter(m => !(m.memo && m.memo.includes('상담')));
                            const consultationMembers = memberList.filter(m => m.memo && m.memo.includes('상담'));

                            switch (stat.filter) {
                                case 'all':
                                    setFilteredList(actualMembers);
                                    break;
                                case 'active':
                                    setFilteredList(actualMembers.filter(m => ['active', '회원', '정상'].includes(m.status)));
                                    break;
                                case 'expiring':
                                    setFilteredList(actualMembers.filter(m => {
                                        if (!m.end_date) return false;
                                        const today = new Date();
                                        today.setHours(0, 0, 0, 0);
                                        const endDate = new Date(m.end_date);
                                        const diff = (endDate - today) / (1000 * 60 * 60 * 24);
                                        return diff >= 0 && diff <= 7;
                                    }));
                                    break;
                                case 'expired':
                                    setFilteredList(actualMembers.filter(m => m.status === '만기'));
                                    break;
                                case 'personal':
                                    setFilteredList(actualMembers.filter(m => m.memo && (m.memo.includes('맞춤') || m.memo.includes('체험') || m.memo.includes('1회'))));
                                    break;
                                case 'oneday':
                                    setFilteredList(actualMembers.filter(m => m.memo && m.memo.includes('원데이')));
                                    break;
                                case 'consultation':
                                    setFilteredList(consultationMembers);
                                    break;
                                case 'leadership':
                                    setFilteredList(actualMembers.filter(m => m.memo && m.memo.includes('지도자')));
                                    break;
                                case 'other':
                                    setFilteredList(actualMembers.filter(m => {
                                        const isKnown = ['active', '회원', '정상', '만기'].includes(m.status) ||
                                            (m.memo && (m.memo.includes('맞춤') || m.memo.includes('체험') || m.memo.includes('1회') || m.memo.includes('원데이') || m.memo.includes('지도자')));
                                        return !isKnown;
                                    }));
                                    break;
                                default:
                                    setFilteredList(actualMembers);
                            }
                        }}
                        className={`premium-card p-3 flex-1 min-w-[140px] md:min-w-0 group cursor-pointer relative overflow-hidden rounded-2xl ${filterType === stat.filter
                            ? 'bg-white/10 scale-105 z-10 border-emerald-500/50'
                            : `hover:bg-white/5 hover:scale-[1.02] active:scale-95 ${stat.value === '0' || stat.value === 0 ? 'opacity-40 grayscale' : ''}`
                            }`}
                        style={{
                            boxShadow: filterType === stat.filter
                                ? `0 20px 40px -10px ${stat.color}40, inset 0 0 20px ${stat.color}20`
                                : ''
                        }}
                    >
                        <div className="flex justify-between items-start mb-3">
                            <div
                                className="p-2 rounded-lg"
                                style={{ backgroundColor: `${stat.color}20`, color: stat.color }}
                            >
                                <stat.icon size={20} />
                            </div>
                        </div>
                        <p className="text-slate-400 text-xs font-bold mb-0.5 truncate">{stat.label}</p>
                        <h3 className="text-2xl font-extrabold text-white">{stat.value}</h3>
                    </motion.div>
                ))}
            </div>

            {settings?.showAdminMemo && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Module: Expiring Members */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-amber-500/5 border border-amber-500/10 rounded-3xl p-6"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                            <h4 className="text-xs font-black text-amber-400 uppercase tracking-widest">만기 예정 회원 (7일 이내)</h4>
                        </div>
                        <div className="space-y-3">
                            {memberList
                                .filter(m => {
                                    if (!m.end_date) return false;
                                    const today = new Date();
                                    today.setHours(0, 0, 0, 0);
                                    const endDate = new Date(m.end_date);
                                    const diff = (endDate - today) / (1000 * 60 * 60 * 24);
                                    return diff >= 0 && diff <= 7;
                                })
                                .slice(0, 3)
                                .map((m, i) => {
                                    const isSpecial = m.memo && (m.memo.includes('맞춤') || m.memo.includes('체험') || m.memo.includes('1회') || m.memo.includes('원데이'));
                                    return (
                                        <div key={i} className={`p-4 rounded-2xl border flex justify-between items-center transition-all ${isSpecial
                                            ? 'bg-[#0f172a]/20 border-white/5 opacity-40 grayscale hover:opacity-100 hover:grayscale-0'
                                            : 'bg-[#0f172a]/80 border-amber-500/30 shadow-[0_4px_20px_-10px_rgba(245,158,11,0.2)] hover:bg-[#0f172a] hover:border-amber-500/50'
                                            }`}>
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className={`text-sm font-bold ${isSpecial ? 'text-slate-500' : 'text-white'}`}>{m.name}</span>
                                                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isSpecial ? 'text-slate-600 bg-white/5' : 'text-amber-200/70 bg-amber-500/10'}`}>{m.status}</span>
                                                </div>
                                                <span className={`text-[11px] font-mono font-bold ${isSpecial ? 'text-slate-600' : 'text-amber-400'}`}>D-Day: {m.end_date}</span>
                                            </div>
                                            <div className="text-right max-w-[40%]">
                                                <p className={`text-[11px] truncate ${isSpecial ? 'text-slate-600' : 'text-slate-300'}`}>{m.memo || '-'}</p>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                            {memberList.filter(m => {
                                if (!m.end_date) return false;
                                const diff = (new Date(m.end_date) - new Date()) / (1000 * 60 * 60 * 24);
                                return diff >= 0 && diff <= 7;
                            }).length === 0 && (
                                    <p className="text-xs text-slate-500 italic py-4 text-center">만기 예정 회원이 없습니다.</p>
                                )}
                        </div>
                    </motion.div>

                    {/* Right Module: Personal & One-day */}
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-violet-500/5 border border-violet-500/10 rounded-3xl p-6"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></div>
                            <h4 className="text-xs font-black text-violet-400 uppercase tracking-widest">맞춤상담 및 원데이 현황</h4>
                        </div>
                        <div className="space-y-3">
                            {memberList
                                .filter(m => {
                                    const isTarget = m.memo && (m.memo.includes('맞춤') || m.memo.includes('체험') || m.memo.includes('1회') || m.memo.includes('원데이'));
                                    if (!isTarget) return false;

                                    if (!m.end_date) return false;
                                    const today = new Date();
                                    today.setHours(0, 0, 0, 0);
                                    const endDate = new Date(m.end_date);
                                    const diff = (endDate - today) / (1000 * 60 * 60 * 24);
                                    return diff >= 0 && diff <= 7;
                                })
                                .slice(0, 3)
                                .map((m, i) => (
                                    <div key={i} className="bg-[#0f172a]/60 p-4 rounded-2xl border border-white/5 flex justify-between items-center group hover:bg-[#0f172a] transition-colors">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-sm font-bold text-slate-200">{m.name}</span>
                                                <span className={`text-[9px] font-black px-1.5 py-0.5 rounded text-white ${m.memo.includes('원데이') ? 'bg-violet-500' : 'bg-fuchsia-500'}`}>
                                                    {m.memo.includes('원데이') ? '원데이' : '맞춤상담'}
                                                </span>
                                            </div>
                                            <span className="text-[11px] text-slate-500 font-mono">{m.phone}</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-[11px] text-violet-400 font-bold font-mono">{m.end_date || '날짜 미정'}</span>
                                        </div>
                                    </div>
                                ))
                            }
                            {memberList.filter(m => m.memo && (m.memo.includes('맞춤') || m.memo.includes('체험') || m.memo.includes('1회') || m.memo.includes('원데이'))).length === 0 && (
                                <p className="text-xs text-slate-500 italic py-4 text-center">해당 내역이 없습니다.</p>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default StatsGrid;
