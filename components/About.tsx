import React from 'react';
import {
  PowerBIIcon, TableauIcon, SqlServerIcon, GoogleSheetsIcon, JiraIcon,
  ConfluenceIcon, SlackIcon, NotionIcon, PostmanIcon, SalesforceIcon,
  MiroIcon, GoogleAnalyticsIcon, MSOfficeIcon, StakeholderCommsIcon, PythonIcon, RIcon
} from './Icons';

const skills = [
  { name: 'Power BI', icon: <PowerBIIcon /> },
  { name: 'Tableau', icon: <TableauIcon /> },
  { name: 'SQL Server', icon: <SqlServerIcon /> },
  { name: 'Python', icon: <PythonIcon /> },
  { name: 'R', icon: <RIcon /> },
  { name: 'Google Sheets', icon: <GoogleSheetsIcon /> },
  { name: 'Jira', icon: <JiraIcon /> },
  { name: 'Confluence', icon: <ConfluenceIcon /> },
  { name: 'Slack', icon: <SlackIcon /> },
  { name: 'Notion', icon: <NotionIcon /> },
  { name: 'Postman', icon: <PostmanIcon /> },
  { name: 'Salesforce', icon: <SalesforceIcon /> },
  { name: 'Miro', icon: <MiroIcon /> },
  { name: 'Google Analytics', icon: <GoogleAnalyticsIcon /> },
  { name: 'MS Office', icon: <MSOfficeIcon /> },
  { name: 'Stakeholder Comms', icon: <StakeholderCommsIcon /> },
];

const certifications = [
  { name: 'IBM Product Manager', url: 'https://coursera.org/share/58ec03acd5fbd21d7c0a5fbad14c987c' },
  { name: 'IBM AI Product Manager', url: 'https://coursera.org/share/bcdad44312d9e111428e3e7ca70df4ee' },
  { name: 'Google Business Analytics', url: 'https://coursera.org/share/20a95edc0d1d42858eab469f3b6a59e0' },
  { name: 'Machine Learning Specialization', url: 'https://coursera.org/share/1c6c58447b3f9d85cbeed992a71e8554' },
  { name: 'IBM Data Science', url: 'https://coursera.org/share/3f5429694eee99aaa13f89048557a523' },
  { name: 'Johns Hopkins Data Science', url: 'https://coursera.org/share/01fc7a3806488b3f82b47c12f73c0f32' },
  { name: 'IBM Data Analyst', url: 'https://coursera.org/share/f4124ad68fb5f6ebd8b24c27f0caf624' },
  { name: 'Google Project Management', url: '/certificates/google-project-management.pdf' },
  { name: 'McKinsey Forward Program', url: '/certificates/mckinsey-forward-program.pdf' },
  { name: 'BCG Strategy Consulting', url: '/certificates/bcg-strategy-consulting.pdf' },
  { name: 'Data Science Bootcamp' },
  { name: 'Accenture Program' },
  { name: 'PMP (in progress)' },
];


const About: React.FC = () => {
  return (
    <section className="animate-fade-in-up">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
          <img
            src="https://picsum.photos/seed/profile/400/400"
            alt="Sofiat Ajide"
            className="rounded-full object-cover w-full h-full border-4 border-surface shadow-lg"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface mb-4">Hello, I'm Sofiat Ajide</h2>
          <p className="text-xl text-primary font-medium mb-6">Product Manager & Data Analyst</p>
          <p className="text-on-surface-secondary leading-relaxed max-w-2xl">
            I build elegant and efficient solutions that bridge the gap between complex data and strategic product decisions. With a passion for data-driven strategy and a background in technology management, I specialize in developing product roadmaps, optimizing data pipelines, and leveraging analytics to drive business growth.
          </p>
        </div>
      </div>
      <div className="mt-20">
        <h3 className="text-3xl font-bold text-center text-on-surface mb-12">My <span className="text-primary">Toolbox</span></h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
          {skills.map(skill => (
            <div key={skill.name} className="bg-surface p-6 rounded-lg border border-slate-700/50 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
              <div className="w-12 h-12 text-on-surface">{skill.icon}</div>
              <p className="font-semibold text-on-surface-secondary text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
       <div className="mt-20">
        <h3 className="text-3xl font-bold text-center text-on-surface mb-12">Certifications & <span className="text-primary">Programs</span></h3>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-4">
          {certifications.map(cert => (
            cert.url ? (
              <a 
                key={cert.name} 
                href={cert.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-surface py-2 px-5 rounded-full text-on-surface-secondary border border-slate-700/50 text-sm font-medium transition-all duration-300 hover:border-primary hover:text-on-surface hover:-translate-y-px cursor-pointer"
              >
                {cert.name}
              </a>
            ) : (
              <span 
                key={cert.name} 
                className="bg-surface py-2 px-5 rounded-full text-on-surface-secondary border border-slate-700/50 text-sm font-medium cursor-default"
              >
                {cert.name}
              </span>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;