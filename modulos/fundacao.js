// Módulo 1: Fundação - Excel e Estatística (80 horas)
document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('fundacao-content');
    if (!content) return;

    content.innerHTML = `
        <div class="module-intro">
            <h3>Selecione uma Aula para Iniciar</h3>
            <p>Escolha um dos topicos abaixo para acessar o conteudo detalhado.</p>
        </div>

        <div class="hub-grid">
            <!-- Aula 1: Excel -->
            <div class="hub-card">
                <div class="hub-icon excel"></div>
                <h3>Excel Completo</h3>
                <p>Do zero ao avancado: formulas, tabelas dinamicas e introducao a macros.</p>
                <div class="hub-actions">
                    <button class="btn-access" data-navigate="excel">
                        ACESSAR AULA ➜
                    </button>
                    <!-- Link oculto original para manter compatibilidade se necessario -->
                    <a href="paginas/excel-basico-avancado.html" style="display:none;"></a>
                </div>
            </div>

            <!-- Aula 2: Estatistica -->
            <div class="hub-card">
                <div class="hub-icon stats"></div>
                <h3>Estatistica</h3>
                <p>Descritiva, inferencial e analise de dados para tomada de decisao.</p>
                <div class="hub-actions">
                    <button class="btn-access" data-navigate="estatistica">
                        ACESSAR AULA ➜
                    </button>
                </div>
            </div>

            <!-- Aula 3: Matematica Financeira -->
            <div class="hub-card">
                <div class="hub-icon finance"></div>
                <h3>Matematica Financeira</h3>
                <p>Juros, investimentos e calculos essenciais para negocios.</p>
                <div class="hub-actions">
                    <button class="btn-access" data-navigate="financeira">
                        ACESSAR AULA ➜
                    </button>
                </div>
            </div>

            <!-- Aula 4: Pensamento Analitico -->
            <div class="hub-card">
                <div class="hub-icon logic"></div>
                <h3>Pensamento Analitico</h3>
                <p>Logica estruturada, metodologia CRISP-DM e resolucao de problemas.</p>
                <div class="hub-actions">
                    <button class="btn-access" data-navigate="analitico">
                        ACESSAR AULA ➜
                    </button>
                </div>
            </div>
        </div>

        <div class="module-navigation" style="margin-top: 3rem;">
            <button class="btn btn-secondary" data-navigate="home">Voltar ao Inicio</button>
        </div>
    `;

    // Handler para os botões de acesso
    content.querySelectorAll('.btn-access').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const navMap = {
                'excel': 'paginas/excel-basico-avancado.html',
                'estatistica': 'paginas/estatistica-descritiva.html',
                'financeira': 'paginas/matematica-financeira.html',
                'analitico': 'paginas/pensamento-analitico.html'
            };
            const targetKey = btn.getAttribute('data-navigate');
            if (navMap[targetKey]) {
                // Navegação real para a pagina HTML
                // Carregar no iframe ou redirecionar? O site parece SPA-ish mas com arquivos html separados.
                // Pelo teste anterior, parece que ele carrega HTMLs?
                // O script.js tem uma funcao navigateTo, mas para ancoras.
                // Vou assumir window.location por enquanto, ou melhor, carregar via fetch se for SPA.
                // Olhando o index.html, as paginas estao soltas.
                // O usuario reclamou de "subpaginas escondidas".
                // Navegação com transição suave
                window.transitionToUrl(navMap[targetKey]);
            }
        });
    });

    // Re-init navigation for new elements
    if (document.querySelectorAll) {
        document.querySelectorAll('#fundacao-content [data-navigate]:not(.btn-access)').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const target = btn.getAttribute('data-navigate');
                if (typeof navigateTo === 'function') navigateTo(target);
            });
        });
    }
    // Initialize Progress System for this module
    if (window.initModuleProgress) {
        window.initModuleProgress('fundacao');
    }
});
