import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Components Imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

// Pages Imports
import Hero from './components/Hero'; 
import Ventures from './components/Ventures';
import Contact from './components/Contact';
import KCPLGallery from './components/KCPLGallery';
import AcademyTrust from './components/AcademyTrust';
import About from './components/About';
import ScrollToTopView from './components/ScrollToTopView';
import Careers from './components/Careers';

// --- NEW IMPORTS FOR ADMIN PORTAL ---
import Login from './components/Login'; 
import AdminDashboard from './components/AdminDashboard'; 

// Protected Route Helper: Isse unauthorized log dashboard nahi dekh payenge
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* Scroll position reset on route change */}
        <ScrollToTopView />
        
        <div className="flex flex-col min-h-screen bg-[#001233]">
          {/* Navbar: Visible on all public pages */}
          <Navbar />
          
          {/* Main Content Area */}
          <main className="flex-grow">
            <Routes>
              {/* Home Page */}
              <Route path="/" element={<Hero />} />
              
              {/* Corporate Pages */}
              <Route path="/about" element={<About />} />
              <Route path="/ventures" element={<Ventures />} />
              <Route path="/academy" element={<AcademyTrust />} />
              <Route path="/gallery" element={<KCPLGallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />

              {/* --- ADMIN & AUTH ROUTES --- */}
              <Route path="/login" element={<Login />} />
              
              <Route 
                path="/admin-dashboard" 
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />

              {/* Fallback route */}
              <Route path="*" element={<Hero />} />
            </Routes>
          </main>

          {/* AI Chatbot: Floating component */}
          <Chatbot />
          
          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;