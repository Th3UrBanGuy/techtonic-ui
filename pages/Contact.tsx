import React, { useState } from 'react';
import { Mail, MapPin, Calendar, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'General',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 relative overflow-hidden bg-white dark:bg-dark-bg transition-colors duration-500">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-100 to-transparent dark:from-brand-900/10 dark:to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        {/* Left: Info */}
        <div>
          <h1 className="text-5xl font-bold mb-6 text-slate-900 dark:text-white">Contact Portal</h1>
          <p className="text-xl text-slate-600 dark:text-gray-400 mb-12">
            Ready to shift? Select a department and initialize protocol.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-4 bg-slate-100 dark:bg-gray-900 rounded-lg text-brand-600 dark:text-brand-500">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Global Headquarters</h3>
                <p className="text-slate-600 dark:text-gray-400">1010 Silicon Blvd, Neo-Tokyo Sector, Japan</p>
                <p className="text-slate-400 dark:text-gray-500 text-sm mt-1">Lat: 35.6762, Long: 139.6503</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-4 bg-slate-100 dark:bg-gray-900 rounded-lg text-brand-600 dark:text-brand-500">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Communication Channels</h3>
                <p className="text-slate-600 dark:text-gray-400">portal@techtonic.eco</p>
                <p className="text-slate-600 dark:text-gray-400">+81 (0) 3-5555-0100</p>
              </div>
            </div>

            <div className="p-6 border border-slate-200 dark:border-gray-800 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-black">
               <h3 className="flex items-center gap-2 font-bold mb-4 text-slate-900 dark:text-white">
                 <Calendar size={18} className="text-purple-600 dark:text-purple-500"/> Book a Consultation
               </h3>
               <p className="text-sm text-slate-600 dark:text-gray-400 mb-4">Direct access to our senior architects via encrypted video link.</p>
               <button className="w-full py-3 bg-slate-200 hover:bg-slate-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-slate-900 dark:text-white rounded transition-colors text-sm font-mono uppercase font-bold">
                 Launch Scheduler
               </button>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white/50 dark:bg-gray-900/50 p-8 md:p-10 rounded-2xl border border-slate-200 dark:border-gray-800 backdrop-blur-sm shadow-xl dark:shadow-none">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center mb-4 text-green-600 dark:text-green-500">
                <ArrowRight size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Transmission Received</h3>
              <p className="text-slate-600 dark:text-gray-400">Our team will decrypt your message and respond within 24 hours.</p>
              <button onClick={() => setStatus('idle')} className="mt-8 text-brand-600 dark:text-brand-500 underline">Send another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-mono text-slate-500 dark:text-gray-400 mb-2 uppercase">Identity</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-black border border-slate-200 dark:border-gray-700 rounded-lg p-3 text-slate-900 dark:text-white focus:border-brand-500 focus:outline-none transition-colors"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-slate-500 dark:text-gray-400 mb-2 uppercase">Digital Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-black border border-slate-200 dark:border-gray-700 rounded-lg p-3 text-slate-900 dark:text-white focus:border-brand-500 focus:outline-none transition-colors"
                  placeholder="email@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-slate-500 dark:text-gray-400 mb-2 uppercase">Department Routing</label>
                <select 
                  value={formData.department}
                  onChange={e => setFormData({...formData, department: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-black border border-slate-200 dark:border-gray-700 rounded-lg p-3 text-slate-900 dark:text-white focus:border-brand-500 focus:outline-none transition-colors"
                >
                  <option>General Inquiry</option>
                  <option>Software Development</option>
                  <option>Security Audit</option>
                  <option>Robotics R&D</option>
                  <option>Investor Relations</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-mono text-slate-500 dark:text-gray-400 mb-2 uppercase">Payload</label>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-black border border-slate-200 dark:border-gray-700 rounded-lg p-3 text-slate-900 dark:text-white focus:border-brand-500 focus:outline-none transition-colors"
                  placeholder="Describe your project requirements..."
                />
              </div>

              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-brand-500/30"
              >
                {status === 'sending' ? 'Transmitting...' : 'INITIATE CONTACT'}
                {!status && <ArrowRight size={18} />}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;