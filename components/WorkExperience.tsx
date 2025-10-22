import React, { useState } from 'react';

const experienceData = [
    {
        title: "Product, Sales & Marketing Analyst",
        company: "LOCOMeX (Supply Chain Sustainability Platform; New York, USA)",
        duration: "Jun 2025 – Present",
        points: [
            "Developed and optimized data-driven pricing and market models to support product positioning and cost efficiency.",
            "Collaborated with data science and engineering teams to design an Agentic AI architecture and data pipeline.",
            "Contributed to GTM implementation by coordinating cross-functional efforts and supporting a new product website launch.",
            "Utilized Salesforce CRM to configure campaign workflows, segment audiences, and establish performance tracking."
        ]
    },
    {
        title: "Product Manager",
        company: "Hack for LA (Civic tech organization; LA, USA)",
        duration: "Sep 2024 – Oct 2025",
        points: [
            "Developed and executed product roadmaps, reducing feature delivery time by 25% and ensuring on-time delivery.",
            "Conducted competitive benchmarking and data analysis to inform roadmap prioritization and resource allocation.",
            "Prepared data using Power BI to support dashboard development.",
            "Leveraged GitHub and Slack for effective collaboration, improving team communication, and project tracking."
        ]
    },
    {
        title: "Product Manager",
        company: "Yuvoice (Social media platform; USA)",
        duration: "Sep 2024 – Apr 2025",
        points: [
            "Designed and implemented data pipelines and reporting dashboards for user engagement metrics and feature adoption.",
            "Authored Product Requirement Documents (PRDs) and defined KPIs to measure feature success.",
            "Coordinated cross-functional sprints using Jira and Slack, improving development efficiency by 20%."
        ]
    },
    {
        title: "Product Management Intern",
        company: "LOCOMeX (Supply Chain Sustainability Platform; Delaware, USA)",
        duration: "Jun 2023 – Aug 2023",
        points: [
            "Led sprint planning, backlog refinement, and agile ceremonies, improving team velocity by 5%.",
            "Developed roadmaps and timelines for 4+ B2B projects, ensuring stakeholder alignment.",
            "Supported data acquisition and preprocessing for AI-driven ESG performance models."
        ]
    },
    {
        title: "Graduate Assistant",
        company: "New York University (Education; New York, USA)",
        duration: "Oct 2022 – May 2024",
        points: [
           "Reviewed and audited 1,000+ applications monthly, managed confidential data, and enhanced accuracy and efficiency.",
           "Engaged with 75 prospective students on the Unibuddy platform, answering inquiries and sharing insights.",
        ]
    },
    {
        title: "Lecturer",
        company: "Federal Polytechnic Offa (Education; Kwara, Nigeria)",
        duration: "Jul 2019 – Mar 2025",
        points: [
           "Led applied research on sustainable materials and low-carbon engineering, producing peer-reviewed publications.",
           "Taught and supervised 100+ students per semester in engineering analytics and project management.",
        ]
    }
];

const WorkExperience: React.FC = () => {
    const [enlargedIndex, setEnlargedIndex] = useState<number | null>(null);

    const handleCardClick = (index: number) => {
        setEnlargedIndex(index);
    };

    const handleClose = () => {
        setEnlargedIndex(null);
    };

    return (
        <section className="animate-fade-in-up">
             {enlargedIndex !== null && (
                <div
                    className="fixed inset-0 bg-background bg-opacity-70 backdrop-blur-sm z-20 cursor-pointer animate-fade-in"
                    onClick={handleClose}
                />
            )}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-on-surface mb-3">Work Experience</h2>
                <p className="text-lg text-on-surface-secondary">My professional journey and key accomplishments.</p>
            </div>

            <div className="container mx-auto px-4 py-8 max-w-5xl">
                <div className="relative">
                    <div className="absolute h-full w-1 bg-primary/20 top-0 left-3 md:left-1/2 md:-translate-x-1/2 z-0"></div>
                    
                    <div className="space-y-12">
                        {experienceData.map((item, index) => {
                            const isRightSide = index % 2 === 0;
                            const enlargedClasses = `
                                scale-110 
                                scale-x-175
                                md:scale-y-115
                                ${isRightSide ? 'md:-translate-x-2/5' : 'md:translate-x-2/5'}
                            `;

                            return (
                                <div key={index} className={`relative ${enlargedIndex === index ? 'z-30' : ''}`}>
                                    <div className="absolute w-5 h-5 bg-primary rounded-full mt-4 left-3 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 border-4 border-surface z-10"></div>
                                    
                                    <div className={`ml-10 md:ml-0`}>
                                        <div className={`md:w-1/2 ${isRightSide ? 'md:ml-auto md:pl-16' : 'md:mr-auto md:pr-16'}`}>
                                            <div 
                                                onClick={() => handleCardClick(index)}
                                                className={`
                                                    bg-surface p-6 rounded-lg shadow-lg border border-slate-700/50
                                                    transform transition-all duration-300 ease-in-out
                                                    ${enlargedIndex === index
                                                        ? enlargedClasses
                                                        : 'cursor-pointer hover:scale-105'
                                                    }
                                                    ${enlargedIndex !== null && enlargedIndex !== index
                                                        ? 'opacity-30 blur-sm pointer-events-none'
                                                        : ''
                                                    }
                                                `}
                                            >
                                                <p className="text-on-surface-secondary text-sm font-medium mb-1">{item.duration}</p>
                                                <h3 className="text-xl font-semibold text-on-surface mb-1">{item.title}</h3>
                                                <p className="text-on-surface-secondary mb-3 font-medium">{item.company}</p>
                                                <ul className="list-disc list-inside space-y-1 text-on-surface-secondary text-sm text-left">
                                                    {item.points.map((point, i) => <li key={i}>{point}</li>)}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
