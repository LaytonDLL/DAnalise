// Verifica o tema salvo no localStorage ao carregar
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    // Inicializa o botão de tema
    const themeToggle = document.getElementById('subpage-theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleSubpageTheme);
    }
});

function toggleSubpageTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = document.getElementById('theme-icon-img');
    if (icon) {
        // Ajuste caminhos relativos pois subpáginas estão em /paginas/
        icon.src = theme === 'dark' ? '../assets/moon-white.png' : '../assets/moon-black.png';
    }
}
