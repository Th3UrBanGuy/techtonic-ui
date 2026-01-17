import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { Activity, Users, Globe, Shield, Zap } from 'lucide-react';

const data = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 2000 },
    { name: 'Apr', value: 2780 },
    { name: 'May', value: 1890 },
    { name: 'Jun', value: 4390 },
    { name: 'Jul', value: 3490 },
];

const StatCard = ({ title, value, icon: Icon, color, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors"
    >
        <div className="flex justify-between items-start">
            <div>
                <p className="text-slate-400 text-sm font-mono mb-1">{title}</p>
                <h3 className="text-2xl font-bold text-white">{value}</h3>
            </div>
            <div className={`p-3 rounded-lg bg-${color}-500/20 text-${color}-400`}>
                <Icon size={20} />
            </div>
        </div>
    </motion.div>
);

const Overview = () => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="TOTAL USERS" value="12,543" icon={Users} color="cyan" delay={0.1} />
                <StatCard title="ACTIVE SESSIONS" value="1,234" icon={Activity} color="purple" delay={0.2} />
                <StatCard title="GLOBAL REACH" value="89%" icon={Globe} color="emerald" delay={0.3} />
                <StatCard title="SYSTEM HEALTH" value="99.9%" icon={Zap} color="amber" delay={0.4} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="lg:col-span-2 p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm"
                >
                    <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <Activity className="text-cyan-400" size={18} />
                        TRAFFIC ANALYTICS
                    </h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                                <XAxis dataKey="name" stroke="#94a3b8" axisLine={false} tickLine={false} />
                                <YAxis stroke="#94a3b8" axisLine={false} tickLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc' }}
                                    itemStyle={{ color: '#06b6d4' }}
                                />
                                <Area type="monotone" dataKey="value" stroke="#06b6d4" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm"
                >
                    <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <Shield className="text-purple-400" size={18} />
                        SECURITY LOGS
                    </h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <div>
                                    <p className="text-xs text-slate-300 font-mono">System Check Passed</p>
                                    <p className="text-[10px] text-slate-500">10:4{i} AM - Node {i}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Overview;
