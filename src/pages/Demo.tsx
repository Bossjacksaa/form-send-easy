import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Demo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#2d3c88] text-white font-mono">
      <div className="bg-white text-black p-4">
        <Link to="/" className="flex items-center gap-2 text-[#2d3c88] hover:underline">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Live Demo</h1>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-center mb-8 text-gray-200">
            Try our form submission service right here! Fill out the form below and see how easy it is to collect form submissions.
          </p>

          <div className="bg-white text-black p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Contact Form Demo</h2>
            
            <form action="https://formsubmit.click/your@email.com" method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#2d3c88]"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#2d3c88]"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  name="message" 
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required 
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#2d3c88]"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-[#2d3c88] text-white py-2 rounded hover:bg-[#1f2a5f] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="mt-8 bg-gray-100 text-black p-4 rounded">
            <h3 className="font-bold mb-2">How it works:</h3>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>Fill out the form above</li>
              <li>Click "Send Message"</li>
              <li>Your submission is instantly sent to the specified email</li>
              <li>No backend code required!</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
