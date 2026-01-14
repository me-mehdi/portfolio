import React, { useState, useEffect } from 'react';
import { Github, Target, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

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
            <h3 className="font-tech" style={{ fontSize: '1.5rem', color: 'var(--text-highlight)', marginBottom: '0.5rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: highlightColor, fontSize: '0.8rem', marginBottom: '1rem' }}>
                <span>{type}</span>
                <span>{period}</span>
            </div>
        </div>

        <div style={{ marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {tech.map((t, i) => (
                i < 4 && <span key={t} style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                    {t}
                </span>
            ))}
            {tech.length > 4 && <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', opacity: 0.6 }}>+{tech.length - 4}</span>}
        </div>

        <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
            {points.map((p, i) => (
                <li key={i} style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.8rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    <Target size={14} color={highlightColor} style={{ flexShrink: 0, marginTop: '4px' }} />
                    <span style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{p}</span>
                </li>
            ))}
        </ul>

        <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
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
            <button style={{
                flex: 1,
                padding: '0.8rem',
                background: highlightColor,
                border: `1px solid ${highlightColor}`,
                color: '#000',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-tech)',
                fontWeight: 'bold'
            }}>
                <ExternalLink size={16} /> Demo
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
                "Built a real-time exercise recognition system using a custom LSTM neural network.",
                "Optimized for CPU-based execution to enable real-time performance.",
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
                "Deployed a complete dynamic cosmetics e-commerce platform.",
                "Designed a normalized SQL Server schema for efficient data handling.",
                "Built a comprehensive role-based dashboard for management."
            ]
        },
        {
            title: "E-Commerce System",
            type: "Internship Project",
            period: "2024",
            tech: ["Laravel", "PHP", "MySQL", "JavaScript"],
            highlightColor: "var(--neon-blue)",
            points: [
                "Developed a warehouse-integrated e-commerce platform.",
                "Implemented Role-Based Access Control (RBAC) ensuring data security.",
                "Created real-time analytics dashboard for sales insights."
            ]
        },
        {
            title: "Inventory Manager",
            type: "Internship Project",
            period: "2024",
            tech: ["PHP", "MySQL", "Bootstrap", "jQuery"],
            highlightColor: "#00ff9d",
            points: [
                "Engineered a multi-warehouse inventory system.",
                "Enabled real-time stock tracking and automated transfers.",
                "Optimized database queries for fast reporting."
            ]
        },
        {
            title: "Portfolio V1",
            type: "Personal",
            period: "2023",
            tech: ["HTML", "CSS", "JavaScript"],
            highlightColor: "#ff9d00",
            points: [
                "First iteration of personal portfolio.",
                "Responsive design with dark mode toggle.",
                "Deployed on Netlify."
            ]
        }
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);

    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVisibleCount(1);
            } else if (window.innerWidth < 1200) {
                setVisibleCount(2);
            } else {
                setVisibleCount(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setStartIndex((prev) => (prev + 1) % projects.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [isPaused, projects.length]);

    const nextProject = () => {
        setStartIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setStartIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    // Calculate visible projects with wrap-around logic
    const getVisibleProjects = () => {
        const visible = [];
        for (let i = 0; i < visibleCount; i++) {
            const index = (startIndex + i) % projects.length;
            visible.push(projects[index]);
        }
        return visible;
    };

    return (
        <section id="projects" style={{ minHeight: '600px' }}>
            <div className="container">
                <h2 className="font-tech text-gradient" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                    KEY PROJECTS
                </h2>

                <div
                    style={{ position: 'relative', padding: '0 2rem' }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Controls */}
                    <button
                        onClick={prevProject}
                        className="glass"
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            padding: '1rem',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <ChevronLeft color="var(--neon-blue)" />
                    </button>

                    <button
                        onClick={nextProject}
                        className="glass"
                        style={{
                            position: 'absolute',
                            right: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            padding: '1rem',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <ChevronRight color="var(--neon-blue)" />
                    </button>

                    {/* Grid/Carousel */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))`,
                        gap: '2rem',
                        transition: 'all 0.5s ease',
                    }}>
                        {getVisibleProjects().map((p, idx) => (
                            <div key={`${p.title}-${idx}`} className="project-slide" style={{ height: '600px', width: '100%' }}>
                                <ProjectCard {...p} />
                            </div>
                        ))}
                    </div>

                    {/* Indicators */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '3rem' }}>
                        {projects.map((_, idx) => (
                            <div
                                key={idx}
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    background: idx === startIndex ? 'var(--neon-blue)' : 'var(--glass-border)',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onClick={() => setStartIndex(idx)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
