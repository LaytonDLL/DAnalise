// Módulo 3: Visualização - Power BI, Tableau e Storytelling (100 horas)
document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('visualizacao-content');
    if (!content) return;

    content.innerHTML = `
        <div class="module-intro">
            <h3>Selecione uma Aula para Iniciar</h3>
            <p>Crie visualizações impactantes e conte histórias que transformam dados em decisões.</p>
        </div>

        <div class="hub-grid">
            <!-- Aula 1: Power BI + DAX -->
            <div class="hub-card">
                <div class="hub-icon powerbi"></div> <!-- Power BI Gold -->
                <h3>Power BI & DAX</h3>
                <p>Do zero ao dashboard profissional. Cálculos avançados com DAX.</p>
                <div class="hub-actions">
                    <button class="btn-access" data-navigate="powerbi">
                        ACESSAR AULA ➜
                    </button>
                    <a href="paginas/powerbi-dax.html" style="display:none;"></a>
                </div>
            </div>

            <!-- Aula 2: Dashboards Profissionais -->
            <div class="hub-card">
                <div class="hub-icon design"></div>
                <h3>Design de Dashboards</h3>
                <p>Layouts, UX para dados e criação de interfaces intuitivas.</p>
                <div class="hub-actions">
                    <button class="btn-access" data-navigate="dashboards">
                        ACESSAR AULA ➜
                    </button>
                </div>
            </div>

            <!-- Aula 3: Data Storytelling -->
            <div class="hub-card">
                <div class="hub-icon story"></div>
                <h3>Data Storytelling</h3>
                <p>A arte de contar histórias com dados. Framework SCQA e apresentação executiva.</p>
                <div class="hub-actions">
                    <button class="btn-access" data-navigate="storytelling">
                        ACESSAR AULA ➜
                    </button>
                </div>
            </div>

            <!-- Aula 4: Tableau -->
            <div class="hub-card">
                <div class="hub-icon tableau"></div>
                <h3>Tableau (Alternativa)</h3>
                <p>Introdução ao Tableau para quem busca diferencial no mercado internacional.</p>
                <div class="hub-actions">
                    <button class="btn-access" data-navigate="tableau">
                        ACESSAR AULA ➜
                    </button>
                </div>
            </div>
        </div>

        <div class="module-navigation" style="margin-top: 3rem;">
            <button class="btn btn-secondary" data-navigate="coleta">Voltar: SQL</button>
            <button class="btn btn-primary" data-navigate="avancado">Próximo: Python</button>
        </div>
    `;

    // Handler para os botões de acesso
    content.querySelectorAll('.btn-access').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const navMap = {
                'powerbi': 'paginas/powerbi-dax.html',
                'dashboards': 'paginas/dashboards-profissionais.html',
                'storytelling': 'paginas/data-storytelling.html',
                'tableau': 'paginas/tableau-alternativa.html'
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
