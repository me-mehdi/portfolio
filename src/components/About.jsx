import React from 'react';
import { User, Cpu } from 'lucide-react';

const About = () => {
    return (
        <section id="about" style={{ position: 'relative' }}>
            <div className="container">
                <h2 className="font-tech text-gradient" style={{ fontSize: '2.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <User size={32} color="var(--neon-purple)" />
                    ABOUT ME
                </h2>

                <div className="glass" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
                    {/* Decorative Elements */}
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100px', background: 'linear-gradient(45deg, transparent, var(--glass-border))', opacity: 0.5 }}></div>

                    <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
                        Ambitious <span style={{ color: 'var(--neon-blue)' }}>Junior Full-Stack Developer</span> with an MSc in Computer Science, skilled in Java Spring Boot, Python, and modern front-end frameworks. Proven experience in building and deploying scalable e-commerce platforms using clean architecture and Agile methodologies.
                    </p>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                        Seeking a Graduate Developer role to apply my technical expertise to solve challenging real-world problems. I specialize in <span style={{ color: 'var(--neon-purple)' }}>AI-driven applications</span> and complex backend systems.
                    </p>

                    <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '10px', height: '10px', background: 'var(--neon-blue)', borderRadius: '50%' }}></div>
                            <span>MSc Computer Science</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '10px', height: '10px', background: 'var(--neon-purple)', borderRadius: '50%' }}></div>
                            <span>Based in London, UK</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '10px', height: '10px', background: 'var(--neon-pink)', borderRadius: '50%' }}></div>
                            <span>Open to Relocation</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
