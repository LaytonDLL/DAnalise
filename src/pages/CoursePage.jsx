import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Database, BarChart3, Code2, PieChart, LineChart, FileSpreadsheet, Brain, Briefcase, Github, Linkedin } from 'lucide-react';

// Dados dos módulos do curso
const modules = [
    {
        id: 'fundacao',
        title: 'Módulo 1: Fundação',
        color: '#FF4757',
        icon: Brain,
        lessons: [
            { title: 'Pensamento Analítico', href: '/paginas/pensamento-analitico.html' },
            { title: 'Pensamento Crítico', href: '/paginas/pensamento-critico-problemas.html' },
            { title: 'Matemática Financeira', href: '/paginas/matematica-financeira.html' },
            { title: 'Estatística Descritiva', href: '/paginas/estatistica-descritiva.html' },
        ]
    },
    {
        id: 'coleta',
        title: 'Módulo 2: Coleta & SQL',
        color: '#FFA502',
        icon: Database,
        lessons: [
            { title: 'Excel Básico ao Avançado', href: '/paginas/excel-basico-avancado.html' },
            { title: 'SQL Básico ao Avançado', href: '/paginas/sql-basico-avancado.html' },
            { title: 'Queries Otimizadas', href: '/paginas/queries-otimizadas.html' },
            { title: 'Modelagem de Banco de Dados', href: '/paginas/modelagem-banco-dados.html' },
        ]
    },
    {
        id: 'visualizacao',
        title: 'Módulo 3: Visualização',
        color: '#8E44AD',
        icon: PieChart,
        lessons: [
            { title: 'Power BI & DAX', href: '/paginas/powerbi-dax.html' },
            { title: 'Tableau Alternativa', href: '/paginas/tableau-alternativa.html' },
            { title: 'Dashboards Profissionais', href: '/paginas/dashboards-profissionais.html' },
            { title: 'Data Storytelling', href: '/paginas/data-storytelling.html' },
        ]
    },
    {
        id: 'avancado',
        title: 'Módulo 4: Python Avançado',
        color: '#3742FA',
        icon: Code2,
        lessons: [
            { title: 'Python Básico', href: '/paginas/python-basico.html' },
            { title: 'Pandas & NumPy', href: '/paginas/pandas-numpy.html' },
            { title: 'Matplotlib & Seaborn', href: '/paginas/matplotlib-seaborn.html' },
            { title: 'Data Wrangling', href: '/paginas/data-wrangling.html' },
            { title: 'SQL + Python + BI', href: '/paginas/sql-python-bi.html' },
        ]
    },
    {
        id: 'portfolio',
        title: 'Módulo 5: Portfolio',
        color: '#2ED573',
        icon: Briefcase,
        lessons: [
            { title: 'Projetos Reais', href: '/paginas/projetos-reais.html' },
            { title: 'GitHub Portfolio', href: '/paginas/github-portfolio.html' },
            { title: 'LinkedIn para Dados', href: '/paginas/linkedin-dados.html' },
        ]
    },
];

const CoursePage = () => {
    return (
        <div style={{ minHeight: '100vh', padding: '2rem' }}>
            {/* Back Link */}
            <Link to="/" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
                <ArrowLeft size={20} /> Voltar aos Projetos
            </Link>

            {/* Header */}
            <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                    marginBottom: '1rem',
                    background: 'linear-gradient(135deg, #2ecc71, #3498db)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Trilha de Análise de Dados
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                    Do zero ao profissional. Excel, SQL, Python, Power BI e construção de portfólio.
                </p>
            </header>

            {/* Modules Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2rem',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                {modules.map((module) => (
                    <div
                        key={module.id}
                        className="glass-panel"
                        style={{
                            padding: '2rem',
                            borderRadius: '16px',
                            border: `1px solid ${module.color}40`,
                            boxShadow: `0 0 30px ${module.color}20`,
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {/* Module Header */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '12px',
                                background: `${module.color}20`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: module.color
                            }}>
                                <module.icon size={28} />
                            </div>
                            <h2 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', margin: 0 }}>
                                {module.title}
                            </h2>
                        </div>

                        {/* Lessons List */}
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {module.lessons.map((lesson, idx) => (
                                <li key={idx}>
                                    <a
                                        href={lesson.href}
                                        style={{
                                            display: 'block',
                                            padding: '0.8rem 1rem',
                                            marginBottom: '0.5rem',
                                            borderRadius: '8px',
                                            background: 'rgba(255,255,255,0.03)',
                                            color: 'var(--text-secondary)',
                                            textDecoration: 'none',
                                            transition: 'all 0.2s ease',
                                            borderLeft: `3px solid transparent`
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = `${module.color}15`;
                                            e.target.style.color = 'var(--text-primary)';
                                            e.target.style.borderLeftColor = module.color;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = 'rgba(255,255,255,0.03)';
                                            e.target.style.color = 'var(--text-secondary)';
                                            e.target.style.borderLeftColor = 'transparent';
                                        }}
                                    >
                                        {lesson.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoursePage;
