// src/app/layout.tsx
import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Website</title>
      </head>
      <body>
        <nav className="bg-blue-600 p-4 fixed w-full top-0 z-50 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <a href="/home" className="text-white text-2xl font-bold hover:text-gray-200">MyWebsite</a>
            <div className="hidden md:flex space-x-6">
              <a href="/home" className="text-white hover:text-gray-200">Home</a>
              <a href="/about" className="text-white hover:text-gray-200">About</a>
              <a href="/contact" className="text-white hover:text-gray-200">Contact</a>
            </div>
            <div className="md:hidden">
              <button className="text-white">☰</button> {/* Placeholder for mobile menu */}
            </div>
          </div>
        </nav>
        <main className="mt-16">{children}</main> {/* Ensure content is below fixed navbar */}
      </body>
    </html>
  );
}
