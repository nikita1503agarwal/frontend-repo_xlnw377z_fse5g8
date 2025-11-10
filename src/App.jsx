import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#2f404d] text-[#e2dddf]">
      {/* Accessibility: skip link */}
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-md focus:bg-[#85ebd9] focus:px-3 focus:py-2 focus:text-[#2f404d]">
        Skip to content
      </a>

      {/* Landing Hero with 3D background */}
      <Hero />

      {/* Features */}
      <main id="main">
        <Features />
        <HowItWorks />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
