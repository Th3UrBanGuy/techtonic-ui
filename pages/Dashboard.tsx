import React, { useState } from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Lock, User } from 'lucide-react';

const data = [
  { name: 'Jan', progress: 20 },
  { name: 'Feb', progress: 35 },
  { name: 'Mar', progress: 45 },
  { name: 'Apr', progress: 50 },
  { name: 'May', progress: 75 },
  { name: 'Jun', progress: 85 },
  { name: 'Jul', progress: 92 },
];

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'client123') {
      setIsLoggedIn(true);
    } else {
      alert('Access Denied. Try "client123"');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center px-6 bg-white dark:bg-dark-bg transition-colors duration-500">
        <div className="w-full max-w-md p-8 border border-slate-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-xl text-center shadow-2xl dark:shadow-none">
          <div className="w-16 h-16 bg-slate-100 dark:bg-gray-800 rounded-full mx-auto flex items-center justify-center mb-6">
            <Lock className="text-slate-500 dark:text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Secure Client Access</h2>
          <p className="text-slate-500 dark:text-gray-500 mb-8 text-sm">Enter your designated access key to view project telemetry.</p>
          <form onSubmit={handleLogin} className="space-y-4">
             <input 
               type="password" 
               placeholder="Access Key"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className="w-full p-3 bg-slate-50 dark:bg-black border border-slate-300 dark:border-gray-700 rounded text-center text-slate-900 dark:text-white focus:border-brand-500 focus:outline-none"
             />
             <button className="w-full py-3 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded transition-colors shadow-lg shadow-brand-500/20">
               AUTHENTICATE
             </button>
             <p className="text-xs text-slate-400 dark:text-gray-600 mt-4">Hint: client123</p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-white dark:bg-dark-bg transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
           <div>
             <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Project Telemetry</h1>
             <p className="text-slate-500 dark:text-gray-400">Client: FinGlobal Bank | Project: Nexus Core</p>
           </div>
           <div className="flex items-center gap-2">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
             <span className="text-sm font-mono text-green-600 dark:text-green-500">LIVE CONNECTION</span>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
           <div className="p-6 bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-xl">
             <div className="text-slate-500 dark:text-gray-500 text-sm mb-2">Completion Status</div>
             <div className="text-4xl font-mono font-bold text-slate-900 dark:text-white">92%</div>
           </div>
           <div className="p-6 bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-xl">
             <div className="text-slate-500 dark:text-gray-500 text-sm mb-2">Uptime (Last 30d)</div>
             <div className="text-4xl font-mono font-bold text-green-600 dark:text-green-400">99.99%</div>
           </div>
           <div className="p-6 bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-xl">
             <div className="text-slate-500 dark:text-gray-500 text-sm mb-2">Security Threats</div>
             <div className="text-4xl font-mono font-bold text-brand-600 dark:text-brand-500">0</div>
           </div>
        </div>

        <div className="p-6 bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-xl h-[400px]">
          <h3 className="font-bold mb-4 text-slate-900 dark:text-white">Development Velocity</h3>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" className="dark:stroke-[#333]" />
              <XAxis dataKey="name" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', borderColor: '#e2e8f0', color: '#000' }}
                itemStyle={{ color: '#000' }}
              />
              <Area type="monotone" dataKey="progress" stroke="#14b8a6" fillOpacity={1} fill="url(#colorProgress)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;