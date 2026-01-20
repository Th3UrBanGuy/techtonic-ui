import React from 'react';
import { motion } from 'framer-motion';
import { WifiOff, RefreshCw, ServerOff } from 'lucide-react';

const SystemOffline = () => {
    const handleRetry = () => {
        window.location.reload();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#050505] relative overflow-hidden px-4">
            {/* Glitch Effect Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
                <div className="glitch-overlay absolute inset-0 bg-repeat bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
            </div>

            <div className="max-w-md w-full relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/50 dark:bg-black/50 backdrop-blur-xl border border-slate-200 dark:border-red-900/30 p-8 rounded-3xl shadow-2xl relative overflow-hidden"
                >
                    {/* Red pulse glow */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 animate-pulse" />

                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                        className="flex justify-center mb-6"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-red-500/20 blur-2xl rounded-full" />
                            <div className="w-24 h-24 bg-gradient-to-b from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-lg relative z-10 border-4 border-slate-50 dark:border-[#0f0f0f]">
                                <WifiOff className="w-10 h-10 text-white" />
                            </div>
                        </div>
                    </motion.div>

                    <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
                        SYSTEM <span className="text-red-500">OFFLINE</span>
                    </h1>

                    <p className="text-slate-600 dark:text-gray-400 mb-8">
                        Connection to the mainframe has been lost. The server is currently unreachable.
                    </p>

                    <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-xl p-4 mb-8">
                        <div className="flex items-center gap-3 text-red-600 dark:text-red-400 text-sm font-mono">
                            <ServerOff size={16} />
                            <span>Error Code: 503_SERVICE_UNAVAILABLE</span>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleRetry}
                        className="w-full py-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-xl font-bold font-mono tracking-wide flex items-center justify-center gap-2 hover:bg-slate-800 dark:hover:bg-gray-200 transition-colors"
                    >
                        <RefreshCw size={16} />
                        RECONNECT
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default SystemOffline;
