import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <nav className="bg-white/80 shadow-lg fixed w-full z-10 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold gradient-text">Preet Parimal Shah</h1>
            <div className="flex gap-6">
              {['About', 'Experience', 'Projects', 'Skills', 'Certifications', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:gradient-text transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      
      <main className="pt-16">
        <div className="section-gradient-1">
          <About />
        </div>
        <div className="section-gradient-2">
          <Experience />
        </div>
        <div className="section-gradient-3">
          <Projects />
        </div>
        <div className="section-gradient-4">
          <Skills />
        </div>
        <div className="section-gradient-5">
          <Certifications />
        </div>
        <div className="bg-gradient-to-b from-white to-gray-50">
          <Contact />
        </div>
      </main>
      
      <footer className="bg-gradient-to-b from-gray-50 to-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="gradient-text font-semibold">© 2024 Preet Parimal Shah. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;