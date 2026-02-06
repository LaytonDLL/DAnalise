// ===== PROGRESS SYSTEM =====
window.initModuleProgress = function(moduleId) {
    // Find all module cards in the current view
    const cards = document.querySelectorAll(`#${moduleId}-content .hub-card`);
    
    cards.forEach((card, index) => {
        // Create unique ID for this lesson based on module and index
        const lessonId = `${moduleId}-lesson-${index}`;
        
        // Create Toggle Button
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'progress-toggle';
        toggleBtn.innerHTML = `
            <div class="checkbox-circle"></div>
            <span>Marcar como Visto</span>
        `;
        
        // Check saved state
        const isDone = localStorage.getItem(lessonId) === 'true';
        if (isDone) {
            toggleBtn.classList.add('completed');
            toggleBtn.querySelector('.checkbox-circle').innerHTML = '✓';
            toggleBtn.querySelector('span').textContent = 'Concluído';
        }

        // Add Click Listener
        toggleBtn.addEventListener('click', () => {
            const currentState = toggleBtn.classList.contains('completed');
            const newState = !currentState;
            
            if (newState) {
                toggleBtn.classList.add('completed');
                toggleBtn.querySelector('.checkbox-circle').innerHTML = '✓';
                toggleBtn.querySelector('span').textContent = 'Concluído';
                localStorage.setItem(lessonId, 'true');
            } else {
                toggleBtn.classList.remove('completed');
                toggleBtn.querySelector('.checkbox-circle').innerHTML = '';
                toggleBtn.querySelector('span').textContent = 'Marcar como Visto';
                localStorage.setItem(lessonId, 'false');
            }
            
            // Trigger animation
            toggleBtn.animate([
                { transform: 'scale(1)' },
                { transform: 'scale(0.95)' },
                { transform: 'scale(1)' }
            ], {
                duration: 200
            });
        });

        // Append to card actions
        const actionsDiv = card.querySelector('.hub-actions');
        if (actionsDiv) {
            actionsDiv.appendChild(toggleBtn);
        }
    });
};

/* ===== CSS INJECTION FOR PROGRESS BUTTONS ===== */
const style = document.createElement('style');
style.textContent = `
    .progress-toggle {
        background: transparent;
        border: 1px solid var(--text-muted);
        color: var(--text-muted);
        padding: 0.5rem 1rem;
        border-radius: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.8rem;
        transition: all 0.3s ease;
        margin-top: 1rem;
    }
    
    .progress-toggle:hover {
        background: rgba(255,255,255,0.05);
        border-color: var(--text-secondary);
        color: var(--text-secondary);
    }
    
    .progress-toggle.completed {
        background: rgba(39, 174, 96, 0.2);
        border-color: #27ae60;
        color: #2ecc71;
    }
    
    .checkbox-circle {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 1px solid currentColor;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        line-height: 1;
    }
`;
document.head.appendChild(style);

// ===== NAVEGAÇÃO E GERENCIAMENTO DE MÓDULOS =====

document.addEventListener('DOMContentLoaded', function () {
    initNavigation();
    // initThemeSwitcher(); // Old theme switcher
    initScrollEffects();
    initBackToTop();
    initMobileSidebar();
    checkInitialHash();
});

// ===== THEME SWITCHER =====
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    const themeIcon = document.getElementById('theme-icon');
    const themeBtn = document.getElementById('theme-toggle');

    // Animação de rotação no botão
    if (themeBtn) themeBtn.classList.add('rotating');

    setTimeout(() => {
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Troca de Ícone
        if (themeIcon) {
            themeIcon.src = newTheme === 'dark' ? 'assets/moon-white.png' : 'assets/moon-black.png';
        }

        // Remove classe de animação
        setTimeout(() => {
            if (themeBtn) themeBtn.classList.remove('rotating');
        }, 300);

    }, 150);
}

// Inicializar Theme Switcher
const toggleBtn = document.getElementById('theme-toggle');
if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleTheme);
}

// Setar estado inicial
const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.setAttribute('data-theme', savedTheme);
const initialIcon = document.getElementById('theme-icon');
if (initialIcon) {
    initialIcon.src = savedTheme === 'dark' ? 'assets/moon-white.png' : 'assets/moon-black.png';
}

// Estado atual
let currentModule = 'home';

// Inicializa navegação
// Inicializa navegação com Event Delegation
function initNavigation() {
    // Remove listeners antigos se houver (embora com delegation no document não seja estritamente necessário se rodar uma vez)
    // Apenas garante que clicques em qualquer elemento com data-navigate funcionem
    document.addEventListener('click', (e) => {
        // Encontra o elemento com data-navigate mais próximo
        const targetEl = e.target.closest('[data-navigate]');

        // Se encontrou e não é um link com href real que deve navegar normalmente (opcional, aqui assumimos SPA)
        if (targetEl) {
            // Check if it's the progress button, if so, ignore navigation
            if (targetEl.classList.contains('progress-toggle')) return;
            
            e.preventDefault();
            const target = targetEl.getAttribute('data-navigate');
            if (target) navigateTo(target);
        }
    });

    // Roadmap items também usam data-navigate agora, então o delegation acima cobre
}

