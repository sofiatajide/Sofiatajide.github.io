
import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';

const SocialLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-on-surface-secondary hover:text-primary transition-colors">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 sm:mb-0">
            <SocialLink href="https://github.com/sofiatajide"><GithubIcon /></SocialLink>
            <SocialLink href="https://www.linkedin.com/in/sofiat-ajide/"><LinkedinIcon /></SocialLink>
            <SocialLink href="mailto:ajidesofiat@gmail.com"><MailIcon /></SocialLink>
          </div>
          <p className="text-sm text-on-surface-secondary">
            &copy; {new Date().getFullYear()} Sofiat Ajide. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;