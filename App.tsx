import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SystemStatusWrapper from './components/SystemStatusWrapper';
import TopContactBar from './components/ui/TopContactBar';

// Pages
import Home from './pages/Home';
import Wings from './pages/Wings';
import Innovation from './pages/Innovation';
import Portfolio from './pages/Portfolio';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Loader from './components/Loader'; // Kept if needed, but SystemStatusWrapper handles main load

// Context
import { ThemeProvider, useTheme } from './components/ThemeContext';

const ContentWrapper = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  return (
    <SystemStatusWrapper>
      <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-white dark:bg-dark-bg dark:text-gray-100 transition-colors duration-500">
        {!isDashboard && <TopContactBar />}
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
    </SystemStatusWrapper>
  );
};

import { ContentProvider } from './components/ContentContext';

function App() {
  return (
    <HashRouter>
      <ThemeProvider>
        <ContentProvider>
          <ContentWrapper />
        </ContentProvider>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;