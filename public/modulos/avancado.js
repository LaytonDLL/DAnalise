// Módulo 4: Avançado - Python, Pandas e Limpeza de Dados (120 horas)
document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('avancado-content');
    if (!content) return;

    content.innerHTML = `
        <div class="module-intro">
            <h3>Selecione uma Aula para Iniciar</h3>
            <p>Automatize análises e processe grandes volumes de dados com Python.</p>
        </div>

        <div class="hub-grid">
            <!-- Aula 1: Python Fundamentos -->
            <div class="hub-card">
                <div class="hub-icon python"></div> <!-- Azul/Amarelo -->
                <h3>Python Fundamentos</h3>
                <p>Sintaxe básica, estruturas de dados e lógica de programação.</p>
                <div class="hub-actions">
                    <button class="btn-access" data-navigate="python_basico">
                        ACESSAR AULA ➜
                    </button>
                    <a href="paginas/python-basico.html" style="display:none;"></a>
                </div>
            </div>

            <!-- Aula 2: Pandas & NumPy -->
            <div class="hub-card">
                <div class="hub-icon data"></div>
                <h3>Pandas & NumPy</h3>
                <p>Manipulação de DataFrames, cálculos vetoriais e análise estatística.</p>
                <div class="hub-actions">
                    <button class="btn-access" data-navigate="pandas">
                        ACESSAR AULA ➜
                    </button>
                    <a href="paginas/pandas-numpy.html" style="display:none;"></a>
                </div>
            </div>

            <!-- Aula 3: Data Wrangling -->
            <div class="hub-card">
                <div class="hub-icon cleaning"></div>
                <h3>Data Wrangling</h3>
                <p>Limpeza, transformação e preparação de dados para análise.</p>
                <div class="hub-actions">
                    <button class="btn-access" data-navigate="wrangling">
                        ACESSAR AULA ➜
                    </button>
                    <a href="paginas/data-wrangling.html" style="display:none;"></a>
                </div>
            </div>

            <!-- Aula 4: Visualização Python -->
            <div class="hub-card">
                <div class="hub-icon chart"></div>
                <h3>Matplotlib & Seaborn</h3>
                <p>Criação de gráficos estáticos e estatísticos com código.</p>
                <div class="hub-actions">
                    <button class="btn-access" data-navigate="visualizacao_python">
                        ACESSAR AULA ➜
                    </button>
                    <a href="paginas/matplotlib-seaborn.html" style="display:none;"></a>
                </div>
            </div>
        </div>

        <div class="module-navigation" style="margin-top: 3rem;">
            <button class="btn btn-secondary" data-navigate="visualizacao">Voltar: Visualização</button>
            <button class="btn btn-primary" data-navigate="portfolio">Próximo: Portfólio</button>
        </div>
    `;

    // Handler para os botões de acesso
    content.querySelectorAll('.btn-access').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const navMap = {
                'python_basico': 'paginas/python-basico.html',
                'pandas': 'paginas/pandas-numpy.html',
                'wrangling': 'paginas/data-wrangling.html',
                'visualizacao_python': 'paginas/matplotlib-seaborn.html'
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
