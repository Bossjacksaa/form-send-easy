
import React from 'react';
import { ArrowLeft, Book, Code, Settings, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Documentation = () => {
  return (
    <div className="min-h-screen bg-[#2d3c88] text-white font-mono">
      <div className="bg-white text-black p-4">
        <Link to="/" className="flex items-center gap-2 text-[#2d3c88] hover:underline">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Documentation</h1>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-center mb-12 text-gray-200 text-lg">
            Complete guide to using FormSubmit.click for your HTML forms
          </p>

          <div className="space-y-8">
            <div className="bg-white text-black p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <Book className="w-8 h-8 text-[#2d3c88]" />
                <h2 className="text-2xl font-bold">Getting Started</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold mb-2">1. Basic Setup</h3>
                  <p className="mb-2">Point your form action to our endpoint:</p>
                  <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
{`<form action="https://www.formsubmit.click/send/your@email.com" method="POST">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <button type="submit">Send</button>
</form>`}
                  </pre>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">2. Add Name Attributes</h3>
                  <p className="mb-2">Include name attributes in all form elements:</p>
                  <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
{`<input type="text" name="fullname" placeholder="Full Name">
<input type="email" name="email" placeholder="Email Address">
<textarea name="message" placeholder="Your message"></textarea>`}
                  </pre>
                </div>
              </div>
            </div>

            <div className="bg-white text-black p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <Settings className="w-8 h-8 text-[#2d3c88]" />
                <h2 className="text-2xl font-bold">Advanced Features</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold mb-2">Custom Subject Line</h3>
                  <p className="mb-2">Add a custom subject to your emails:</p>
                  <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
{`<input type="hidden" name="_subject" value="New contact form submission">`}
                  </pre>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">Custom Redirect</h3>
                  <p className="mb-2">Redirect users after submission:</p>
                  <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
{`<input type="hidden" name="_next" value="https://yoursite.com/thanks.html">`}
                  </pre>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">Auto Response</h3>
                  <p className="mb-2">Send automatic replies to users:</p>
                  <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
{`<input type="hidden" name="_autoresponse" value="Thank you for contacting us!">`}
                  </pre>
                </div>
              </div>
            </div>

            <div className="bg-white text-black p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <Code className="w-8 h-8 text-[#2d3c88]" />
                <h2 className="text-2xl font-bold">AJAX Submissions</h2>
              </div>
              
              <div className="space-y-4">
                <p>For AJAX form submissions, use this JavaScript example:</p>
                <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
{`fetch('https://www.formsubmit.click/send/your@email.com', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Hello from AJAX!'
  })
})
.then(response => response.json())
.then(data => console.log('Success:', data));`}
                </pre>
              </div>
            </div>

            <div className="bg-white text-black p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <AlertCircle className="w-8 h-8 text-[#2d3c88]" />
                <h2 className="text-2xl font-bold">Important Notes</h2>
              </div>
              
              <ul className="space-y-2">
                <li>• All form fields must have name attributes</li>
                <li>• Forms must use POST method</li>
                <li>• File uploads are supported (max 10MB per file)</li>
                <li>• Spam protection is automatically enabled</li>
                <li>• No registration or API keys required</li>
                <li>• Works with any website or framework</li>
              </ul>
            </div>

            <div className="bg-[#d7ebf9] text-[#1d1d1d] p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Need More Help?</h3>
              <p className="mb-4">Try our live demo or contact our support team</p>
              <div className="space-x-4">
                <Link 
                  to="/demo" 
                  className="bg-[#2d3c88] text-white px-6 py-3 rounded hover:bg-[#1f2a5f] transition-colors inline-block"
                >
                  Try Demo
                </Link>
                <Link 
                  to="/support" 
                  className="bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700 transition-colors inline-block"
                >
                  Get Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
