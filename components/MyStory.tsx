import React from 'react';

const MyStory: React.FC = () => {
  return (
    <section id="my-story" className="bg-surface py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-on-surface mb-3">My <span className="text-primary">Story</span></h2>
          <p className="text-lg text-on-surface-secondary">From Blueprints to Big Data</p>
        </div>
        <div className="space-y-6 text-on-surface-secondary leading-relaxed text-lg text-center">
            <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                My journey into the world of technology and product management began not in a computer lab, but on construction sites. As a Civil Engineer, I learned to appreciate the power of structure, precision, and building things that last. I translated complex blueprints into tangible realities, managing projects from the ground up. This foundation taught me invaluable lessons in project management, stakeholder communication, and the art of turning a vision into a functional product.
            </p>
            <p className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                However, I discovered my true passion lies in the digital realm. I was fascinated by how data could be the blueprint for digital products, revealing insights that could shape user experiences and drive business decisions. This curiosity led me to New York University to pursue a Master's in Management of Technology, where I immersed myself in the intersection of business, data, and innovation.
            </p>
            <p className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                Today, I am a Product Manager and Data Analyst who thrives on solving complex problems. I leverage my analytical background to decode user behavior, define product strategies, and build roadmaps that lead to impactful solutions. I am passionate about creating products that are not only functional and efficient but also intuitive and delightful for the user. My unique journey from engineering to tech has equipped me with a versatile perspective, allowing me to bridge the gap between technical teams and business goals effectively.
            </p>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
