import React from 'react';

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const Resume: React.FC = () => {
  return (
    <section className="animate-fade-in-up">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-on-surface mb-3">My Resume</h2>
         <a
            href="/Sofiat_Ajide_Resume.pdf"
            download="Sofiat_Ajide_Resume.pdf"
            className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-focus transition-all duration-300 transform hover:scale-105"
        >
            <DownloadIcon />
            <span>Download Full Resume</span>
        </a>
      </div>
      
      <div className="max-w-4xl mx-auto bg-surface p-4 sm:p-6 rounded-lg shadow-lg border border-slate-700/50">
        <div className="aspect-[8.5/11] w-full bg-slate-900 rounded">
            <iframe
                src="/Sofiat_Ajide_Resume.pdf"
                title="Sofiat Ajide's Resume Preview"
                className="w-full h-full border-none rounded"
            >
                <p className="p-4 text-on-surface-secondary">
                    Your browser does not support embedded PDFs. Please 
                    <a href="/Sofiat_Ajide_Resume.pdf" className="text-primary hover:underline ml-1">download the PDF</a> 
                    to view it.
                </p>
            </iframe>
        </div>
      </div>
    </section>
  );
};

export default Resume;