// Navega para um módulo/página
function navigateTo(target, instant = false) {
    const currentSection = document.querySelector('.page-section.active');
    const targetSection = document.getElementById(target);

    // Se já estiver na página, não faz nada
    if (currentModule === target) return;

    // Função para ativar a nova seção
    const activateNewSection = () => {
        // Remove active de todas e força display none
        document.querySelectorAll('.page-section').forEach(section => {
            section.classList.remove('active');
            section.classList.remove('exiting');
            // Garante que o estilo inline também seja limpo
            section.style.display = '';
            section.style.opacity = '';
        });

        // Scroll instantâneo para o topo (sem smooth)
        window.scrollTo(0, 0);

        // Ativa a nova seção (que terá animação de entrada via CSS)
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Atualiza nav items ativos
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            const itemTarget = item.getAttribute('data-navigate');
            if (itemTarget === target) {
                item.classList.add('active');
            }
        });

        // Atualiza estado
        currentModule = target;

        // Salva no histórico
        if (history.state?.module !== target) {
            history.pushState({ module: target }, '', '#' + target);
        }

        // Fecha sidebar mobile se aberta
        closeMobileSidebar();
    };

    if (currentSection && !instant) {
        // Adiciona classe de saída
        currentSection.classList.add('exiting');

        // Aguarda a animação de saída terminar (300ms definido no CSS)
        setTimeout(() => {
            activateNewSection();
        }, 300);
    } else {
        // Se não houver seção ativa (primeiro load) ou for instantaneo, vai direto
        activateNewSection();
    }
}

// Navegação pelo histórico do navegador
window.addEventListener('popstate', (e) => {
    if (e.state && e.state.module) {
        navigateTo(e.state.module);
    } else {
        navigateTo('home');
    }
});

// Verifica hash na URL ao carregar
function checkInitialHash() {
    const hash = window.location.hash.substring(1);
    if (hash && hash !== 'home') {
        // Usa navegação instantânea SEM delay para evitar glitch com Home
        // Se o elemento alvo já existe no DOM, navega imediatamente
        const target = document.getElementById(hash);
        if (target) {
            // Esconde home manualmente antes mesmo do navigateTo se possível/necessário
            // Mas o navigateTo com instant=true já deve limpar tudo
            navigateTo(hash, true);
        } else {
            // Em caso estranho de não carregar, tenta pequeno delay
            setTimeout(() => navigateTo(hash, true), 10);
        }
    }
}

// Efeitos de scroll
function initScrollEffects() {
    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
}

// Botão voltar ao topo
function initBackToTop() {
    const backBtn = document.getElementById('backToTop');
    if (!backBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backBtn.classList.add('visible');
        } else {
            backBtn.classList.remove('visible');
        }
    });

    backBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Mobile Sidebar
function initMobileSidebar() {
    const toggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('mobileOverlay');

    if (toggle) {
        toggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            if (overlay) overlay.classList.toggle('visible');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', closeMobileSidebar);
    }
}

function closeMobileSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('mobileOverlay');

    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('visible');
}

// Função para copiar código
function copyCode(button) {
    const codeBlock = button.closest('.code-block');
    const code = codeBlock.querySelector('code').textContent;

    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.textContent;
        button.textContent = '✓ Copiado!';
        button.style.color = '#27ae60';
        setTimeout(() => {
            button.textContent = originalText;
            button.style.color = '';
        }, 2000);
    });
}

// Animação de entrada dos elementos
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.lesson-card, .roadmap-item, .skill-card').forEach(el => {
        observer.observe(el);
    });
}

// Inicializa ao carregar
window.addEventListener('load', () => {
    animateOnScroll();
    injectTransitionOverlay();
});

function injectTransitionOverlay() {
    if (!document.querySelector('.page-transition-overlay')) {
        const overlay = document.createElement('div');
        overlay.classList.add('page-transition-overlay');
        document.body.appendChild(overlay);
    }
}

// Global Transition Function for external pages
window.transitionToUrl = function (url) {
    const overlay = document.querySelector('.page-transition-overlay');

    // Ensure overlay exists
    if (!overlay) {
        injectTransitionOverlay();
        // Small delay to ensure DOM update
        setTimeout(() => window.transitionToUrl(url), 10);
        return;
    }

    // Activate Overlay
    overlay.classList.add('active');

    // Wait for animation then redirect
    setTimeout(() => {
        window.location.href = url;
    }, 800); // Matches CSS transition duration (0.8s)
};

// Expor navigateTo globalmente para os módulos
window.navigateTo = navigateTo;

// Fix for Back Button (bfcache)
window.addEventListener('pageshow', (event) => {
    // Force a complete state reset
    resetPageState();
});

function resetPageState() {
    // 1. Hide overlay immediately
    const overlay = document.querySelector('.page-transition-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        // Force style reset to ensure it's gone
        overlay.style.opacity = '0';
        setTimeout(() => overlay.style.opacity = '', 100);
    }

    // 2. Ensure current section is visible
    const activeSection = document.querySelector('.page-section.active');
    if (activeSection) {
        // Force visibility properties
        activeSection.style.display = 'block';
        activeSection.style.opacity = '1';
        activeSection.classList.remove('exiting');

        // Re-trigger animateOnScroll after a slight delay
        setTimeout(() => animateOnScroll(), 100);
    } else {
        // Fallback: reload home IF there is no hash to guide us
        // If there is a hash, checkInitialHash will handle it
        if (!window.location.hash) {
            navigateTo('home');
        } else {
            // Ensure the hash navigation is triggered if it wasn't already
            const hash = window.location.hash.substring(1);
            navigateTo(hash, true);
        }
    }
}
