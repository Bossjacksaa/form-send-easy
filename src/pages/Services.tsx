
import React from 'react';
import { ArrowLeft, Mail, Shield, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Form to Email",
      description: "Instantly receive form submissions directly to your email inbox without any server setup."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Spam Protection",
      description: "Built-in spam filtering and reCAPTCHA integration to keep unwanted submissions away."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Setup",
      description: "No registration required. Just point your form action to our endpoint and start receiving submissions."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Delivery",
      description: "Fast, reliable form processing with global infrastructure ensuring 99.9% uptime."
    }
  ];

  return (
    <div className="min-h-screen bg-[#2d3c88] text-white font-mono">
      <div className="bg-white text-black p-4">
        <Link to="/" className="flex items-center gap-2 text-[#2d3c88] hover:underline">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-center mb-12 text-gray-200 text-lg">
            FormSubmit.click provides everything you need to handle form submissions without the complexity of backend development.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white text-black p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-[#2d3c88]">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#d7ebf9] text-[#1d1d1d] p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">What's Included</h2>
            <ul className="space-y-2">
              <li>✓ Unlimited form submissions</li>
              <li>✓ Custom redirect pages</li>
              <li>✓ Email notifications</li>
              <li>✓ File upload support</li>
              <li>✓ AJAX form submissions</li>
              <li>✓ Custom subject lines</li>
              <li>✓ Hidden field support</li>
              <li>✓ No setup or monthly fees</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
