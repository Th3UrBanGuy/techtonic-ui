import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { WINGS } from '../constants';
import { CheckCircle2, Layers, Cpu } from 'lucide-react';

const Wings = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeWingId = searchParams.get('id') || 'software';
  const activeWing = WINGS.find(w => w.id === activeWingId) || WINGS[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeWingId]);

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-white dark:bg-dark-bg transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-slate-200 dark:border-gray-800 pb-4">
          {WINGS.map((wing) => (
            <button
              key={wing.id}
              onClick={() => setSearchParams({ id: wing.id })}
              className={`px-6 py-3 rounded-t-lg font-mono text-sm transition-all duration-300 relative ${activeWingId === wing.id
                  ? 'bg-slate-100 text-slate-900 border-b-2 border-brand-500 dark:bg-gray-900 dark:text-white'
                  : 'text-slate-500 hover:text-slate-800 dark:text-gray-500 dark:hover:text-gray-300'
                }`}
            >
              {wing.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeWing.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-500 font-mono text-sm border border-brand-200 dark:border-brand-900/50 px-3 py-1 rounded bg-brand-50 dark:bg-brand-900/10">
                <activeWing.icon size={16} />
                <span>{activeWing.tagline}</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white">{activeWing.name}</h1>

              <p className="text-xl text-slate-600 dark:text-gray-400 leading-relaxed">
                {activeWing.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {activeWing.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 border border-slate-200 dark:border-gray-800 rounded-lg bg-slate-50 dark:bg-gray-900/30">
                    <CheckCircle2 className="text-brand-500 mt-1 shrink-0" size={18} />
                    <span className="text-slate-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <h3 className="font-mono text-sm text-slate-500 dark:text-gray-500 mb-4 uppercase">Core Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {activeWing.techStack.map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-white dark:bg-gray-800 rounded text-sm font-mono text-brand-600 dark:text-brand-300 border border-slate-200 dark:border-gray-700 shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Visuals */}
            <div className="lg:col-span-5">
              <div className="relative h-[500px] w-full bg-slate-100 dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-800 overflow-hidden group shadow-lg dark:shadow-none">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-100/50 to-purple-100/50 dark:from-brand-900/20 dark:to-purple-900/20 z-0"></div>

                {/* Decorative Elements based on wing */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  {activeWing.id === 'software' && (
                    <Layers size={120} className="text-cyan-600/20 dark:text-cyan-500/20 group-hover:text-cyan-600/40 dark:group-hover:text-cyan-500/40 transition-all duration-700 scale-110" />
                  )}
                  {activeWing.id === 'security' && (
                    <div className="w-48 h-48 border-4 border-orange-500/20 rounded-full flex items-center justify-center animate-pulse">
                      <div className="w-32 h-32 border-2 border-orange-500/40 rounded-full"></div>
                    </div>
                  )}
                  {activeWing.id === 'robotics' && (
                    <Cpu size={120} className="text-purple-600/20 dark:text-purple-500/20 group-hover:rotate-12 transition-transform duration-700" />
                  )}
                </div>

                {/* Simulated Terminal */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 glass p-6 font-mono text-xs text-green-700 dark:text-green-500 overflow-hidden bg-white/50 dark:bg-transparent">
                  <p>{'>'} initializing subsystem...</p>
                  <p>{'>'} loading assets for {activeWing.name}...</p>
                  <p>{'>'} status: connected</p>
                  <p className="animate-pulse">{'>'} _</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Wings;