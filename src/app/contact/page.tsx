// src/app/contact/page.tsx
export default function Contact() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-8">
        <header className="text-4xl font-bold text-blue-600 mb-6">Contact Us</header>
        <p className="text-lg text-gray-700 mb-6">We’d love to hear from you! Please reach out using the form below.</p>
  
        {/* Contact Form */}
        <form className="w-full max-w-lg bg-white p-8 shadow-lg rounded-lg" method="POST">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              id="name"
              type="text"
              name="name"
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email</label>
            <input 
              id="email"
              type="email"
              name="email"
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
  
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea 
              id="message"
              name="message"
              rows={5}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message"
            />
          </div>
  
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Submit
          </button>
        </form>
  
        <a href="/home" className="mt-8 text-white bg-blue-500 px-6 py-2 rounded-full hover:bg-blue-600">
          Back to Home
        </a>
      </div>
    );
  }
  