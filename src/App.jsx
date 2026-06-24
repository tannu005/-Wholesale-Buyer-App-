import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/buyer/LandingPage';
import Login from './pages/Login';
import { useAuth } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';

function App() {
  const [splashDone, setSplashDone] = useState(false);

  useEffect(() => {
    const splash = document.getElementById('splash-screen');
    if (!splash) { setSplashDone(true); return; }

    const minDelay = setTimeout(() => {
      splash.classList.add('hide');
      const cleanup = setTimeout(() => {
        splash.remove();
        setSplashDone(true);
      }, 650);
      return () => clearTimeout(cleanup);
    }, 2000);

    return () => clearTimeout(minDelay);
  }, []);

  return (
    <ToastProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ToastProvider>
  );
}

export default App;
