import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Components Imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages Imports
import Hero from './components/Hero'; 
import Founder from './components/Founder';
import Ventures from './components/Ventures';
import Contact from './components/Contact';
import KCPLGallery from './components/KCPLGallery';
import AcademyTrust from './components/AcademyTrust';
import About from './components/About';
import ScrollToTopView from './components/ScrollToTopView';
function App() {
  return (
    <AuthProvider>
      <Router>
        {/* ScrollToTop ko hamesha Router ke andar par baki components se upar rakhein */}
        <ScrollToTopView />
        
        <div className="flex flex-col min-h-screen bg-[#0A192F]">
          {/* Navbar har page par dikhega */}
          <Navbar />
          
          {/* Main content area */}
          <main className="flex-grow">
            <Routes>
              {/* Home Page: Hero section hi aapka main landing hai */}
              <Route path="/" element={<Hero />} />
              
              {/* Other Pages */}
              <Route path="/about" element={<About />} />
              <Route path="/founder" element={<Founder />} />
              <Route path="/ventures" element={<Ventures />} />
              <Route path="/academy" element={<AcademyTrust />} />
              <Route path="/gallery" element={<KCPLGallery />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Fallback route: Agar koi galat URL daale toh Home par bhej de */}
              <Route path="*" element={<Hero />} />
            </Routes>
          </main>
          
          {/* Footer har page ke niche rahega */}
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;