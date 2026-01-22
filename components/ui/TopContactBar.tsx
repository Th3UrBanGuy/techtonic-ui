import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

const TopContactBar = () => {
    return (
        <>
            {/* Contact Bar - Completely Isolated and Fixed at Top */}
            <div className="fixed top-0 left-0 right-0 z-50 w-full bg-gradient-to-r from-slate-950 via-gray-900 to-slate-950 dark:from-black dark:via-gray-950 dark:to-black overflow-hidden">
                {/* Animated Gradient Border */}
                <motion.div
                    className="absolute inset-0 opacity-75"
                    style={{
                        background: 'linear-gradient(90deg, #06b6d4, #8b5cf6, #ec4899, #f59e0b, #10b981, #06b6d4)',
                        backgroundSize: '200% 100%',
                    }}
                    animate={{
                        backgroundPosition: ['0% 0%', '200% 0%'],
                    }}
                    transition={{
                        duration: 3,
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                >
                    <div className="absolute inset-[2px] bg-slate-950 dark:bg-black" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-2">
                    <div className="flex items-center justify-between">
                        {/* Left Side - Phone */}
                        <motion.a
                            href="tel:+8801711234567"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="group flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
                        >
                            <motion.div
                                whileHover={{ rotate: 15, scale: 1.1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <Phone size={14} className="text-cyan-400" />
                            </motion.div>
                            <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                <span className="hidden sm:inline">+880 171-1234567</span>
                                <span className="sm:hidden">Call</span>
                            </span>
                        </motion.a>

                        {/* Center - TECHTONIC Branding - Professional */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="absolute left-1/2 -translate-x-1/2"
                        >
                            <div className="relative px-6 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
                                {/* Animated Glow */}
                                <motion.div
                                    className="absolute inset-0 rounded-full opacity-50"
                                    animate={{
                                        boxShadow: [
                                            '0 0 20px rgba(6, 182, 212, 0.3)',
                                            '0 0 30px rgba(139, 92, 246, 0.3)',
                                            '0 0 20px rgba(6, 182, 212, 0.3)',
                                        ],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                />

                                <div className="relative flex flex-col items-center">
                                    {/* Main Logo */}
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-xl sm:text-2xl font-black tracking-[0.15em] text-white font-mono drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                                            TECT
                                        </span>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                            className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                                        />
                                        <span className="text-xl sm:text-2xl font-black tracking-[0.15em] text-white font-mono drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                                            NIC
                                        </span>
                                    </div>

                                    {/* Tagline */}
                                    <div className="hidden sm:block text-[7px] font-mono font-bold tracking-[0.3em] text-cyan-400/80 mt-0.5 uppercase">
                                        Architecting Tomorrow
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side - Email */}
                        <motion.a
                            href="mailto:support@techt0nic.com"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="group flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, y: -2 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <Mail size={14} className="text-purple-400" />
                            </motion.div>
                            <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-purple-400 transition-colors">
                                <span className="hidden md:inline">support@techt0nic.com</span>
                                <span className="md:hidden">Email</span>
                            </span>
                        </motion.a>
                    </div>
                </div>

                {/* Animated Particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                            style={{
                                left: `${20 + i * 30}%`,
                                top: '50%',
                            }}
                            animate={{
                                x: [0, 100, 0],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 3 + i,
                                repeat: Infinity,
                                delay: i * 0.5,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Visual Separator - Creates Space Between Contact Bar and Site */}
            <div className="w-full h-4 bg-gradient-to-b from-slate-950 via-slate-900/50 to-transparent dark:from-black dark:via-gray-950/50 dark:to-transparent" />
        </>
    );
};

export default TopContactBar;
