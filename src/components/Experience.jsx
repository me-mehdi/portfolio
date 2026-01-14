import React from 'react';
import { Briefcase, Calendar, MapPin, Github, ExternalLink } from 'lucide-react';

const ExperienceItem = ({ role, companies, period, location, tech, achievements, isLast }) => (
    <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: 'var(--neon-blue)',
                boxShadow: '0 0 10px var(--neon-blue)'
            }} />
            <div style={{
                width: '2px',
                flex: 1,
                background: isLast
                    ? 'linear-gradient(to bottom, var(--neon-blue), transparent)'
                    : 'linear-gradient(to bottom, var(--neon-blue), var(--glass-border))',
                margin: '10px 0'
            }} />
        </div>

        <div className="glass" style={{ flex: 1, padding: '2rem', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem', gap: '1rem' }}>
                <div>
                    <h3 className="font-tech" style={{ fontSize: '1.5rem', color: 'var(--text-highlight)' }}>{role}</h3>
                    <h4 style={{ fontSize: '1.2rem', color: 'var(--neon-purple)' }}>{companies}</h4>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        <Calendar size={14} />
                        <span>{period}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                        <MapPin size={14} />
                        <span>{location}</span>
                    </div>
                </div>
            </div>

            <div style={{ marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {tech.map((t) => (
                    <span key={t} style={{ fontSize: '0.8rem', padding: '0.2rem 0.5rem', border: '1px solid var(--glass-border)', borderRadius: '10px', color: 'var(--neon-blue)' }}>{t}</span>
                ))}
            </div>

            <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                {achievements.map((ach, i) => (
                    <li key={i} style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.8rem', color: 'var(--text-main)' }}>
                        <span style={{ color: 'var(--neon-purple)' }}>▹</span>
                        {ach}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const Experience = () => {
    const experiences = [
        {
            role: "Full-Stack Developer Intern",
            companies: "LetsMove Technology",
            period: "Mar 2024 – Jul 2024",
            location: "Casablanca, Morocco",
            tech: ["Laravel", "PHP", "MySQL", "Javascript", "HTML/CSS"],
            achievements: [
                "Architected and built a comprehensive e-commerce platform supporting robust product management and secure user authentication.",
                "Engineered a multi-warehouse inventory system enabling real-time stock tracking and automated transfers.",
                "Designed over 30 responsive UI pages, achieving a ~40% improvement in page load times via optimization.",
                "Produced detailed UML diagrams and technical documentation within an Agile SCRUM environment."
            ]
        },
        {
            role: "Software Developer Intern",
            companies: "YesToTheNet",
            period: "Mar 2023 – Jul 2023",
            location: "Marrakech, Morocco",
            tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Chart.js"],
            achievements: [
                "Developed a warehouse-integrated e-commerce platform with seamless stock synchronization.",
                "Implemented Role-Based Access Control (RBAC) ensuring data security for Admins, Cashiers, and Accountants.",
                "Built a real-time analytics dashboard using Chart.js for sales and inventory turnover insights."
            ]
        }
    ];

    return (
        <section id="experience">
            <div className="container">
                <h2 className="font-tech text-gradient" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                    <Briefcase size={32} />
                    EXPERIENCE LOG
                </h2>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} {...exp} isLast={index === experiences.length - 1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
