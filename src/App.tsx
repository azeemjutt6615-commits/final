import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { FAQPage } from './pages/FAQPage';
import { Heart, Snowflake } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'how-it-works':
        return <HowItWorksPage />;
      case 'faq':
        return <FAQPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main>
        {renderPage()}
      </main>

      {/* Global Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white mt-16">
        <div className="container mx-auto px-4 text-center">
          {/* Main Footer Content */}
          <div className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
              {/* Brand Section */}
              <div className="md:col-span-1">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <Snowflake className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold">Snow Day Calculator</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Advanced meteorological analysis for accurate snow day predictions. 
                  Helping communities prepare for winter weather since 2025.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <button 
                      onClick={() => setCurrentPage('home')}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Snow Day Calculator
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setCurrentPage('how-it-works')}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      How It Works
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setCurrentPage('faq')}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      FAQ
                    </button>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="font-semibold text-white mb-4">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <button 
                      onClick={() => setCurrentPage('about')}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      About Us
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setCurrentPage('contact')}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Contact Us
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setCurrentPage('privacy')}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </button>
                  </li>
                </ul>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-semibold text-white mb-4">Features</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✓ 85%+ Accuracy Rate</li>
                  <li>✓ 7-Factor Analysis</li>
                  <li>✓ Regional Weather Data</li>
                  <li>✓ Real-time Calculations</li>
                  <li>✓ Mobile Responsive</li>
                  <li>✓ Completely Free</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4 text-sm text-gray-300">
                <span>© 2025 Snow Day Calculator</span>
                <span>•</span>
                <span>Made with <Heart className="w-4 h-4 text-red-400 inline mx-1" /> for snow day enthusiasts</span>
              </div>
              
              <div className="text-xs text-gray-400 max-w-md text-center md:text-right">
                <strong>Disclaimer:</strong> This calculator uses advanced meteorological modeling but should be used alongside official weather services and school district announcements.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;