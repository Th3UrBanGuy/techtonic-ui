import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FlaskConical, ArrowRight, Download, Plus,
  Layers, Zap, Cloud, Cpu, Network, Bot,
  Lock, Calendar, Activity, CheckCircle2, ChevronLeft, ChevronRight,
  Code, Server, Database, Smartphone, Globe, Shield, Zap as ZapIcon
} from 'lucide-react';
import { TechStackItem, RoadmapItem } from '../types';
import { getTechStack, getRoadmap } from '../services/contentStorage';

// Icon mapping for dynamic loading
const iconMap: Record<string, any> = {
  Layers, Zap: ZapIcon, Cloud, Cpu, Network, Bot, Code, Server, Database,
  Smartphone, Globe, Shield, FlaskConical
};

const Innovation = () => {
  const [techStack, setTechStack] = useState<TechStackItem[]>([]);
  const [roadmap, setRoadmap] = useState<RoadmapItem[]>([]);

  useEffect(() => {
    setTechStack(getTechStack());
    setRoadmap(getRoadmap());
  }, []);



  return (
    <div className="min-h-screen pt-24 pb-12 bg-white dark:bg-[#050505] text-slate-900 dark:text-white relative overflow-hidden font-sans transition-colors duration-500">
      {/* Background Dots */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Header Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-slate-200 dark:border-gray-800 pb-4">
          <div className="text-[10px] md:text-xs font-mono text-slate-500 dark:text-gray-500 uppercase tracking-widest flex items-center gap-2">
            <span className="text-slate-600 dark:text-gray-600">HUB</span> /
            <span className="text-slate-600 dark:text-gray-600">INNOVATION CENTER</span> /
            <span className="text-brand-600 dark:text-brand-500">R&D LAB</span>
            <span className="text-slate-700 dark:text-gray-700">// TERMINAL V.2.04</span>
          </div>
          <div className="flex items-center gap-6 text-[9px] md:text-[10px] font-mono text-slate-500 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
              SYSTEM: ACTIVE
            </span>
            <span>LATENCY: 12ms</span>
            <span>CORE: 98%</span>
          </div>
        </div>

        {/* Title Area */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h1 className="text-5xl md:text-7xl font-mono font-black mb-6 tracking-tighter uppercase leading-[0.9] text-slate-900 dark:text-white">
              INNOVATION<br />& R&D LAB
            </h1>
            <p className="text-slate-600 dark:text-gray-400 max-w-2xl text-base md:text-lg font-light leading-relaxed">
              Experimental Phase: Variant 2. Focus on synthesis of mastered infrastructures and future roadmap projection.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="group px-6 py-3 border border-slate-300 dark:border-gray-700 hover:border-slate-400 dark:hover:border-gray-500 text-xs font-mono font-bold uppercase tracking-wider rounded flex items-center gap-2 transition-all bg-slate-100 dark:bg-black hover:bg-slate-200 dark:hover:bg-gray-900 text-slate-900 dark:text-white">
              <Download size={14} className="text-slate-500 dark:text-gray-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
              EXPORT SCHEMATICS
            </button>
            <button className="group px-6 py-3 bg-blue-600 dark:bg-blue-700 hover:bg-blue-500 dark:hover:bg-blue-600 text-white text-xs font-mono font-bold uppercase tracking-wider rounded flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20 dark:shadow-[0_0_20px_rgba(29,78,216,0.3)]">
              <Plus size={14} />
              NEW INITIATIVE
            </button>
          </div>
        </div>

        {/* SECTION 1: TECH STACK */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4 border-l-2 border-brand-500 pl-4">
              <h2 className="text-2xl font-mono font-bold uppercase tracking-tight text-slate-900 dark:text-white">SYNTHESIZED ECOSYSTEM</h2>
              <span className="text-slate-500 dark:text-gray-600 text-sm font-sans hidden md:inline-block">// MASTERED TECH STACK</span>
            </div>
            <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20 px-2 py-1 rounded border border-blue-200 dark:border-blue-800">STABILITY: 99.9%</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {techStack.map((tech, i) => {
              const IconComponent = iconMap[tech.iconName] || Code;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative h-40"
                >
                  {/* Card Container */}
                  <div className="absolute inset-0 bg-slate-50 dark:bg-[#0f0f0f] rounded-xl border border-slate-200 dark:border-gray-800 overflow-hidden transition-all duration-300 group-hover:border-slate-400 dark:group-hover:border-gray-600 group-hover:-translate-y-1 group-hover:shadow-lg dark:group-hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">

                    {/* Hover Grid Reveal */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                      style={{
                        backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
                        backgroundSize: '16px 16px'
                      }}
                    />

                    {/* Color Glow Top Right */}
                    <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${tech.color.replace('text-', 'from-')}/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                    {/* Content Layout */}
                    <div className="relative h-full p-5 flex flex-col justify-between z-10">
                      {/* Header */}
                      <div className="flex justify-between items-start">
                        <div className={`p-2.5 rounded-lg bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 ${tech.color} group-hover:bg-slate-100 dark:group-hover:bg-gray-800 group-hover:border-slate-300 dark:group-hover:border-gray-700 transition-all duration-300 shadow-sm`}>
                          <IconComponent size={20} />
                        </div>
                        <div className={`w-1.5 h-1.5 rounded-full ${tech.color.replace('text-', 'bg-')} animate-pulse shadow-[0_0_8px_currentColor]`}></div>
                      </div>

                      {/* Footer Info */}
                      <div>
                        <h3 className="font-mono font-bold text-sm text-slate-700 dark:text-gray-300 mb-2 group-hover:text-slate-900 dark:group-hover:text-white transition-colors tracking-wide">{tech.name}</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-mono text-slate-500 dark:text-gray-500 bg-slate-200 dark:bg-black/40 px-2 py-1 rounded border border-slate-300 dark:border-gray-800/50">{tech.version}</span>
                          <span className={`text-[8px] font-mono uppercase tracking-widest font-bold opacity-50 group-hover:opacity-100 transition-opacity duration-300 ${tech.color}`}>
                            {tech.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Animated Bottom Bar */}
                    <div className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out ${tech.color.replace('text-', 'bg-')}`}></div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* SECTION 2: ROADMAP */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4 border-l-2 border-brand-500 pl-4">
              <h2 className="text-2xl font-mono font-bold uppercase tracking-tight text-slate-900 dark:text-white">FUTURE HORIZONS</h2>
              <span className="text-slate-500 dark:text-gray-600 text-sm font-sans hidden md:inline-block">// 3D ROADMAP SCROLLER</span>
            </div>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full border border-slate-300 dark:border-gray-800 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-gray-800 transition-colors text-slate-600 dark:text-gray-400"><ChevronLeft size={16} /></button>
              <button className="w-8 h-8 rounded-full border border-slate-300 dark:border-gray-800 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-gray-800 transition-colors text-slate-600 dark:text-gray-400"><ChevronRight size={16} /></button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmap.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`relative h-[420px] rounded-2xl p-6 border border-slate-200 dark:border-gray-800 bg-gradient-to-b ${item.colorTheme} overflow-hidden group hover:border-slate-400 dark:hover:border-gray-600 transition-colors shadow-sm dark:shadow-none`}
              >
                <div className="flex justify-between items-start mb-12">
                  <span className="text-[9px] font-mono text-slate-500 dark:text-gray-500 uppercase">REF: {item.refId}</span>
                  {item.progress > 0 && (
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"></div>
                  )}
                </div>

                <div className="mb-4">
                  <span className="px-2 py-1 bg-blue-600 text-white text-[10px] font-mono font-bold rounded-sm uppercase tracking-wider">{item.quarter}</span>
                </div>

                <h3 className="text-3xl font-bold uppercase leading-none mb-4 break-words text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-12 border-l border-slate-300 dark:border-gray-700 pl-3">
                  {item.description}
                </p>

                <div className="absolute bottom-6 left-6 right-6">
                  {item.progress > 0 ? (
                    <>
                      <div className="h-1 w-full bg-slate-200 dark:bg-gray-800 rounded-full mb-3 overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${item.progress}%` }}></div>
                      </div>
                      <div className="flex justify-between items-end">
                        <span className="text-[10px] font-mono text-slate-500 dark:text-gray-300 uppercase">R&D PROGRESS: {item.progress}%</span>
                        <ArrowRight size={16} className="text-blue-500" />
                      </div>
                    </>
                  ) : (
                    <div className="flex justify-between items-center border-t border-slate-300/50 dark:border-gray-700/50 pt-4">
                      <span className="text-[10px] font-mono text-slate-500 dark:text-gray-400 uppercase">STATUS: {item.status.replace('_', ' ')}</span>
                      {item.status === 'SCHEDULED' ? <Calendar size={16} className="text-slate-400 dark:text-gray-500" /> : <Lock size={16} className="text-slate-400 dark:text-gray-600" />}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 3: BOTTOM STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-slate-200 dark:border-gray-800 bg-slate-50 dark:bg-[#0a0a0a] flex items-center justify-between group hover:border-blue-400 dark:hover:border-blue-900/50 transition-colors shadow-sm dark:shadow-none">
            <div>
              <div className="text-[10px] font-mono text-slate-500 dark:text-gray-500 uppercase tracking-wider mb-1">Active Experiments</div>
              <div className="text-4xl font-mono font-bold text-slate-900 dark:text-white flex items-baseline gap-2">
                42 <span className="text-sm text-blue-500">+3</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-500">
              <FlaskConical size={24} />
            </div>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 dark:border-gray-800 bg-slate-50 dark:bg-[#0a0a0a] flex items-center justify-between group hover:border-blue-400 dark:hover:border-blue-900/50 transition-colors shadow-sm dark:shadow-none">
            <div>
              <div className="text-[10px] font-mono text-slate-500 dark:text-gray-500 uppercase tracking-wider mb-1">Compute Allocation</div>
              <div className="text-4xl font-mono font-bold text-slate-900 dark:text-white flex items-baseline gap-2">
                8.4 <span className="text-sm text-slate-500 dark:text-gray-500">PFLOPS</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-500">
              <Activity size={24} />
            </div>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 dark:border-gray-800 bg-slate-50 dark:bg-[#0a0a0a] flex items-center justify-between group hover:border-blue-400 dark:hover:border-blue-900/50 transition-colors shadow-sm dark:shadow-none">
            <div>
              <div className="text-[10px] font-mono text-slate-500 dark:text-gray-500 uppercase tracking-wider mb-1">Patent Pipeline</div>
              <div className="text-4xl font-mono font-bold text-slate-900 dark:text-white flex items-baseline gap-2">
                128 <span className="text-sm text-green-600 dark:text-green-500 font-bold uppercase text-[10px] tracking-wide">Verified</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-500">
              <CheckCircle2 size={24} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Innovation;