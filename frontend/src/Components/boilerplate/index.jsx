import React from 'react';

// SVG Icons for Tech Stack (self-contained for easy copy-paste)
const DjangoIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.16016 19.32L6.84016 4.68L19.3202 5.51999C19.3202 5.51999 12.6002 2.75999 7.80016 8.99999C3.00016 15.24 2.16016 19.32 2.16016 19.32Z" fill="#092E20"/>
    <path d="M12.1201 20.16C12.1201 20.16 8.28011 11.88 14.0401 10.44C19.8001 9 21.8401 12.24 21.8401 12.24L12.1201 20.16Z" fill="#092E20"/>
  </svg>
);

const NextJsIcon = () => (
  <svg width="48" height="48" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="64" cy="64" r="64" fill="black"/>
    <path d="M109.5 118.5C109.5 123.194 105.694 127 101 127H49C44.3056 127 40.5 123.194 40.5 118.5V41C40.5 36.3056 44.3056 32.5 49 32.5H59.5V87.5C59.5 90.2614 61.7386 92.5 64.5 92.5C67.2614 92.5 69.5 90.2614 69.5 87.5V32.5H83.5L109.5 72V118.5Z" stroke="white" strokeWidth="11"/>
  </svg>
);

const TailwindIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.001 4.52905C14.355 4.52905 16.461 5.52405 17.999 7.06105C21.491 10.5531 21.491 16.4471 17.999 19.9391C16.461 21.4761 14.355 22.4711 12.001 22.4711C9.647 22.4711 7.541 21.4761 6.003 19.9391C2.511 16.4471 2.511 10.5531 6.003 7.06105C7.541 5.52405 9.647 4.52905 12.001 4.52905ZM12.001 1.52905C8.044 1.52905 4.259 3.09105 1.48 5.87005C-1.482 8.83205 -1.482 13.6671 1.48 16.6291C4.259 19.4081 8.044 20.9701 12.001 20.9701C15.958 20.9701 19.743 19.4081 22.522 16.6291C25.484 13.6671 25.484 8.83205 22.522 5.87005C19.743 3.09105 15.958 1.52905 12.001 1.52905Z" fill="#38BDF8"/>
        <path d="M6.75 12.0289C6.75 10.6489 7.85 9.54885 9.23 9.54885C10.61 9.54885 11.71 10.6489 11.71 12.0289C11.71 13.4089 10.61 14.5089 9.23 14.5089C7.85 14.5089 6.75 13.4089 6.75 12.0289ZM12.29 12.0289C12.29 10.6489 13.39 9.54885 14.77 9.54885C16.15 9.54885 17.25 10.6489 17.25 12.0289C17.25 13.4089 16.15 14.5089 14.77 14.5089C13.39 14.5089 12.29 13.4089 12.29 12.0289Z" fill="#38BDF8"/>
    </svg>
);

// Main Homepage Component
export default function BoilerplateHomepage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="py-4 px-8 border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <h2 className="text-xl font-bold tracking-wider">
            <span className="text-green-400">VALUE</span>ANS
          </h2>
          <nav>
            <a href="#features" className="text-gray-400 hover:text-white transition-colors duration-300">
              Features
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="text-center py-20 px-4 flex flex-col items-center">
          <div className="max-w-4xl">
            <div className="flex justify-center items-center gap-6 mb-6">
              <DjangoIcon />
              <span className="text-4xl font-thin text-gray-600">+</span>
              <NextJsIcon />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">
              Django + Next.js Boilerplate
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              A production-ready starting point designed to accelerate your development workflow, combining a powerful backend with a lightning-fast frontend.
            </p>
            <div className="mt-8">
              <p className="text-sm text-gray-500 tracking-widest">DESIGNED & CRAFTED BY</p>
              <h3 className="text-2xl font-bold text-green-400 mt-1">VALUEANS</h3>
            </div>
            <div className="mt-10 flex justify-center gap-4">
              <a
                href="#" // Replace with your GitHub link
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 duration-300"
              >
                Get Started
              </a>
              <a
                href="#" // Replace with your documentation link
                className="bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Read Docs
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-900 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold">What's Included?</h2>
              <p className="text-gray-400 mt-2">All the essentials for a modern web application, right out of the box.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Feature Card 1 */}
              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-green-500 transition-colors duration-300">
                <h3 className="text-2xl font-bold mb-2">Powerful Django Backend</h3>
                <p className="text-gray-400">
                  Leverage the Django REST Framework for robust, scalable, and secure APIs. Includes user authentication and a pre-configured admin panel.
                </p>
              </div>
              {/* Feature Card 2 */}
              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-green-500 transition-colors duration-300">
                <h3 className="text-2xl font-bold mb-2">Modern Next.js Frontend</h3>
                <p className="text-gray-400">
                  Enjoy the benefits of Server-Side Rendering (SSR) and Static Site Generation (SSG) with the leading React framework for performance.
                </p>
              </div>
              {/* Feature Card 3 */}
              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-green-500 transition-colors duration-300">
                <h3 className="text-2xl font-bold mb-2">Styled with Tailwind CSS</h3>
                <p className="text-gray-400">
                  A utility-first CSS framework for rapidly building custom designs. The project is pre-configured with a clean, dark theme.
                </p>
              </div>
              {/* Feature Card 4 */}
              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-green-500 transition-colors duration-300">
                <h3 className="text-2xl font-bold mb-2">Dockerized Environment</h3>
                <p className="text-gray-400">
                  Get up and running in minutes with a fully containerized development environment using Docker Compose.
                </p>
              </div>
              {/* Feature Card 5 */}
              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-green-500 transition-colors duration-300">
                <h3 className="text-2xl font-bold mb-2">Authentication Ready</h3>
                <p className="text-gray-400">
                  Pre-built token-based authentication (JWT) flow between the frontend and backend, including sign-up, login, and protected routes.
                </p>
              </div>
              {/* Feature Card 6 */}
              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-green-500 transition-colors duration-300">
                <h3 className="text-2xl font-bold mb-2">Ready for Deployment</h3>
                <p className="text-gray-400">
                  Includes configurations and best practices for deploying your application to production environments.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-6">
        <div className="container mx-auto text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} VALUEANS. All Rights Reserved.</p>
          <p className="mt-1 text-sm">This boilerplate is a starting point. Happy coding!</p>
        </div>
      </footer>
    </div>
  );
}
