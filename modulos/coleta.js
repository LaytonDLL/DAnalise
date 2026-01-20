// Módulo 2: Coleta - SQL e Banco de Dados (80 horas estimadas)
document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('coleta-content');
    if (!content) return;

    content.innerHTML = `
        <div class="module-intro">
            <h3>Selecione uma Aula para Iniciar</h3>
            <p>Domine a arte de extrair e modelar dados com SQL e bancos relacionais.</p>
        </div>

        <div class="hub-grid">
            <!-- Aula 1: SQL Básico e Avançado -->
            <div class="hub-card">
                <div class="hub-icon sql"></div> <!-- Orange/Red -->
                <h3>SQL Completo</h3>
                <p>Do SELECT básico até Window Functions e CTEs complexas.</p>
                <div class="hub-actions">
                    <button class="btn-access" data-navigate="sql_completo">
                        ACESSAR AULA ➜
                    </button>
                    <a href="paginas/sql-basico-avancado.html" style="display:none;"></a>
                </div>
            </div>

            <!-- Aula 2: Modelagem de Dados -->
            <div class="hub-card">
                <div class="hub-icon modeling"></div>
                <h3>Modelagem de Dados</h3>
                <p>Entidades, relacionamentos, normalização e Star Schema.</p>
                <div class="hub-actions">
                    <button class="btn-access" data-navigate="modelagem">
                        ACESSAR AULA ➜
                    </button>
                </div>
            </div>

            <!-- Aula 3: Queries Otimizadas -->
            <div class="hub-card">
                <div class="hub-icon performance"></div>
                <h3>Performance & Otimização</h3>
                <p>Como escrever queries rápidas para grandes volumes de dados.</p>
                <div class="hub-actions">
                    <button class="btn-access" data-navigate="otimizacao">
                        ACESSAR AULA ➜
                    </button>
                </div>
            </div>

            <!-- Aula 4: SQL + Python/BI -->
            <div class="hub-card">
                <div class="hub-icon integration"></div>
                <h3>Integração SQL</h3>
                <p>Conectando bancos de dados com Python, Power BI e outras ferramentas.</p>
                <div class="hub-actions">
                    <button class="btn-access" data-navigate="integracao">
                        ACESSAR AULA ➜
                    </button>
                </div>
            </div>
        </div>

        <div class="module-navigation" style="margin-top: 3rem;">
            <button class="btn btn-secondary" data-navigate="fundacao">Voltar: Fundação</button>
            <button class="btn btn-primary" data-navigate="visualizacao">Próximo: Visualização</button>
        </div>
    `;

    // Handler para os botões de acesso
    content.querySelectorAll('.btn-access').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const navMap = {
                'sql_completo': 'paginas/sql-basico-avancado.html',
                'modelagem': 'paginas/modelagem-banco-dados.html',
                'otimizacao': 'paginas/queries-otimizadas.html',
                'integracao': 'paginas/sql-python-bi.html'
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
