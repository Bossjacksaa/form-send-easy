
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const copyCode = () => {
    const codeText = `<form action="https://formsubmit.click/your@email.com" method="POST">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <button type="submit">Send</button>
</form>`;
    
    navigator.clipboard.writeText(codeText).then(() => {
      alert("Form code copied!");
    });
  };

  return (
    <div className="min-h-screen bg-[#2d3c88] text-white font-mono">
      {/* Header */}
      <div className="bg-white text-black">
        <div className="flex justify-between items-center p-4">
          <img src="https://i.postimg.cc/2Sn5x2wp/Picsart-25-05-27-21-51-00-453.png" alt="Logo" className="h-8" />
          <button 
            onClick={toggleMenu}
            className="text-xl bg-none border-none cursor-pointer"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Expandable Menu */}
        {isMenuOpen && (
          <div className="bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-3 px-4">
              <Link to="/demo" className="text-black hover:text-[#2d3c88] transition-colors">Demo</Link>
              <Link to="/services" className="text-black hover:text-[#2d3c88] transition-colors">Services</Link>
              <Link to="/support" className="text-black hover:text-[#2d3c88] transition-colors">Support</Link>
              <Link to="/pricing" className="text-black hover:text-[#2d3c88] transition-colors">Pricing</Link>
              <Link to="/docs" className="text-black hover:text-[#2d3c88] transition-colors">Documentation</Link>
            </nav>
          </div>
        )}
      </div>

      {/* Intro Section */}
      <div className="text-center py-8 px-4">
        <h1 className="text-2xl mb-4">Easy form endpoints for your HTML forms.</h1>
        <p className="text-sm leading-relaxed text-gray-200">
          Connect your form to our form endpoint and we'll email you the submissions. No PHP, Javascript or any backend code required.
        </p>
      </div>

      {/* Code Example Container */}
      <div className="bg-white text-black p-4 w-[90%] max-w-sm mx-auto rounded-lg">
        <h2 className="text-sm font-bold mb-4">EXAMPLE FORM / CONTACT FORM</h2>
        <pre className="bg-gray-100 p-3 text-left whitespace-pre-wrap break-words text-sm overflow-x-auto">
{`<form action="`}<span className="bg-pink-200">{`https://formsubmit.click/your@email.com`}</span>{`" method="POST">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <button type="submit">Send</button>
</form>`}
        </pre>
        <button 
          onClick={copyCode}
          className="mt-3 px-3 py-1 text-xs cursor-pointer bg-[#2d3c88] text-white border-none rounded"
        >
          Copy
        </button>
        <div className="clear-both mt-10 text-sm text-center">
          Form backend platform for designers and developers.
        </div>
      </div>

      {/* Banner */}
      <div className="mt-8 bg-[#d7ebf9] p-4 text-[#1d1d1d] font-bold text-sm text-center">
        ↩ Deliver Your Software Projects With a Trusted Partner
      </div>

      {/* Setup Instructions */}
      <div className="bg-gray-50 text-[#1d1d1d] p-5 font-sans">
        <h2 className="text-center text-xl font-extrabold mb-3">
          Setup is easy and free.
        </h2>
        <p className="text-center text-sm mb-3">
          Design a form for your site, and be sure to name all the fields. Then, just point the action to us and confirm your email address!
        </p>
        <div className="text-center mb-5">
          <span className="inline-block bg-[#1d1d1d] text-white py-1 px-3 text-xs font-bold">
            NO REGISTRATION REQUIRED
          </span>
        </div>

        <div className="mb-5">
          <h3 className="text-base font-bold mb-2">1. CONNECT YOUR FORM</h3>
          <p className="text-sm mb-2">
            Pointing the action-attribute of your form to our URL will enable submissions to be sent to your email address.
          </p>
          <pre className="block bg-white p-3 border-l-4 border-gray-300 overflow-x-auto text-sm">
{`<form action="https://formsubmit.click/your@email.com">`}
          </pre>
        </div>

        <div className="mb-5">
          <h3 className="text-base font-bold mb-2">2. ADD NAME ATTRIBUTES</h3>
          <p className="text-sm mb-2">
            Include a <span className="bg-pink-200 px-1">name</span> attribute in all form elements (i.e. <i>&lt;input&gt;</i>, <i>&lt;select&gt;</i>, and <i>&lt;textarea&gt;</i>) to receive the submission data.
          </p>
          <pre className="block bg-white p-3 border-l-4 border-gray-300 overflow-x-auto text-sm">
{`<input type="email" name="email">`}
          </pre>
        </div>

        <div>
          <h3 className="text-base font-bold mb-2">3. SEND AND CONFIRM</h3>
          <p className="text-sm">
            Submit the form once, and you'll instantly start receiving submissions — no setup delays.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1d1f21', color: 'white', padding: '30px 15px', textAlign: 'center' }} className="font-mono">
        <div style={{ fontSize: '16px', marginBottom: '20px' }}>
        </div>

        <hr style={{ borderColor: '#333', margin: '20px auto', width: '90%' }} />

        <div style={{ fontSize: '14px', marginBottom: '10px', lineHeight: '1.8' }}>
          <strong>Senpai Creations</strong><br />
          <a href="mailto:support@formsubmit.click" style={{ color: '#ccc', textDecoration: 'none' }}>
            support@formsubmit.click
          </a><br />
          <a href="https://formsubmit.click" target="_blank" rel="noopener noreferrer" style={{ color: '#ccc', textDecoration: 'none' }}>
            formsubmit.click
          </a>
        </div>

        <div style={{ fontSize: '20px', marginTop: '10px' }}>
          <a href="#" style={{ color: 'white', margin: '0 8px' }}><i className="fab fa-facebook"></i></a>
          <a href="#" style={{ color: 'white', margin: '0 8px' }}><i className="fab fa-twitter"></i></a>
          <a href="#" style={{ color: 'white', margin: '0 8px' }}><i className="fab fa-github"></i></a>
          <a href="#" style={{ color: 'white', margin: '0 8px' }}><i className="fab fa-linkedin"></i></a>
          <a href="#" style={{ color: 'white', margin: '0 8px' }}><i className="fab fa-reddit"></i></a>
        </div>
      </footer>

      {/* Font Awesome CSS */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
    </div>
  );
};

export default Index;
