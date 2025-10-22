import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Contact from './components/Contact';
import WorkExperience from './components/WorkExperience';
import { Section } from './types';

const PageWrapper: React.FC<{ children: React.ReactNode, isSurface?: boolean }> = ({ children, isSurface }) => {
  const bgColor = isSurface ? 'bg-surface' : 'bg-background';
  return (
    <div className={`${bgColor} py-16 md:py-24`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('Home');

  const renderSection = () => {
    switch (activeSection) {
      case 'Home':
        return <Home onNavigate={setActiveSection} />;
      case 'About':
        return <PageWrapper><About /></PageWrapper>;
      case 'Projects':
        return <PageWrapper isSurface><Projects /></PageWrapper>;
      case 'Work Experience':
        return <PageWrapper><WorkExperience /></PageWrapper>;
      case 'Resume':
        return <PageWrapper><Resume /></PageWrapper>;
      case 'Blog':
        return <PageWrapper isSurface><Blog /></PageWrapper>;
      case 'Contact':
        return <PageWrapper><Contact /></PageWrapper>;
      default:
        return <Home onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
