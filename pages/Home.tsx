import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Activity, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WINGS, PROJECTS, PARTNERSHIPS } from '../constants';


// Extracted Components
import ThreeDBackground from '../components/home/ThreeDBackground';
import HeroTitle from '../components/home/HeroTitle';
import GradientButton from '../components/ui/GradientButton';
import CyberpunkButton from '../components/ui/CyberpunkButton';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-500">
        {/* Background Architecture */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Dark Mode Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] z-10 hidden dark:block"></div>

          {/* Light Mode Gradient Mesh (Matches Reference Image) */}
          <div className="absolute inset-0 dark:hidden">
            <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-orange-100/60 rounded-full blur-[120px] mix-blend-multiply"></div>
            <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-cyan-100/60 rounded-full blur-[120px] mix-blend-multiply"></div>
            <div className="absolute top-[30%] left-[20%] w-[50%] h-[50%] bg-purple-100/50 rounded-full blur-[100px] mix-blend-multiply"></div>
            <div className="absolute bottom-[-10%] right-[10%] w-[40%] h-[40%] bg-teal-50/50 rounded-full blur-[80px]"></div>
          </div>

          {/* Dark Mode 3D Elements */}
          <div className="hidden dark:block absolute inset-0">
            <ThreeDBackground />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px] -z-10 pointer-events-none dark:block hidden"
          />

          <HeroTitle />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-2xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto mb-10 font-light"
          >
            Architecting tomorrow's infrastructure. We bridge the gap between human potential and machine intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <CyberpunkButton to="/wings">
              EXPLORE ECOSYSTEM <ArrowRight size={18} style={{ display: 'inline', verticalAlign: 'middle' }} />
            </CyberpunkButton>
            <GradientButton to="/innovation">
              R&D LAB ACCESS
            </GradientButton>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Grid */}
      <section className="py-24 bg-slate-50 dark:bg-dark-bg relative z-10 border-t border-slate-200 dark:border-gray-900 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 text-slate-900 dark:text-white">OUR WINGS</h2>
            <div className="w-24 h-1 bg-brand-600"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WINGS.map((wing, index) => (
              <motion.div
                key={wing.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-96 p-8 border border-slate-200 bg-white dark:border-gray-800 dark:bg-gray-900/50 hover:shadow-xl dark:hover:bg-gray-800 transition-all duration-500 overflow-hidden rounded-xl"
              >
                <div className={`absolute top-0 left-0 w-1 h-full ${wing.color.replace('text-', 'bg-')} opacity-0 group-hover:opacity-100 transition-opacity`}></div>

                <wing.icon className={`w-12 h-12 mb-6 ${wing.color}`} />
                <h3 className="text-xl font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300 text-slate-900 dark:text-white">{wing.name}</h3>
                <p className="text-xs font-mono text-slate-500 dark:text-gray-500 mb-4">{wing.tagline}</p>
                <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed mb-6">
                  {wing.description}
                </p>

                <div className="absolute bottom-8 left-8">
                  <Link to={`/wings?id=${wing.id}`} className="text-sm font-medium flex items-center gap-2 text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-500 transition-colors">
                    Access Node <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Project Details Section */}
      <section className="py-24 border-t border-slate-200 dark:border-gray-900 bg-white dark:bg-gradient-to-b dark:from-gray-900/50 dark:to-dark-bg relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-mono font-bold mb-4 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent"
            >
              FEATURED PROJECTS
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Real-world solutions delivering measurable impact
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PROJECTS.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative"
              >
                {/* Glassy Project Card */}
                <div className="relative h-full rounded-2xl border border-slate-200/60 dark:border-gray-700/50 bg-white/60 dark:bg-gray-800/40 backdrop-blur-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border ${project.category === 'Software' ? 'bg-cyan-500/80 border-cyan-400/50 text-white' :
                        project.category === 'Security' ? 'bg-orange-500/80 border-orange-400/50 text-white' :
                          project.category === 'Robotics' ? 'bg-purple-500/80 border-purple-400/50 text-white' :
                            'bg-emerald-500/80 border-emerald-400/50 text-white'
                        }`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-4 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-sm text-gray-300 font-mono">{project.client}</p>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h4 className="text-sm font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wide mb-2">Challenge</h4>
                      <p className="text-sm text-slate-700 dark:text-gray-300">{project.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wide mb-2">Solution</h4>
                      <p className="text-sm text-slate-700 dark:text-gray-300">{project.solution}</p>
                    </div>

                    <div className="pt-4 border-t border-slate-200 dark:border-gray-700">
                      <h4 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide mb-2">Impact</h4>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{project.impact}</p>
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-orange-500/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-orange-500/10 hover:from-cyan-500/20 hover:via-purple-500/20 hover:to-orange-500/20 border border-slate-200/60 dark:border-gray-700/50 backdrop-blur-xl text-slate-900 dark:text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <span>View All Projects</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Partnership Section */}
      <section className="py-24 border-t border-slate-200 dark:border-gray-900 bg-gradient-to-b from-slate-50 to-white dark:from-dark-bg dark:to-gray-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-300/20 to-purple-300/20 dark:from-cyan-500/10 dark:to-purple-500/10 rounded-full blur-[100px]"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-300/20 to-emerald-300/20 dark:from-orange-500/10 dark:to-emerald-500/10 rounded-full blur-[100px]"
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-mono font-bold mb-4 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent"
            >
              OUR PARTNERSHIPS
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Collaborating with industry leaders to deliver excellence
            </motion.p>
          </div>

          {/* Partnership Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            <div className="text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/30 backdrop-blur-xl border border-slate-200/60 dark:border-gray-700/50">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent mb-2">6+</div>
              <div className="text-sm text-slate-600 dark:text-gray-400 font-medium">Strategic Partners</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/30 backdrop-blur-xl border border-slate-200/60 dark:border-gray-700/50">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent mb-2">4</div>
              <div className="text-sm text-slate-600 dark:text-gray-400 font-medium">Technology Sectors</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/30 backdrop-blur-xl border border-slate-200/60 dark:border-gray-700/50">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-emerald-600 bg-clip-text text-transparent mb-2">99.9%</div>
              <div className="text-sm text-slate-600 dark:text-gray-400 font-medium">Service Uptime</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/30 backdrop-blur-xl border border-slate-200/60 dark:border-gray-700/50">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-sm text-slate-600 dark:text-gray-400 font-medium">Global Support</div>
            </div>
          </motion.div>

          {/* Partnership Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {PARTNERSHIPS.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                {/* Glassy Partner Card */}
                <div className="relative p-8 rounded-2xl border border-slate-200/60 dark:border-gray-700/50 bg-white/70 dark:bg-gray-800/40 backdrop-blur-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col items-center justify-center aspect-square">
                  {/* Logo */}
                  <div className="relative w-full h-20 mb-4 flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain filter dark:brightness-0 dark:invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>

                  {/* Partner Info - Shows on Hover */}
                  <div className="absolute inset-0 p-6 rounded-2xl bg-gradient-to-br from-cyan-500/95 via-purple-500/95 to-orange-500/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center">
                    <h4 className="text-white font-bold text-lg mb-2">{partner.name}</h4>
                    <p className="text-white/90 text-xs font-mono mb-2 uppercase tracking-wide">{partner.category}</p>
                    <p className="text-white/80 text-xs leading-relaxed mb-3">{partner.description}</p>
                    <span className="text-white/70 text-xs font-semibold">Since {partner.since}</span>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-orange-500/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Feed */}
      <section className="py-12 bg-slate-950 border-y border-gray-900 overflow-hidden">
        <div className="flex whitespace-nowrap animate-[float_20s_linear_infinite]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 px-6">
              <span className="text-gray-500 font-mono text-sm uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                LATEST: Nexus Financial Core deployed successfully
              </span>
              <span className="text-gray-500 font-mono text-sm uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></span>
                NEWS: Robotics wing secures Series B funding
              </span>
              <span className="text-gray-500 font-mono text-sm uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                UPDATE: Quantum encryption protocols passing stage 2
              </span>
              <span className="text-gray-500 font-mono text-sm uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                ALERT: Global cyber threat index stabilized
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;