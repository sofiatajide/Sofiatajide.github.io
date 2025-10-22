// FIX: Removed extraneous file content delimiters and duplicate start-of-file markers.
import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';
import { TwitterIcon, LinkedinIcon, CopyIcon } from './Icons';

const BlogDetailModal: React.FC<{ post: BlogPost; onClose: () => void }> = ({ post, onClose }) => {
  const [copied, setCopied] = useState(false);

  // In a real app with routing, this would be the post's specific URL.
  // For now, we use the current window location as a placeholder.
  const postUrl = window.location.href; 
  const encodedUrl = encodeURIComponent(postUrl);
  const encodedTitle = encodeURIComponent(post.title);

  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(postUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fade-in" onClick={onClose}>
      <div className="bg-surface rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="relative">
          <img className="w-full h-64 object-cover rounded-t-lg" src={post.image} alt={post.title} />
           <button onClick={onClose} className="absolute top-4 right-4 bg-background/50 text-white rounded-full p-2 hover:bg-background/80 transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="p-8">
          <h2 className="text-3xl font-bold text-on-surface mb-2">{post.title}</h2>
          <p className="text-sm text-on-surface-secondary mb-3">{post.date}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map(tag => (
              <span key={tag} className="bg-background py-1 px-3 rounded-full text-xs font-medium text-on-surface-secondary">{tag}</span>
            ))}
          </div>
          <div className="prose prose-invert prose-lg text-on-surface-secondary leading-relaxed whitespace-pre-wrap">
            {post.content}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-700/50 flex items-center gap-4">
            <span className="text-on-surface-secondary font-semibold">Share this post:</span>
            <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter" className="text-on-surface-secondary hover:text-primary transition-colors">
                <TwitterIcon />
            </a>
            <a href={linkedinShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" className="text-on-surface-secondary hover:text-primary transition-colors">
                <LinkedinIcon />
            </a>
            <button onClick={handleCopyLink} aria-label="Copy link" className="relative text-on-surface-secondary hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
                <CopyIcon />
                {copied && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs rounded py-1 px-2 animate-fade-in">
                        Copied!
                    </span>
                )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


const BlogPostCard: React.FC<{ post: BlogPost; onSelect: (post: BlogPost) => void }> = ({ post, onSelect }) => (
  <div onClick={() => onSelect(post)} className="bg-surface rounded-lg shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1 group animate-fade-in-up cursor-pointer overflow-hidden">
    <img className="w-full h-48 object-cover" src={post.image} alt={post.title} />
    <div className="p-6">
      <p className="text-sm text-on-surface-secondary mb-2">{post.date}</p>
      <h3 className="font-bold text-xl mb-3 text-on-surface group-hover:text-primary transition-colors duration-300">{post.title}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map(tag => (
              <span key={tag} className="bg-background py-1 px-3 rounded-full text-xs font-medium text-on-surface-secondary">{tag}</span>
          ))}
      </div>
      <p className="text-on-surface-secondary mb-4">{post.excerpt}</p>
      <span className="font-medium text-primary">Read More &rarr;</span>
    </div>
  </div>
);

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section>
      <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-on-surface mb-3">My Thoughts & Insights</h2>
        <p className="text-lg text-on-surface-secondary">Sharing my thoughts on technology, development, and data.</p>
      </div>

      <div className="space-y-8 max-w-3xl mx-auto">
        {BLOG_POSTS.map((post, index) => (
          <div key={post.id} style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
            <BlogPostCard post={post} onSelect={setSelectedPost} />
          </div>
        ))}
      </div>

      {selectedPost && (
        <BlogDetailModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </section>
  );
};

export default Blog;