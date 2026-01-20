import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Clock, AlertTriangle } from 'lucide-react';

const Maintenance = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#050505] relative overflow-hidden px-4">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-2xl w-full relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/50 dark:bg-black/50 backdrop-blur-xl border border-slate-200 dark:border-gray-800 p-8 sm:p-12 rounded-3xl shadow-2xl"
                >
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex justify-center mb-8"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-yellow-500/20 blur-xl rounded-full animate-pulse" />
                            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg relative z-10">
                                <Wrench className="w-10 h-10 text-white" />
                            </div>
                        </div>
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                        SYSTEM <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">MAINTENANCE</span>
                    </h1>

                    <p className="text-lg text-slate-600 dark:text-gray-400 mb-8 leading-relaxed">
                        Our architects are currently upgrading the core infrastructure. <br className="hidden sm:block" />
                        The system will be back online shortly.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center gap-4">
                            <div className="p-2 bg-blue-500/10 rounded-lg">
                                <Clock className="w-5 h-5 text-blue-500" />
                            </div>
                            <div className="text-left">
                                <div className="text-xs text-slate-500 dark:text-gray-500 uppercase font-bold">Estimated Time</div>
                                <div className="font-mono text-slate-900 dark:text-gray-300">~45 Minutes</div>
                            </div>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center gap-4">
                            <div className="p-2 bg-green-500/10 rounded-lg">
                                <AlertTriangle className="w-5 h-5 text-green-500" />
                            </div>
                            <div className="text-left">
                                <div className="text-xs text-slate-500 dark:text-gray-500 uppercase font-bold">Status</div>
                                <div className="font-mono text-green-500">Optimizing...</div>
                            </div>
                        </div>
                    </div>

                    <div className="text-xs font-mono text-slate-400 dark:text-gray-600">
                        SESSION ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Maintenance;
