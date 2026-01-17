import React from 'react';
import { motion } from 'framer-motion';
import { TEAM } from '../constants';
import { Linkedin, Award, ShieldCheck, Globe, Zap, Target, Users, Trophy } from 'lucide-react';

const Company = () => {
    const achievements = [
        {
            title: "ISO 27001 Certified",
            issuer: "International Standards Organization",
            year: "2023",
            icon: ShieldCheck,
            color: "text-emerald-500 dark:text-emerald-400",
            border: "hover:border-emerald-500/50"
        },
        {
            title: "Top 50 Innovators",
            issuer: "TechCrunch Disrupt",
            year: "2024",
            icon: Zap,
            color: "text-yellow-500 dark:text-yellow-400",
            border: "hover:border-yellow-500/50"
        },
        {
            title: "Carbon Neutral",
            issuer: "Global Climate Initiative",
            year: "2022",
            icon: Globe,
            color: "text-blue-500 dark:text-blue-400",
            border: "hover:border-blue-500/50"
        },
        {
            title: "Enterprise Security Award",
            issuer: "CyberDefense Magazine",
            year: "2023",
            icon: Trophy,
            color: "text-purple-500 dark:text-purple-400",
            border: "hover:border-purple-500/50"
        }
    ];

    const stats = [
        { label: "Founded", value: "2018" },
        { label: "Global Offices", value: "12" },
        { label: "Engineers", value: "450+" },
        { label: "Patents", value: "84" }
    ];

  return (
    <div className="min-h-screen pt-24 pb-24 bg-white dark:bg-[#050505] text-slate-900 dark:text-white overflow-hidden relative font-sans transition-colors duration-500">
      
       {/* Background Elements */}
       <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-brand-50 to-transparent dark:from-brand-900/10 dark:to-transparent pointer-events-none" />
       <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-100 dark:bg-purple-900/10 blur-[100px] rounded-full pointer-events-none opacity-50 dark:opacity-100" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HERO / INTRO */}
        <div className="text-center mb-24">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm text-xs font-mono text-brand-600 dark:text-brand-400 mb-6"
            >
                <Users size={14} />
                <span>HUMAN-CENTRIC TECHNOLOGY</span>
            </motion.div>
            
            <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-slate-900 dark:text-white"
            >
                THE ARCHITECTS<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-400 dark:from-gray-200 dark:to-gray-600">OF TOMORROW</span>
            </motion.h1>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto"
            >
                Tectonic isn't just a company; it's a convergence of specialized intelligence. 
                Founded on the belief that the future belongs to those who build it, we unify 
                software, security, and robotics into a singular, evolutionary force.
            </motion.p>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">
            {stats.map((stat, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 border border-slate-200 dark:border-gray-800 bg-slate-50 dark:bg-gray-900/30 rounded-xl text-center hover:bg-slate-100 dark:hover:bg-gray-800/50 transition-colors"
                >
                    <div className="text-3xl md:text-4xl font-mono font-bold text-slate-900 dark:text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-slate-500 dark:text-gray-500 uppercase tracking-widest">{stat.label}</div>
                </motion.div>
            ))}
        </div>

        {/* MISSION SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
            <div>
                <h2 className="text-3xl font-mono font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
                    <Target className="text-brand-500" /> OUR MISSION
                </h2>
                <div className="space-y-6 text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
                    <p>
                        We operate at the intersection of imagination and engineering. Our mandate is simple: 
                        <strong className="text-slate-900 dark:text-white"> to dismantle the limitations of current infrastructure.</strong>
                    </p>
                    <p>
                        From the microscopic precision of our code to the kinetic power of our robotics, every 
                        Techtonic innovation is designed to be scalable, secure, and sustainable. We don't just 
                        adapt to change; we author it.
                    </p>
                </div>
            </div>
            <div className="relative group">
                <div className="absolute inset-0 bg-brand-500/10 blur-3xl rounded-full group-hover:bg-brand-500/20 transition-colors duration-700" />
                <div className="relative border border-slate-200 dark:border-gray-700 bg-white/80 dark:bg-black/80 p-8 rounded-2xl backdrop-blur-xl shadow-2xl">
                    <div className="flex gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="font-mono text-sm text-green-600 dark:text-green-500 mb-4">{'>'} System.Identity.Load()</div>
                    <div className="space-y-2 font-mono text-sm text-slate-600 dark:text-gray-300">
                        <p><span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">vision</span> = <span className="text-orange-600 dark:text-orange-400">"Limitless"</span>;</p>
                        <p><span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">values</span> = [<span className="text-green-600 dark:text-green-300">"Integrity"</span>, <span className="text-green-600 dark:text-green-300">"Precision"</span>, <span className="text-green-600 dark:text-green-300">"Evolution"</span>];</p>
                        <p><span className="text-purple-600 dark:text-purple-400">while</span>(true) {'{'}</p>
                        <p className="pl-4">Innovation.accelerate();</p>
                        <p className="pl-4">Humanity.empower();</p>
                        <p>{'}'}</p>
                    </div>
                </div>
            </div>
        </div>

        {/* TEAM SECTION */}
        <div className="mb-32">
            <div className="flex items-end justify-between mb-12 border-b border-slate-200 dark:border-gray-800 pb-4">
                <h2 className="text-3xl font-mono font-bold text-slate-900 dark:text-white">THE CORE LEADERSHIP</h2>
                <div className="hidden md:block text-xs font-mono text-slate-500 dark:text-gray-500">
                    // BOARD OF DIRECTORS // EXECUTIVE WING
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
                <motion.div 
                    key={member.id} 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative h-[400px] rounded-xl overflow-hidden bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-gray-800"
                >
                    {/* Image */}
                    <div className="absolute inset-0">
                        <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 dark:opacity-80 group-hover:opacity-40 transition-opacity" />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="border-l-2 border-brand-500 pl-4 mb-4">
                            <h3 className="text-2xl font-bold text-white leading-none mb-1 shadow-black drop-shadow-md">{member.name}</h3>
                            <p className="text-brand-300 font-mono text-xs uppercase tracking-wider shadow-black drop-shadow-sm">{member.role}</p>
                        </div>
                        
                        <div className="max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 transition-all duration-500 overflow-hidden bg-black/60 backdrop-blur-sm rounded p-3">
                            <p className="text-sm text-gray-200 mb-4 leading-snug">{member.bio}</p>
                            <a href={member.linkedin} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-brand-400 transition-colors bg-white/10 px-3 py-2 rounded backdrop-blur-sm">
                                <Linkedin size={14} /> Connect Profile
                            </a>
                        </div>
                    </div>
                </motion.div>
            ))}
            </div>
        </div>

        {/* ACHIEVEMENTS SECTION */}
        <div>
           <div className="text-center mb-16">
              <h2 className="text-3xl font-mono font-bold mb-4 text-slate-900 dark:text-white">CERTIFICATIONS & RECOGNITION</h2>
              <div className="w-24 h-1 bg-brand-500 mx-auto" />
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`relative p-6 rounded-xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] group hover:bg-slate-50 dark:hover:bg-gray-900 transition-all duration-300 overflow-hidden ${item.border}`}
                  >
                      {/* Glow effect */}
                      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${item.color.replace('text-', 'from-')}/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                      
                      <div className={`w-12 h-12 rounded-lg bg-slate-100 dark:bg-gray-900 flex items-center justify-center mb-6 border border-slate-200 dark:border-gray-800 group-hover:scale-110 transition-transform ${item.color}`}>
                          <item.icon size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight">{item.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-gray-500 font-mono mb-1">{item.issuer}</p>
                      <div className="text-xs text-slate-400 dark:text-gray-600 border-t border-slate-100 dark:border-gray-800 pt-3 mt-4 flex justify-between items-center">
                          <span className="flex items-center gap-1"><Award size={12}/> ISSUED</span>
                          <span className="text-slate-600 dark:text-gray-400 font-bold">{item.year}</span>
                      </div>
                  </motion.div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default Company;