import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Filter } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState<string>('All');
  const filters = ['All', 'Software', 'Security', 'Robotics', 'Consultancy'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 bg-white dark:bg-dark-bg transition-colors duration-500">
       <div className="max-w-7xl mx-auto">
         <div className="flex flex-col md:flex-row justify-between items-center mb-12">
           <div>
             <h1 className="text-4xl font-bold mb-2 text-slate-900 dark:text-white">Case Studies</h1>
             <p className="text-slate-600 dark:text-gray-400">Engineering success through precision.</p>
           </div>
           
           <div className="flex items-center gap-2 mt-6 md:mt-0 overflow-x-auto max-w-full pb-2 md:pb-0">
             <Filter size={16} className="text-slate-500 dark:text-gray-500 mr-2" />
             {filters.map(f => (
               <button
                 key={f}
                 onClick={() => setFilter(f)}
                 className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                   filter === f 
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-black' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800'
                 }`}
               >
                 {f}
               </button>
             ))}
           </div>
         </div>

         <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <AnimatePresence>
             {filteredProjects.map((project) => (
               <motion.div
                 layout
                 key={project.id}
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.9 }}
                 className="group border border-slate-200 dark:border-gray-800 bg-slate-50 dark:bg-gray-900 rounded-xl overflow-hidden hover:border-slate-400 dark:hover:border-gray-600 transition-colors shadow-sm dark:shadow-none"
               >
                 <div className="h-64 overflow-hidden relative">
                   <div className="absolute inset-0 bg-black/10 dark:bg-black/40 group-hover:bg-transparent transition-colors z-10" />
                   <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                   />
                   <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur rounded text-xs font-mono uppercase text-slate-900 dark:text-white shadow-lg">
                     {project.category}
                   </div>
                 </div>
                 
                 <div className="p-8">
                   <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
                   <p className="text-sm text-brand-600 dark:text-brand-500 mb-6 font-mono">{project.client}</p>
                   
                   <div className="space-y-4 text-sm text-slate-600 dark:text-gray-400">
                     <div className="flex gap-2">
                       <span className="font-bold text-slate-800 dark:text-gray-300 min-w-[80px]">Challenge:</span>
                       <span>{project.challenge}</span>
                     </div>
                     <div className="flex gap-2">
                       <span className="font-bold text-slate-800 dark:text-gray-300 min-w-[80px]">Solution:</span>
                       <span>{project.solution}</span>
                     </div>
                     <div className="pt-4 border-t border-slate-200 dark:border-gray-800">
                       <span className="font-bold text-slate-900 dark:text-white block mb-1">Impact Metrics</span>
                       <span className="text-green-600 dark:text-green-400">{project.impact}</span>
                     </div>
                   </div>
                 </div>
               </motion.div>
             ))}
           </AnimatePresence>
         </motion.div>
       </div>
    </div>
  );
};

export default Portfolio;