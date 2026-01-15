import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Footer = () => (
  <footer className="bg-slate-50 dark:bg-black border-t border-slate-200 dark:border-gray-800 py-12 px-6 relative overflow-hidden transition-colors duration-500">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500 opacity-50" />
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-1">
        <Link to="/" className="block mb-6">
          <img 
            src="https://i.postimg.cc/1zYVVX5M/techtonic-dark.png" 
            alt="Techtonic Industries" 
            className="h-9 w-auto object-contain invert dark:invert-0 transition-all duration-300" 
          />
        </Link>
        <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
          Architecting the substrate of the future through integrated software, security, and robotic solutions.
        </p>
      </div>
      <div>
        <h3 className="font-bold mb-4 text-slate-900 dark:text-white">Ecosystem</h3>
        <ul className="space-y-2 text-sm text-slate-600 dark:text-gray-400">
          <li><Link to="/wings?id=software" className="hover:text-cyan-600 dark:hover:text-cyan-500 transition-colors">Software Mechanism</Link></li>
          <li><Link to="/wings?id=security" className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors">Cyber-Shield</Link></li>
          <li><Link to="/wings?id=robotics" className="hover:text-purple-600 dark:hover:text-purple-500 transition-colors">Robotics & Automation</Link></li>
          <li><Link to="/wings?id=consultancy" className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors">Consultancy</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-4 text-slate-900 dark:text-white">Company</h3>
        <ul className="space-y-2 text-sm text-slate-600 dark:text-gray-400">
          <li><Link to="/company" className="hover:text-slate-900 dark:hover:text-white transition-colors">About Us</Link></li>
          <li><Link to="/company" className="hover:text-slate-900 dark:hover:text-white transition-colors">Leadership</Link></li>
          <li><Link to="/portfolio" className="hover:text-slate-900 dark:hover:text-white transition-colors">Case Studies</Link></li>
          <li><Link to="/contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">Careers</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-4 text-slate-900 dark:text-white">Connect</h3>
        <p className="text-sm text-slate-600 dark:text-gray-400 mb-4">HQ: 1010 Silicon Blvd, Neo-Tokyo Sector, Japan</p>
        <Link to="/contact" className="flex items-center space-x-2 text-brand-600 dark:text-brand-500 hover:text-brand-500 dark:hover:text-brand-400 font-medium text-sm transition-colors">
          <span>Enter Portal</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-gray-800 text-center text-xs text-slate-500 dark:text-gray-600">
      &copy; {new Date().getFullYear()} Techtonic Industries. All rights reserved.
    </div>
  </footer>
);

export default Footer;