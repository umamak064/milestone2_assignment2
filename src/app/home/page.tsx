// src/app/home/page.tsx
export default function Home() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-8">
        <header className="text-4xl font-bold text-blue-600 mb-6">Welcome </header>
        <p className="text-xl text-gray-700 mb-6">This is a simple multi-page website designed with Next.js and Tailwind CSS.</p>
        <a href="/about" className="mt-6 text-white bg-blue-500 px-6 py-2 rounded-full hover:bg-blue-600">learn more</a>
  
        {/* New Section */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-blue-600">Why Choose Us?</h2>
          <p className="mt-4 text-lg text-gray-600">We provide the best services with a focus on user experience and high-quality design.
            
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-blue-500">Fast Delivery</h3>
              <p className="mt-2 text-gray-600">Our products are delivered quickly and reliably.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-blue-500">24/7 Support</h3>
              <p className="mt-2 text-gray-600">We offer round-the-clock customer service for all your needs.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-blue-500">Quality Guarantee</h3>
              <p className="mt-2 text-gray-600">We guarantee the best quality for every product.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
  