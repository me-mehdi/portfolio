import React from 'react';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" style={{ paddingBottom: '0' }}>
            <div className="container">
                <h2 className="font-tech text-gradient" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                    INITIATE COMMUNICATION
                </h2>

                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
                        Open to Graduate Developer roles and interesting freelance projects.
                        <br />Signal established. Ready to connect.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
                        <a href="mailto:nidaazzielmehdi@gmail.com" className="glass" style={{
                            padding: '2rem',
                            minWidth: '200px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem',
                            color: 'var(--text-main)',
                            transition: 'transform 0.3s'
                        }}>
                            <div style={{ padding: '1rem', background: 'rgba(0, 243, 255, 0.1)', borderRadius: '50%' }}>
                                <Mail size={32} color="var(--neon-blue)" />
                            </div>
                            <span>nidaazzielmehdi@gmail.com</span>
                        </a>

                        <a href="tel:+447594560831" className="glass" style={{
                            padding: '2rem',
                            minWidth: '200px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem',
                            color: 'var(--text-main)',
                            transition: 'transform 0.3s'
                        }}>
                            <div style={{ padding: '1rem', background: 'rgba(188, 19, 254, 0.1)', borderRadius: '50%' }}>
                                <Phone size={32} color="var(--neon-purple)" />
                            </div>
                            <span>07594 560831</span>
                        </a>
                    </div>

                    <footer style={{
                        borderTop: '1px solid var(--glass-border)',
                        padding: '2rem 0',
                        color: 'var(--text-muted)',
                        fontSize: '0.9rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '4rem'
                    }}>
                        <span>© 2026 El Mehdi Nidaazzi. All Systems Functional.</span>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <a href="https://github.com/me-mehdi" target="_blank" rel="noopener noreferrer">
                                <Github size={20} />
                            </a>
                        </div>
                    </footer>
                </div>
            </div>
        </section>
    );
};

export default Contact;
