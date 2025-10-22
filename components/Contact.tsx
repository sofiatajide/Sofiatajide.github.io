import React, { useState } from 'react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus('error');
      // Reset error after some time
      setTimeout(() => {
        if(status === 'error') setStatus('idle');
      }, 3000);
      return;
    }
    
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
      // Reset success message after some time
      setTimeout(() => {
        if(status === 'success') setStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <section className="animate-fade-in-up">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-on-surface mb-3">Get In Touch</h2>
        <p className="text-lg text-on-surface-secondary">Have a question or want to work together? Drop me a line!</p>
      </div>

      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-on-surface-secondary mb-1">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full px-4 py-3 bg-surface border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-on-surface-secondary mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-3 bg-surface border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-on-surface-secondary mb-1">Message</label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="block w-full px-4 py-3 bg-surface border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-primary hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-slate-500 disabled:cursor-not-allowed transition-colors"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
        <div className="mt-4 text-center h-6">
            {status === 'success' && (
              <p className="text-green-400 animate-fade-in">Message sent successfully! Thank you.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 animate-fade-in">Please fill out all fields.</p>
            )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
