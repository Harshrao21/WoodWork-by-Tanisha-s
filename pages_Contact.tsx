import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

  return (
    <div className="bg-stone-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-stone-900 mb-4">Get in Touch</h1>
            <p className="text-stone-600">Have a custom request or a question about an order? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Contact Info */}
            <div className="bg-wood-800 p-10 text-white flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-serif font-bold mb-6">Contact Information</h3>
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <svg className="h-6 w-6 text-wood-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <span>123 Artisan Way,<br/>Portland, OR 97205</span>
                        </div>
                        <div className="flex items-center space-x-4">
                             <svg className="h-6 w-6 text-wood-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <svg className="h-6 w-6 text-wood-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            <span>hello@woodcraft.com</span>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <p className="text-wood-200 text-sm">Customer Support Hours:<br/>Mon-Fri, 9am - 6pm PST</p>
                </div>
            </div>

            {/* Form */}
            <div className="p-10">
                {submitted ? (
                    <div className="h-full flex flex-col items-center justify-center text-center">
                        <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                             <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
                        <p className="text-gray-600 mt-2">Thank you for contacting us. We will get back to you shortly.</p>
                        <button onClick={() => setSubmitted(false)} className="mt-6 text-wood-600 font-medium hover:text-wood-800">Send another message</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                            <input type="text" required className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-wood-500 focus:border-wood-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input type="email" required className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-wood-500 focus:border-wood-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea rows={4} required className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-wood-500 focus:border-wood-500"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-wood-600 text-white font-bold py-3 px-4 rounded-md hover:bg-wood-700 transition-colors shadow-sm">
                            Send Message
                        </button>
                    </form>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
