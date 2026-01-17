import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';

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
import Loader from './components/Loader';

const ContentWrapper = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

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

  // Show loader on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
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

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-white dark:bg-dark-bg dark:text-gray-100 transition-colors duration-500">
      {!isDashboard && <Navbar theme={theme} toggleTheme={toggleTheme} />}
      {/* Added flex-grow to ensure footer pushes down and pt-0 to allow hero sections to touch top if needed, 
          but ensured z-index layering is correct */}
      <main className={`flex-grow pt-0 relative z-0 ${isDashboard ? 'h-screen' : ''}`}>
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
      {!isDashboard && <Footer />}
    </div>
  );
};

function App() {
  return (
    <HashRouter>
      <ContentWrapper />
    </HashRouter>
  );
}

export default App;