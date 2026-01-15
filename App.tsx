import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Wings from './pages/Wings';
import Innovation from './pages/Innovation';
import Portfolio from './pages/Portfolio';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';

function App() {
  // Theme State
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  // Initialize theme based on preference or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem('techtonic-theme');
    if (savedTheme === 'light') {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    } else {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle Handler
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('techtonic-theme', 'light');
    } else {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('techtonic-theme', 'dark');
    }
  };

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-white dark:bg-dark-bg dark:text-gray-100 transition-colors duration-500">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        {/* Added flex-grow to ensure footer pushes down and pt-0 to allow hero sections to touch top if needed, 
            but ensured z-index layering is correct */}
        <main className="flex-grow pt-0 relative z-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wings" element={<Wings />} />
            <Route path="/innovation" element={<Innovation />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;