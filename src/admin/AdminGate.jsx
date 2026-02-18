import React, { useState } from 'react';
import { Lock } from 'lucide-react';

const AdminGate = ({ children }) => {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return sessionStorage.getItem('admin_authenticated') === 'true';
    });

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'truebeing76') {
            setIsAuthenticated(true);
            sessionStorage.setItem('admin_authenticated', 'true');
        } else {
            alert('비밀번호가 틀렸습니다.');
        }
    };

    if (isAuthenticated) {
        return <div className="admin-root">{children}</div>;
    }

    return (
        <div className="admin-root">
            <div className="min-h-screen bg-[#050b18] flex items-center justify-center p-6">
                <div className="max-w-md w-full glass p-10 rounded-[2.5rem] text-center">
                    <div className="w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
                        <Lock className="text-emerald-500" size={32} />
                    </div>
                    <h2 className="text-2xl font-black text-white mb-2">내부 관리 시스템</h2>
                    <p className="text-slate-500 text-sm font-bold mb-10">승인된 사용자만 접근 가능합니다.</p>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <input
                            type="password"
                            placeholder="비밀번호 입력"
                            className="w-full bg-slate-900/50 border border-white/10 p-5 rounded-2xl text-center text-xl font-bold text-white outline-none focus:ring-4 ring-emerald-500/10 focus:border-emerald-500/30 transition-all"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoFocus
                        />
                        <button
                            type="submit"
                            className="w-full py-5 bg-emerald-500 text-[#050b18] rounded-2xl font-black text-lg transition-all hover:scale-[1.02] active:scale-95 shadow-[0_20px_40px_-10px_rgba(16,185,129,0.3)]"
                        >
                            로그인
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminGate;
