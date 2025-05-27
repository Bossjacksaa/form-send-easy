
import React from 'react';
import { ArrowLeft, Mail, MessageSquare, Book, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Support = () => {
  return (
    <div className="min-h-screen bg-[#2d3c88] text-white font-mono">
      <div className="bg-white text-black p-4">
        <Link to="/" className="flex items-center gap-2 text-[#2d3c88] hover:underline">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Support Center</h1>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-center mb-12 text-gray-200 text-lg">
            Need help? We're here to assist you with any questions about FormSubmit.click
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white text-black p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-8 h-8 text-[#2d3c88]" />
                <h3 className="text-xl font-bold">Email Support</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Get direct help from our support team via email.
              </p>
              <a 
                href="mailto:support@formsubmit.click" 
                className="bg-[#2d3c88] text-white px-4 py-2 rounded hover:bg-[#1f2a5f] transition-colors inline-block"
              >
                Contact Support
              </a>
            </div>

            <div className="bg-white text-black p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="w-8 h-8 text-[#2d3c88]" />
                <h3 className="text-xl font-bold">Response Time</h3>
              </div>
              <p className="text-gray-700">
                We typically respond to support requests within 24 hours during business days.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 text-black p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold mb-2">How do I set up my form?</h4>
                <p className="text-gray-700">Simply point your form's action attribute to https://www.formsubmit.click/send/your@email.com and replace "your@email.com" with your actual email address.</p>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">Is FormSubmit really free?</h4>
                <p className="text-gray-700">Yes! FormSubmit.click is completely free to use with no hidden fees, registration requirements, or usage limits.</p>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">What happens to my form data?</h4>
                <p className="text-gray-700">Your form submissions are sent directly to your email and are not stored on our servers for privacy and security.</p>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">Can I customize the email format?</h4>
                <p className="text-gray-700">Yes! You can customize subject lines, add hidden fields, and control the email format using our advanced features.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#d7ebf9] text-[#1d1d1d] p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-4">Still need help?</h3>
            <p className="mb-4">Check out our comprehensive documentation for detailed guides and examples.</p>
            <Link 
              to="/docs" 
              className="bg-[#2d3c88] text-white px-6 py-3 rounded hover:bg-[#1f2a5f] transition-colors inline-block"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
