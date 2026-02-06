import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Stopwatch from './components/Stopwatch';
import Navigation from './components/Navigation';
import CoursePage from './pages/CoursePage';

// Componente Home (Versão React da Index original)
const Home = () => {
    return (
        <div className="container" style={{ marginTop: '5rem' }}>
            <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <h1 className="gradient-text">Meus Projetos</h1>
                <p className="subtitle">Explorando dados, inteligência artificial e desenvolvimento web.</p>
            </header>
            {/* The project grid is kept as a showcase, while navigation is now primary in the header */}
            <div className="projects-grid">
                {/* Project 1: Data Analysis - Premium Feature Card (Internal React Route) */}
                <Link to="/cursos" className="project-card feature-card" style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.2), rgba(15, 23, 42, 0.95)), url('/assets/analise-cover.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '320px',
                    justifyContent: 'flex-end',
                    border: '1px solid rgba(56, 189, 248, 0.5)',
                    boxShadow: '0 0 30px rgba(56, 189, 248, 0.15)'
                }}>
                    {/* Icon removed to let image shine */}
                    <h3 style={{
                        fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
                        lineHeight: '1.2',
                        whiteSpace: 'nowrap',
                        textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                        marginBottom: '0.5rem'
                    }}>Análise de Dados</h3>
                    <p className="card-desc" style={{ color: '#e2e8f0', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
                        Plataforma de cursos completa cobrindo Excel, SQL, Power BI, Python e construção de portfólio.
                    </p>
                </Link>

                {/* Project 2: AngleOne - Premium Feature Card */}
                <a href="https://angleone1.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-card feature-card" style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.2), rgba(15, 23, 42, 0.95)), url('/assets/angleone-cover.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '320px',
                    justifyContent: 'flex-end',
                    border: '1px solid rgba(14, 165, 233, 0.5)',
                    boxShadow: '0 0 30px rgba(14, 165, 233, 0.15)'
                }}>
                    {/* Icon removed */}
                    <h3 style={{
                        fontSize: 'clamp(1.5rem, 4vw, 1.8rem)',
                        lineHeight: '1.2',
                        textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                        marginBottom: '0.5rem'
                    }}>AngleOne</h3>
                    <p className="card-desc" style={{ color: '#e2e8f0', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
                        Aplicação web moderna hospedada na Netlify. Explore funcionalidades avançadas de front-end.
                    </p>
                </a>

                {/* Project 3: AxyPrompt - Premium Feature Card */}
                <a href="https://axyprompt.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-card feature-card" style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.2), rgba(15, 23, 42, 0.95)), url('/assets/axyprompt-cover.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '320px',
                    justifyContent: 'flex-end',
                    border: '1px solid rgba(168, 85, 247, 0.5)',
                    boxShadow: '0 0 30px rgba(168, 85, 247, 0.15)'
                }}>
                    <h3 style={{
                        fontSize: 'clamp(1.5rem, 4vw, 1.8rem)',
                        lineHeight: '1.2',
                        textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                        marginBottom: '0.5rem'
                    }}>AxyPrompt</h3>
                    <p className="card-desc" style={{ color: '#e2e8f0', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
                        Ferramenta de engenharia de prompt e IA. Otimize seus fluxos de trabalho com IA generativa.
                    </p>
                </a>

                {/* Project 4: DF2 - Premium Feature Card */}
                <a href="https://df2.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-card feature-card" style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.2), rgba(15, 23, 42, 0.95)), url('/assets/df2-cover.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '320px',
                    justifyContent: 'flex-end',
                    border: '1px solid rgba(139, 92, 246, 0.5)',
                    boxShadow: '0 0 30px rgba(139, 92, 246, 0.15)'
                }}>
                    <h3 style={{
                        fontSize: 'clamp(1.5rem, 4vw, 1.8rem)',
                        lineHeight: '1.2',
                        textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                        marginBottom: '0.5rem'
                    }}>DF2 Experimental</h3>
                    <p className="card-desc" style={{ color: '#e2e8f0', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
                        Experimento de jogo em React com assets e sprites animados. Testando limites do web gaming.
                    </p>
                </a>

                {/* Project 5: Cronômetro - Premium Feature Card (Internal React Route) */}
                <Link to="/cronometro" className="project-card feature-card" style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.2), rgba(15, 23, 42, 0.95)), url('/assets/cronometro-cover.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '320px',
                    justifyContent: 'flex-end',
                    border: '1px solid rgba(46, 213, 115, 0.5)',
                    boxShadow: '0 0 30px rgba(46, 213, 115, 0.15)'
                }}>
                    <h3 style={{
                        fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
                        lineHeight: '1.2',
                        whiteSpace: 'nowrap',
                        textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                        marginBottom: '0.5rem'
                    }}>Cronômetro Smart</h3>
                    <p className="card-desc" style={{ color: '#e2e8f0', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
                        Ferramenta React nativa para precisão temporal com interface Glassmorphism.
                    </p>
                </Link>
            </div>
        </div>
    );
};

// Componente Layout para manter o background e navbar
const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            {children}
        </>
    );
}

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cursos" element={<CoursePage />} />
                    <Route path="/cronometro" element={
                        <>
                            {/* Wrapper simples para voltar */}
                            {/* Voltar button removed as it's now in the header/nav in theory, but keeping for direct ease of use in this view */}
                            <div style={{ position: 'absolute', top: '5rem', left: '2rem', zIndex: 10 }}>
                                <Link to="/" className="back-link">[&lt;] Voltar ao Hub</Link>
                            </div>
                            <div style={{ padding: '7rem 2rem 5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <h1 style={{
                                    background: 'linear-gradient(135deg, #10b981, #06b6d4, #8b5cf6)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                                    fontWeight: 800,
                                    marginBottom: '2rem',
                                    textAlign: 'center',
                                    filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))'
                                }}>Cronômetro Inteligente</h1>
                                <Stopwatch />
                            </div>
                        </>
                    } />
                </Routes>
            </Layout>
        </Router>
    )
}

export default App
