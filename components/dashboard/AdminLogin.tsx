import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, ChevronRight, Hexagon } from 'lucide-react';

interface AdminLoginProps {
    onLogin: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Allow any email, specific password for demo
        if (password === 'admin123') {
            onLogin();
        } else {
            setError(true);
            setTimeout(() => setError(false), 2000);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden relative">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900 to-black pointer-events-none" />
            <div className="absolute w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[100px] -top-20 -left-20 animate-pulse" />
            <div className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -bottom-20 -right-20 animate-pulse delay-1000" />

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md relative z-10"
            >
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
                    {/* Decoration */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />

                    <div className="text-center mb-8">
                        <motion.div
                            className="w-20 h-20 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyan-500/30"
                            animate={{ boxShadow: ["0 0 0px rgba(6,182,212,0)", "0 0 20px rgba(6,182,212,0.3)", "0 0 0px rgba(6,182,212,0)"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Hexagon className="w-10 h-10 text-cyan-400" />
                        </motion.div>
                        <h2 className="text-3xl font-bold text-white tracking-tight">TECTONIC PORTAL</h2>
                        <p className="text-cyan-400/60 text-sm mt-2 font-mono">SECURE ACCESS REQUIRED</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-xs font-mono text-cyan-500/60 mb-2 ml-1">IDENTIFIER</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all font-mono"
                                placeholder="admin@nexus.com"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-mono text-cyan-500/60 mb-2 ml-1">PASSKEY</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all font-mono"
                                placeholder="••••••••"
                            />
                        </div>

                        {error && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-400 text-xs text-center font-mono"
                            >
                                ACCESS DENIED: INVALID CREDENTIALS
                            </motion.p>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 group"
                        >
                            INITIALIZE SESSION
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-[10px] text-slate-500 font-mono">
                            SYSTEM VERSION 2.0.4 <br />
                            ENCRYPTED CONNECTION ESTABLISHED
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AdminLogin;
