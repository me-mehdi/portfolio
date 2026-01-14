import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import RevealOnScroll from './components/RevealOnScroll';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <RevealOnScroll>
                <About />
            </RevealOnScroll>
            <RevealOnScroll>
                <Skills />
            </RevealOnScroll>
            <RevealOnScroll>
                <Experience />
            </RevealOnScroll>
            <RevealOnScroll>
                <Projects />
            </RevealOnScroll>
            <RevealOnScroll>
                <Contact />
            </RevealOnScroll>
        </div>
    );
}

export default App;
