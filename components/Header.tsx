import React, { useState } from 'react';
import { Section } from '../types';
import { HomeIcon, AboutIcon, ProjectsIcon, ResumeIcon, BlogIcon, ContactIcon, WorkExperienceIcon } from './Icons';

interface HeaderProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const sectionIcons: Record<Section, React.ReactNode> = {
  Home: <HomeIcon />,
  About: <AboutIcon />,
  Projects: <ProjectsIcon />,
  'Work Experience': <WorkExperienceIcon />,
  Resume: <ResumeIcon />,
  Blog: <BlogIcon />,
  Contact: <ContactIcon />,
};

const NavButton: React.FC<{
  sectionName: Section;
  activeSection: Section;
  onClick: (section: Section) => void;
  children: React.ReactNode;
}> = ({ sectionName, activeSection, onClick, children }) => (
  <button
    onClick={() => onClick(sectionName)}
    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative bg-transparent border-none cursor-pointer ${
      activeSection === sectionName
        ? 'text-primary'
        : 'text-on-surface-secondary hover:text-on-surface'
    }`}
  >
    {sectionIcons[sectionName]}
    <span>{children}</span>
    {activeSection === sectionName && (
      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></span>
    )}
  </button>
);

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections: Section[] = ['About', 'Projects', 'Work Experience', 'Resume', 'Blog', 'Contact'];

  const handleNavClick = (section: Section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-surface/80 backdrop-blur-sm sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
             <button onClick={() => handleNavClick('Home')} className="text-xl font-bold text-on-surface tracking-wider bg-transparent border-none cursor-pointer">
              SOFIAT AJIDE
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {sections.map((section) => (
                <NavButton
                  key={section}
                  sectionName={section}
                  activeSection={activeSection}
                  onClick={handleNavClick}
                >
                  {section}
                </NavButton>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-on-surface-secondary hover:text-on-surface hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {sections.map((section) => (
               <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === section
                    ? 'bg-primary text-white'
                    : 'text-on-surface-secondary hover:text-on-surface hover:bg-slate-700'
                }`}
              >
                {sectionIcons[section]}
                <span>{section}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
