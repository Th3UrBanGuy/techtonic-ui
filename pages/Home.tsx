import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Activity, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WINGS } from '../constants';

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

      {/* Global Impact Map Visualization */}
      <section className="py-24 border-t border-slate-200 dark:border-gray-900 bg-white dark:bg-gradient-to-b dark:from-dark-bg dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-6 text-slate-900 dark:text-white">GLOBAL IMPACT</h2>
            <p className="text-slate-600 dark:text-gray-400 mb-8 text-lg">
              Operating across 12 countries with 3 regional HQs. We are deploying solutions that serve over 500 million end-users daily.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 border border-slate-200 dark:border-gray-800 rounded-lg bg-slate-50 dark:bg-transparent">
                <Globe className="text-brand-500 mb-3" size={32} />
                <div className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">12</div>
                <div className="text-sm text-slate-500 dark:text-gray-500">Countries Operational</div>
              </div>
              <div className="p-6 border border-slate-200 dark:border-gray-800 rounded-lg bg-slate-50 dark:bg-transparent">
                <Activity className="text-purple-500 mb-3" size={32} />
                <div className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">150+</div>
                <div className="text-sm text-slate-500 dark:text-gray-500">Active Projects</div>
              </div>
              <div className="p-6 border border-slate-200 dark:border-gray-800 rounded-lg bg-slate-50 dark:bg-transparent">
                <Cpu className="text-orange-500 mb-3" size={32} />
                <div className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">45TB</div>
                <div className="text-sm text-slate-500 dark:text-gray-500">Data Secured Daily</div>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] border border-slate-200 dark:border-gray-800 rounded-xl bg-slate-50 dark:bg-gray-950 flex items-center justify-center overflow-hidden shadow-inner">
            {/* Abstract Map Visualization */}
            <div className="absolute inset-0 opacity-10 dark:opacity-20"
              style={{
                backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}>
            </div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-32 h-32 bg-brand-500/20 rounded-full blur-3xl absolute top-1/4 left-1/4"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="w-40 h-40 bg-purple-500/20 rounded-full blur-3xl absolute bottom-1/3 right-1/4"
            />

            {/* Map Nodes */}
            <div className="relative z-10 w-full h-full">
              {/* Simple SVG Map Representation */}
              <svg viewBox="0 0 400 200" className="w-full h-full stroke-slate-300 dark:stroke-gray-700 fill-none stroke-1">
                <path d="M50,80 Q100,20 180,60 T350,90" className="animate-pulse" strokeDasharray="4 4" />
                <path d="M60,120 Q150,150 220,100 T340,140" className="animate-pulse" strokeDasharray="4 4" strokeOpacity="0.5" />
                <circle cx="50" cy="80" r="3" className="fill-brand-500" />
                <circle cx="180" cy="60" r="3" className="fill-purple-500" />
                <circle cx="350" cy="90" r="3" className="fill-orange-500" />
                <circle cx="340" cy="140" r="3" className="fill-slate-400 dark:fill-white" />
              </svg>
            </div>
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