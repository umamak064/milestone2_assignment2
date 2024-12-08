// src/app/about/page.tsx
export default function About() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-8">
        <header className="text-4xl font-bold text-blue-600 mb-6">About Us</header>
        <p className="text-lg text-gray-700 mb-6">We are a passionate team dedicated to creating the best user experiences.</p>
        <a href="/home" className="text-white bg-blue-500 px-6 py-2 rounded-full hover:bg-blue-600">Back to Home</a>
  
        {/* New Section */}
        <section className="mt-16 max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-blue-600">Our Story</h2>
          <p className="mt-4 text-lg text-gray-600">We started as a small team with a vision to bring better design and innovation to the web. Today, we continue to grow and innovate.</p>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-blue-500">Our Values</h3>
            <ul className="list-disc list-inside mt-4 text-lg text-gray-600">
              <li>Innovation</li>
              <li>Collaboration</li>
              <li>Integrity</li>
              <li>Customer Focus</li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
  