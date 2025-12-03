"use client";
import React, { useState } from 'react';
import { Spotlight } from '@/components/ui/spotlight';
import { Send } from 'lucide-react';

export default function ContactPage() {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className='min-h-screen bg-black/95 text-white pt-48 pb-20 px-4 relative overflow-hidden flex items-center justify-center'>
      <Spotlight
        className="-top-40 left-0 md:left-60"
        fill="#4ade80"
      />
      
      <div className='max-w-3xl w-full mx-auto relative z-10'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-5xl md:text-6xl font-bold mb-4'>Send Us a Message</h1>
          <p className='text-lg text-gray-400'>
            Have questions about our courses? Drop us a message and we will respond as soon as possible.
          </p>
        </div>

        {/* Message Box */}
        <div className='bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label htmlFor='message' className='block text-lg font-medium mb-3'>
                Your Message
              </label>
              <textarea
                id='message'
                name='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={8}
                className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all resize-none text-base'
                placeholder='Type your message here...'
              />
            </div>

            <button
              type='submit'
              disabled={isSubmitting || !message.trim()}
              className='w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-4 px-6 rounded-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed'
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <Send className='w-5 h-5' />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
