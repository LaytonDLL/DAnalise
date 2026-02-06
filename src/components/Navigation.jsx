import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    Layton<span className="highlight">DLL</span>
                </Link>

                <div className="nav-toggle" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                            Home
                        </Link>
                    </li>

                    <li className="nav-item dropdown">
                        <span className="nav-link dropdown-toggle">
                            Meus Projetos
                        </span>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/cursos" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                                    Análise de Dados
                                </Link>
                            </li>
                            <li>
                                <a href="https://angleone1.netlify.app/" target="_blank" rel="noopener noreferrer" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                                    AngleOne
                                </a>
                            </li>
                            <li>
                                <a href="https://axyprompt.netlify.app/" target="_blank" rel="noopener noreferrer" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                                    AxyPrompt
                                </a>
                            </li>
                            <li>
                                <a href="https://df2.netlify.app/" target="_blank" rel="noopener noreferrer" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                                    DF2 Experimental
                                </a>
                            </li>
                            <li>
                                <Link to="/cronometro" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                                    Cronômetro Smart
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <a href="https://github.com/LaytonDLL" target="_blank" rel="noopener noreferrer" className="nav-link">
                            GitHub
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
