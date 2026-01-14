import React, { useEffect, useState } from 'react';
import { Terminal, Code, Cpu } from 'lucide-react';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Junior Software Engineer | Full-Stack Developer";

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            setText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) clearInterval(timer);
        }, 50);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="hero" style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            paddingTop: '80px'
        }}>
            {/* Background Decor */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '300px',
                height: '300px',
                background: 'var(--neon-blue)',
                borderRadius: '50%',
                filter: 'blur(150px)',
                opacity: 0.2,
                zIndex: -1
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '10%',
                width: '400px',
                height: '400px',
                background: 'var(--neon-purple)',
                borderRadius: '50%',
                filter: 'blur(150px)',
                opacity: 0.15,
                zIndex: -1
            }} />

            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div className="glass" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '0.5rem 1rem',
                    marginBottom: '2rem',
                    borderRadius: '50px'
                }}>
                    <div style={{
                        width: '8px',
                        height: '8px',
                        background: 'var(--neon-blue)',
                        borderRadius: '50%',
                        marginRight: '10px',
                        boxShadow: '0 0 10px var(--neon-blue)'
                    }} />
                    <span className="font-tech" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        SYSTEM ONLINE
                    </span>
                </div>

                <h1 className="font-tech" style={{
                    fontSize: '4rem',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    textShadow: '0 0 20px rgba(0, 243, 255, 0.3)'
                }}>
                    El Mehdi <br />
                    <span className="text-gradient">Nidaazzi</span>
                </h1>

                <div style={{
                    fontFamily: 'monospace',
                    fontSize: '1.2rem',
                    color: 'var(--neon-blue)',
                    marginBottom: '3rem',
                    minHeight: '1.6em'
                }}>
                    &gt; {text}<span className="blink">_</span>
                </div>

                <div className="hero-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    <button className="glass font-tech" style={{
                        padding: '1rem 2rem',
                        fontSize: '1rem',
                        color: 'var(--neon-blue)',
                        cursor: 'pointer',
                        border: '1px solid var(--neon-blue)',
                        background: 'rgba(0, 243, 255, 0.05)',
                        boxShadow: '0 0 15px rgba(0, 243, 255, 0.1)',
                        transition: 'all 0.3s ease'
                    }}>
                        Download CV
                    </button>
                    <a href="#projects" className="glass font-tech" style={{
                        padding: '1rem 2rem',
                        fontSize: '1rem',
                        color: 'var(--text-main)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                    }}>
                        View Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
