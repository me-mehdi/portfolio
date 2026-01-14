import React from 'react';
import { Database, Code2, Brain, Layout, Server, Settings } from 'lucide-react';

const SkillCategory = ({ title, skills, icon: Icon, color }) => (
    <div className="glass" style={{ padding: '1.5rem', height: '100%', transition: 'transform 0.3s ease', cursor: 'default' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
            <Icon size={24} color={color} />
            <h3 className="font-tech" style={{ fontSize: '1.2rem', color: 'var(--text-highlight)' }}>{title}</h3>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {skills.map((skill) => (
                <span key={skill} style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${color}40`,
                    padding: '0.25rem 0.75rem',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    color: 'var(--text-main)',
                    boxShadow: `0 0 5px ${color}10`
                }}>
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const Skills = () => {
    const categories = [
        {
            title: "Backend Engineering",
            icon: Server,
            color: "var(--neon-blue)",
            skills: ["Java", "Python", "C#", "PHP", "Spring Boot", "FastAPI", "Flask", "ASP.NET Core", "Laravel"]
        },
        {
            title: "Data & Databases",
            icon: Database,
            color: "var(--neon-purple)",
            skills: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB", "NumPy", "Pandas"]
        },
        {
            title: "AI / Machine Learning",
            icon: Brain,
            color: "var(--neon-pink)",
            skills: ["TensorFlow/Keras", "OpenCV", "MediaPipe", "LSTM / RNN", "Pose Estimation"]
        },
        {
            title: "Frontend Development",
            icon: Layout,
            color: "#00ff9d",
            skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Bootstrap", "Blade"]
        },
        {
            title: "DevOps & Tools",
            icon: Settings,
            color: "#ff9d00",
            skills: ["Git/GitHub", "Docker", "CI/CD", "Postman", "IntelliJ IDEA", "VS Code"]
        }
    ];

    return (
        <section id="skills">
            <div className="container">
                <h2 className="font-tech text-gradient" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                    TECHNICAL ARSENAL
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {categories.map((cat) => (
                        <SkillCategory key={cat.title} {...cat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
