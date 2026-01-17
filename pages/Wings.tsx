import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { WINGS } from '../constants';
import { CheckCircle2, Layers, Cpu, Trophy, Calendar, Target, Zap, Award, Rocket } from 'lucide-react';

const Wings = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeWingId = searchParams.get('id') || 'software';
  const activeWing = WINGS.find(w => w.id === activeWingId) || WINGS[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeWingId]);

  // Check if this wing has team data
  const hasTeamData = activeWing.teamName && activeWing.teamLogo;

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-8 md:pb-12 px-4 md:px-6 bg-white dark:bg-dark-bg transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Tabs - Mobile Optimized */}
        <div className="flex overflow-x-auto gap-2 mb-8 md:mb-12 border-b border-slate-200 dark:border-gray-800 pb-3 md:pb-4 scrollbar-hide">
          {WINGS.map((wing) => (
            <button
              key={wing.id}
              onClick={() => setSearchParams({ id: wing.id })}
              className={`flex-shrink-0 px-4 md:px-6 py-2 md:py-3 rounded-t-lg font-mono text-xs md:text-sm transition-all duration-300 whitespace-nowrap ${activeWingId === wing.id
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
            className="space-y-8 md:space-y-16"
          >
            {/* Conditional Rendering: Team-based layout vs Standard layout */}
            {hasTeamData ? (
              // TEAM LAYOUT (Mobile Optimized)
              <>
                {/* Hero Section with Team Branding */}
                <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-900 dark:via-indigo-900 dark:to-blue-900 p-6 md:p-12 lg:p-16">
                  {/* Animated Background Elements */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-12 md:-top-24 -left-12 md:-left-24 w-48 md:w-96 h-48 md:h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-12 md:-bottom-24 -right-12 md:-right-24 w-56 md:w-96 h-56 md:h-96 bg-purple-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>

                  <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8 lg:gap-12 lg:flex-row">
                    {/* Team Logo - Mobile Optimized */}
                    <div className="flex justify-center w-full lg:w-auto lg:justify-start">
                      <div className="relative group">
                        <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-2xl md:rounded-3xl blur-xl md:blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border-2 md:border-4 border-white/20 backdrop-blur-sm">
                          <img
                            src={activeWing.teamLogo}
                            alt={activeWing.teamName}
                            className="w-full h-full object-contain drop-shadow-2xl"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Team Info - Mobile Optimized */}
                    <div className="text-white space-y-4 md:space-y-6 text-center lg:text-left flex-1">
                      <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                        <Zap className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="text-xs md:text-sm font-mono uppercase tracking-wider">Official Team</span>
                      </div>

                      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                        {activeWing.teamName}
                      </h1>

                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-mono text-purple-100">
                        {activeWing.teamSubtitle || 'IoT Base Research Club'}
                      </p>

                      <div className="flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start pt-2 md:pt-4">
                        <div className="px-3 md:px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                          <div className="text-lg md:text-2xl font-bold">{activeWing.teamAchievements?.length || 0}+</div>
                          <div className="text-xs text-purple-200">Achievements</div>
                        </div>
                        <div className="px-3 md:px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                          <div className="text-lg md:text-2xl font-bold">{activeWing.techStack.length}</div>
                          <div className="text-xs text-purple-200">Technologies</div>
                        </div>
                        <div className="px-3 md:px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                          <div className="text-lg md:text-2xl font-bold">{activeWing.teamTimeline?.length || 0}</div>
                          <div className="text-xs text-purple-200">Milestones</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mission & Purpose - Mobile Optimized */}
                {activeWing.teamPurpose && (
                  <div className="relative">
                    <div className="absolute -top-4 md:-top-8 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
                    <div className="pl-6 md:pl-12">
                      <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-lg flex-shrink-0">
                          <Target className="text-white" size={20} />
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">Our Mission</h2>
                      </div>
                      <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-gray-400 leading-relaxed">
                        {activeWing.teamPurpose}
                      </p>
                    </div>
                  </div>
                )}

                {/* Core Capabilities - Mobile Optimized */}
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6 md:mb-8 text-center">Core Capabilities</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {activeWing.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 border border-slate-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-xl hover:scale-105"
                      >
                        <div className="absolute top-3 right-3 md:top-4 md:right-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                          <CheckCircle2 className="text-purple-600 dark:text-purple-400" size={18} />
                        </div>
                        <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2 pr-10 md:pr-12">{feature}</h3>
                        <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack - Mobile Optimized */}
                <div className="relative p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950 dark:from-gray-950 dark:to-indigo-950 overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Cpu className="text-white" size={20} />
                      </div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Technology Stack</h2>
                    </div>

                    <div className="flex flex-wrap gap-2 md:gap-4">
                      {activeWing.techStack.map((tech, idx) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          className="group px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-md rounded-lg md:rounded-xl border border-white/20 hover:bg-white/20 hover:border-cyan-400 transition-all duration-300 hover:scale-110 cursor-pointer"
                        >
                          <span className="text-white font-mono font-semibold text-sm md:text-base lg:text-lg">{tech}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline & Achievements Grid - Mobile Optimized */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  {/* Timeline */}
                  {activeWing.teamTimeline && activeWing.teamTimeline.length > 0 && (
                    <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white dark:bg-gray-900 border-2 border-slate-200 dark:border-gray-800 shadow-lg">
                      <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg flex-shrink-0">
                          <Calendar className="text-white" size={20} />
                        </div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">Journey Timeline</h3>
                      </div>

                      <div className="space-y-4 md:space-y-6">
                        {activeWing.teamTimeline.map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex gap-4 md:gap-6 group"
                          >
                            <div className="flex-shrink-0 relative">
                              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <span className="font-black text-white text-base md:text-lg">{item.year}</span>
                              </div>
                              {idx < activeWing.teamTimeline!.length - 1 && (
                                <div className="absolute top-16 md:top-20 left-1/2 transform -translate-x-1/2 w-1 h-4 md:h-6 bg-gradient-to-b from-indigo-300 to-purple-300 dark:from-indigo-700 dark:to-purple-700"></div>
                              )}
                            </div>
                            <div className="flex-1 pt-2 md:pt-4">
                              <p className="text-sm sm:text-base md:text-lg font-semibold text-slate-700 dark:text-gray-300">{item.event}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Achievements */}
                  {activeWing.teamAchievements && activeWing.teamAchievements.length > 0 && (
                    <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 border-2 border-amber-200 dark:border-amber-900/50 shadow-lg">
                      <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg flex-shrink-0">
                          <Trophy className="text-white" size={20} />
                        </div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">Hall of Fame</h3>
                      </div>

                      <div className="space-y-3 md:space-y-4">
                        {activeWing.teamAchievements.map((achievement, idx) => {
                          const emoji = achievement.split(' ')[0];
                          const text = achievement.substring(achievement.indexOf(' ') + 1);

                          return (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-lg md:rounded-xl bg-white dark:bg-gray-900 border border-amber-200 dark:border-amber-900/50 hover:border-amber-400 dark:hover:border-amber-700 hover:shadow-md transition-all duration-300 group"
                            >
                              <div className="text-2xl md:text-3xl group-hover:scale-125 transition-transform duration-300 flex-shrink-0">{emoji}</div>
                              <p className="text-slate-700 dark:text-gray-300 font-medium text-sm md:text-base flex-1 pt-1">{text}</p>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              // STANDARD WING LAYOUT (Mobile Optimized for non-team wings)
              <>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                  {/* Left Content */}
                  <div className="lg:col-span-7 space-y-6 md:space-y-8">
                    <div className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-500 font-mono text-xs md:text-sm border border-brand-200 dark:border-brand-900/50 px-3 py-1 rounded bg-brand-50 dark:bg-brand-900/10">
                      <activeWing.icon size={16} />
                      <span>{activeWing.tagline}</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">{activeWing.name}</h1>

                    <p className="text-lg sm:text-xl text-slate-600 dark:text-gray-400 leading-relaxed">
                      {activeWing.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8">
                      {activeWing.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 md:p-4 border border-slate-200 dark:border-gray-800 rounded-lg bg-slate-50 dark:bg-gray-900/30 hover:border-purple-300 dark:hover:border-purple-700 transition-colors duration-300">
                          <CheckCircle2 className="text-brand-500 mt-1 shrink-0" size={18} />
                          <span className="text-sm md:text-base text-slate-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 md:pt-8">
                      <h3 className="font-mono text-xs md:text-sm text-slate-500 dark:text-gray-500 mb-3 md:mb-4 uppercase">Core Technologies</h3>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {activeWing.techStack.map((tech) => (
                          <span key={tech} className="px-3 md:px-4 py-1.5 md:py-2 bg-white dark:bg-gray-800 rounded text-xs md:text-sm font-mono text-brand-600 dark:text-brand-300 border border-slate-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Visuals - Hidden on mobile, shown on desktop */}
                  <div className="hidden lg:block lg:col-span-5">
                    <div className="relative h-[400px] lg:h-[500px] w-full bg-slate-100 dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-800 overflow-hidden group shadow-lg dark:shadow-none">
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
                        {activeWing.id === 'consultancy' && (
                          <Rocket size={120} className="text-emerald-600/20 dark:text-emerald-500/20 group-hover:rotate-12 transition-transform duration-700" />
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
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Wings;