import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Cloud, Image, Database, Info, Menu, X } from 'lucide-react';
import { useState, useEffect, createContext, useContext } from 'react';
import { cn } from '@/lib/utils';

// Create a context for language
export type Language = 'english' | 'hindi' | 'marathi';
export const LanguageContext = createContext<{
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}>({
  language: 'english',
  setLanguage: () => {},
});

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('english');
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: { english: 'Home', hindi: 'होम', marathi: 'मुख्यपृष्ठ' }, icon: <Leaf className="h-5 w-5" /> },
    { path: '/diagnosis', label: { english: 'Diagnosis', hindi: 'निदान', marathi: 'निदान' }, icon: <Image className="h-5 w-5" /> },
    { path: '/weather', label: { english: 'Weather', hindi: 'मौसम', marathi: 'हवामान' }, icon: <Cloud className="h-5 w-5" /> },
    { path: '/soil-tips', label: { english: 'Soil Tips', hindi: 'मिट्टी टिप्स', marathi: 'माती टिप्स' }, icon: <Database className="h-5 w-5" /> },
    { path: '/about', label: { english: 'About', hindi: 'परिचय', marathi: 'आमच्याबद्दल' }, icon: <Info className="h-5 w-5" /> },
  ];

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm py-3 sticky top-0 z-50">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-crop-green" />
              <span className="font-bold text-xl text-crop-green">CropSavior</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map(item => (
                <Link 
                  key={item.path} 
                  to={item.path}
                  className={cn(
                    "flex items-center gap-1.5 text-sm font-medium transition-colors",
                    location.pathname === item.path 
                      ? "text-crop-green" 
                      : "text-gray-600 hover:text-crop-green"
                  )}
                >
                  {item.icon}
                  <span>{item.label[language]}</span>
                </Link>
              ))}
            </nav>
            
            {/* Language Selector */}
            <div className="hidden md:flex items-center gap-2">
              <button 
                onClick={() => setLanguage('english')}
                className={cn(
                  "px-2 py-1 text-xs rounded-md",
                  language === 'english' 
                    ? "bg-crop-green text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                English
              </button>
              <button 
                onClick={() => setLanguage('hindi')}
                className={cn(
                  "px-2 py-1 text-xs rounded-md",
                  language === 'hindi' 
                    ? "bg-crop-green text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                हिंदी
              </button>
              <button 
                onClick={() => setLanguage('marathi')}
                className={cn(
                  "px-2 py-1 text-xs rounded-md",
                  language === 'marathi' 
                    ? "bg-crop-green text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                मराठी
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              {isOpen ? (
                <X className="h-6 w-6 text-crop-green" />
              ) : (
                <Menu className="h-6 w-6 text-crop-green" />
              )}
            </button>
          </div>
        </header>
        
        {/* Mobile Navigation Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
            <div className="bg-white h-full w-64 p-4 shadow-lg">
              <div className="flex flex-col gap-4">
                {navItems.map(item => (
                  <Link 
                    key={item.path} 
                    to={item.path}
                    className={cn(
                      "flex items-center gap-2 py-2 px-3 rounded-lg",
                      location.pathname === item.path 
                        ? "bg-crop-green text-white" 
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    {item.icon}
                    <span>{item.label[language]}</span>
                  </Link>
                ))}
                
                {/* Mobile Language Selector */}
                <div className="mt-4 flex flex-col gap-2">
                  <div className="text-sm font-medium text-gray-500">Language</div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setLanguage('english')}
                      className={cn(
                        "flex-1 px-2 py-1.5 text-sm rounded-md",
                        language === 'english' 
                          ? "bg-crop-green text-white" 
                          : "bg-gray-100 text-gray-700"
                      )}
                    >
                      English
                    </button>
                    <button 
                      onClick={() => setLanguage('hindi')}
                      className={cn(
                        "flex-1 px-2 py-1.5 text-sm rounded-md",
                        language === 'hindi' 
                          ? "bg-crop-green text-white" 
                          : "bg-gray-100 text-gray-700"
                      )}
                    >
                      हिंदी
                    </button>
                    <button 
                      onClick={() => setLanguage('marathi')}
                      className={cn(
                        "flex-1 px-2 py-1.5 text-sm rounded-md",
                        language === 'marathi' 
                          ? "bg-crop-green text-white" 
                          : "bg-gray-100 text-gray-700"
                      )}
                    >
                      मराठी
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="bg-crop-green-dark text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Leaf className="h-6 w-6" />
                  <span className="font-bold text-xl">CropSavior</span>
                </div>
                <p className="text-gray-200 text-sm">
                  {language === 'english' && "Helping Indian farmers protect their crops through technology"}
                  {language === 'hindi' && "प्रौद्योगिकी के माध्यम से भारतीय किसानों की फसलों की रक्षा में मदद करना"}
                  {language === 'marathi' && "तंत्रज्ञानाच्या माध्यमातून भारतीय शेतकऱ्यांच्या पिकांचे संरक्षण करण्यात मदत करणे"}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">
                  {language === 'english' && "Quick Links"}
                  {language === 'hindi' && "त्वरित लिंक्स"}
                  {language === 'marathi' && "द्रुत दुवे"}
                </h3>
                <ul className="space-y-2">
                  {navItems.map(item => (
                    <li key={item.path}>
                      <Link to={item.path} className="text-gray-200 hover:text-white transition-colors">
                        {item.label[language]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">
                  {language === 'english' && "Contact Us"}
                  {language === 'hindi' && "संपर्क करें"}
                  {language === 'marathi' && "संपर्क करा"}
                </h3>
                <p className="text-gray-200 text-sm mb-2">
                  <span className="inline-block w-14">Email:</span>
                  contact@cropsavior.in
                </p>
                <p className="text-gray-200 text-sm">
                  <span className="inline-block w-14">Call:</span>
                  121
                </p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-300">
              &copy; 2025 CropSavior. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </LanguageContext.Provider>
  );
};

export default Layout;
