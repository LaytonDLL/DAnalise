// Módulo 5: Portfólio, Projetos e Recursos (50 horas)
document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('portfolio-content');
    if (!content) return;

    content.innerHTML = `
        <div class="module-intro">
            <h3>Selecione uma Aula para Iniciar</h3>
            <p>Transforme seu conhecimento em um portfólio irresistível para recrutadores.</p>
        </div>

        <div class="hub-grid">
            <!-- Aula 1: Pensamento Crítico -->
            <div class="hub-card">
                <div class="hub-icon logic"></div> <!-- Roxo/Azul -->
                <h3>Pensamento Crítico</h3>
                <p>Framework CRISP-DM e como resolver problemas de negócios com dados.</p>
                <div class="hub-actions">
                    <button class="btn-access" data-navigate="critical_thinking">
                        ACESSAR AULA ➜
                    </button>
                    <a href="paginas/pensamento-critico-problemas.html" style="display:none;"></a>
                </div>
            </div>

            <!-- Aula 2: Projetos Reais -->
            <div class="hub-card">
                <div class="hub-icon folder"></div>
                <h3>Projetos de Portfólio</h3>
                <p>Ideias de projetos por nível, fontes de dados e estrutura.</p>
                <div class="hub-actions">
                    <button class="btn-access" data-navigate="projects">
                        ACESSAR AULA ➜
                    </button>
                    <a href="paginas/projetos-reais.html" style="display:none;"></a>
                </div>
            </div>

            <!-- Aula 3: GitHub Profissional -->
            <div class="hub-card">
                <div class="hub-icon github"></div>
                <h3>GitHub Profissional</h3>
                <p>Como organizar repositórios, escrever READMEs e documentar código.</p>
                <div class="hub-actions">
                    <button class="btn-access" data-navigate="github">
                        ACESSAR AULA ➜
                    </button>
                    <a href="paginas/github-portfolio.html" style="display:none;"></a>
                </div>
            </div>

            <!-- Aula 4: LinkedIn & Carreira -->
            <div class="hub-card">
                <div class="hub-icon linkedin"></div>
                <h3>LinkedIn & Carreira</h3>
                <p>Otimização de perfil, networking e preparação para entrevistas.</p>
                <div class="hub-actions">
                    <button class="btn-access" data-navigate="linkedin">
                        ACESSAR AULA ➜
                    </button>
                    <a href="paginas/linkedin-dados.html" style="display:none;"></a>
                </div>
            </div>
        </div>

        <div class="module-navigation" style="margin-top: 3rem;">
            <button class="btn btn-secondary" data-navigate="avancado">Voltar: Python</button>
            <button class="btn btn-primary" data-navigate="home">Voltar ao Início</button>
        </div>
    `;

    // Handler para os botões de acesso
    content.querySelectorAll('.btn-access').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const navMap = {
                'critical_thinking': 'paginas/pensamento-critico-problemas.html',
                'projects': 'paginas/projetos-reais.html',
                'github': 'paginas/github-portfolio.html',
                'linkedin': 'paginas/linkedin-dados.html'
            };
            const targetKey = btn.getAttribute('data-navigate');
            if (navMap[targetKey]) {
                // Navegação com transição suave
                window.transitionToUrl(navMap[targetKey]);
            }
        });
    });

    // Re-init navigation
    // Re-init navigation scoped and excluding access buttons
    content.querySelectorAll('[data-navigate]:not(.btn-access)').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = btn.getAttribute('data-navigate');
            if (typeof navigateTo === 'function') navigateTo(target);
        });
    });
});
