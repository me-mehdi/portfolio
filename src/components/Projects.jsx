import React from 'react';
import { ExternalLink, Github, Layers, Target } from 'lucide-react';

const ProjectCard = ({ title, type, period, tech, points, highlightColor }) => (
    <div className="glass" style={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderTop: `2px solid ${highlightColor}`,
        position: 'relative',
        overflow: 'hidden'
    }}>
        <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '100px',
            height: '100px',
            background: highlightColor,
            borderRadius: '50%',
            filter: 'blur(60px)',
            opacity: 0.2
        }} />

        <div style={{ marginBottom: '1.5rem' }}>
            <h3 className="font-tech" style={{ fontSize: '1.8rem', color: 'var(--text-highlight)', marginBottom: '0.5rem' }}>{title}</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: highlightColor, fontSize: '0.9rem', marginBottom: '1rem' }}>
                <span>{type}</span>
                <span>{period}</span>
            </div>
        </div>

        <div style={{ marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {tech.map(t => (
                <span key={t} style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                    {t}
                </span>
            ))}
        </div>

        <ul style={{ listStyle: 'none', flex: 1, marginBottom: '2rem' }}>
            {points.map((p, i) => (
                <li key={i} style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.8rem', color: 'var(--text-muted)' }}>
                    <Target size={16} color={highlightColor} style={{ flexShrink: 0, marginTop: '4px' }} />
                    <span>{p}</span>
                </li>
            ))}
        </ul>

        <div style={{ display: 'flex', gap: '1rem' }}>
            <button style={{
                flex: 1,
                padding: '0.8rem',
                background: 'transparent',
                border: `1px solid ${highlightColor}`,
                color: highlightColor,
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-tech)'
            }}>
                <Github size={16} /> Code
            </button>
        </div>
    </div>
);

const Projects = () => {
    const projects = [
        {
            title: "Real-Time AI Fitness Coach",
            type: "MSc Final Project",
            period: "Sep 2025 – Dec 2025",
            tech: ["Python", "TensorFlow", "Keras", "LSTM", "OpenCV"],
            highlightColor: "var(--neon-pink)",
            points: [
                "Built a real-time exercise recognition system using a custom LSTM neural network with 98.10% accuracy.",
                "Optimized for CPU-based execution to enable real-time performance without heavy GPUs.",
                "Designed for webcam-based feedback for accessible personal fitness coaching."
            ]
        },
        {
            title: "Wissal Market",
            type: "Final Engineering Project",
            period: "2024",
            tech: ["ASP.NET Core", "SQL Server", "C#", "Visual Studio"],
            highlightColor: "var(--neon-purple)",
            points: [
                "Deployed a complete dynamic cosmetics e-commerce platform with product catalog and secure checkout.",
                "Designed a normalized SQL Server schema for efficient data handling.",
                "Built a comprehensive role-based dashboard for inventory and sales management."
            ]
        }
    ];

    return (
        <section id="projects">
            <div className="container">
                <h2 className="font-tech text-gradient" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                    KEY PROJECTS
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
                </div>
            </div>
        </section>
    );
};

export default Projects;
