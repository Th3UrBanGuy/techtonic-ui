import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, MessageSquare, Users, Mail, LogOut, Disc, Settings as SettingsIcon, Database, Link2 } from 'lucide-react';

interface DashboardLayoutProps {
    children: React.ReactNode;
    activeTab: string;
    setActiveTab: (tab: string) => void;
    onLogout: () => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, activeTab, setActiveTab, onLogout }) => {
    const tabs = [
        { id: 'overview', label: 'OVERVIEW', icon: LayoutDashboard },
        { id: 'links', label: 'LINK CENTER', icon: Link2 },
        { id: 'chat', label: 'MESSAGES', icon: MessageSquare },
        { id: 'members', label: 'OPERATIVES', icon: Users },
        { id: 'contact', label: 'INQUIRIES', icon: Mail },
        { id: 'content', label: 'CONTENT', icon: Database },
        { id: 'settings', label: 'SETTINGS', icon: SettingsIcon },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-cyan-500/30">
            {/* Background Ambience */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-black z-0 pointer-events-none" />
            <div className="fixed top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-900 to-transparent z-10" />

            <div className="relative z-10 flex min-h-screen">
                {/* Sidebar */}
                <div className="w-64 border-r border-white/5 bg-slate-900/50 backdrop-blur-xl hidden lg:flex flex-col">
                    <div className="p-6 border-b border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                                    <Disc className="animate-spin-slow" size={20} />
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900 animate-pulse" />
                            </div>
                            <div>
                                <h1 className="font-bold text-lg tracking-wider">TECHTONIC</h1>
                                <p className="text-[10px] text-cyan-400 font-mono tracking-widest">PORTAL V1.0</p>
                            </div>
                        </div>
                    </div>

                    <nav className="flex-1 p-4 space-y-2">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all group relative overflow-hidden ${isActive
                                        ? 'bg-cyan-500/10 text-cyan-400 font-bold shadow-[0_0_20px_rgba(6,182,212,0.1)]'
                                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute left-0 top-0 w-[2px] h-full bg-cyan-400"
                                        />
                                    )}
                                    <Icon size={18} className={isActive ? 'animate-pulse' : ''} />
                                    <span className="text-sm tracking-wide">{tab.label}</span>
                                    {isActive && <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-cyan-500/10 to-transparent" />}
                                </button>
                            );
                        })}
                    </nav>

                    <div className="p-4 border-t border-white/5">
                        <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-xl p-4 mb-4 border border-white/5 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            <h4 className="text-xs font-bold text-indigo-300 mb-1">SYSTEM STATUS</h4>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                <span className="text-xs text-white font-mono">OPTIMAL</span>
                            </div>
                        </div>
                        <button
                            onClick={onLogout}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors bg-slate-900/50"
                        >
                            <LogOut size={18} />
                            <span className="text-sm">TERMINATE</span>
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col h-screen overflow-hidden">
                    {/* Mobile Header */}
                    <div className="lg:hidden h-16 border-b border-white/5 flex items-center justify-between px-6 bg-slate-900/80 backdrop-blur-md">
                        <div className="font-bold tracking-wider">TECHTONIC PORTAL</div>
                        <button onClick={onLogout}><LogOut size={18} /></button>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-12 pb-32 custom-scrollbar">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                            >
                                <header className="mb-8">
                                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 inline-block">
                                        {tabs.find(t => t.id === activeTab)?.label}
                                    </h2>
                                    <motion.div
                                        layoutId="activeTabUnderline"
                                        className="h-1 w-20 bg-cyan-500 mt-2 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                                    />
                                </header>
                                {children}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Bottom Navigation for Mobile */}
                    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-slate-900/90 backdrop-blur-xl border-t border-white/10 p-4 flex justify-around z-50">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`p-2 rounded-lg ${isActive ? 'text-cyan-400 bg-cyan-500/10' : 'text-slate-500'}`}
                                >
                                    <Icon size={24} />
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
