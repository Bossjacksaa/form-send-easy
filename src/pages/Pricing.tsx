
import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-[#2d3c88] text-white font-mono">
      <div className="bg-white text-black p-4">
        <Link to="/" className="flex items-center gap-2 text-[#2d3c88] hover:underline">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Pricing</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">100% FREE</h2>
            <p className="text-gray-200 text-lg">
              FormSubmit.click is completely free to use with no hidden costs or limitations
            </p>
          </div>

          <div className="bg-white text-black p-8 rounded-lg mb-8 border-4 border-green-500">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Free Forever Plan</h3>
              <div className="text-4xl font-bold text-green-600 mb-2">$0</div>
              <p className="text-gray-600">per month, forever</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-4">Core Features</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    Unlimited form submissions
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    Email notifications
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    Spam protection
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    Custom redirect pages
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    File upload support
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Advanced Features</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    AJAX form submissions
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    Custom subject lines
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    Hidden field support
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    Auto-response emails
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    24/7 support
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link 
                to="/demo" 
                className="bg-[#2d3c88] text-white px-8 py-3 rounded hover:bg-[#1f2a5f] transition-colors inline-block font-bold"
              >
                Try It Now - Free!
              </Link>
            </div>
          </div>

          <div className="bg-[#d7ebf9] text-[#1d1d1d] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Why is FormSubmit.click free?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-bold mb-2">No Infrastructure Costs</h4>
                <p>We built an efficient system that processes forms without expensive server maintenance.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Community Driven</h4>
                <p>We believe in making web development accessible to everyone, regardless of budget.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Simple Mission</h4>
                <p>Our goal is to remove barriers for developers and designers who need form processing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
