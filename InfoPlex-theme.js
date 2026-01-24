// InfoPlex-theme.js - Theme Management

function setTheme(theme) {
    const body = document.body;
    
    body.classList.remove('light-theme', 'cosmic-theme');
    
    if (theme === 'light') {
        body.classList.add('light-theme');
    } else if (theme === 'cosmic') {
        body.classList.add('cosmic-theme');
    }
    
    localStorage.setItem('infoplex_theme', theme);
    
    document.querySelectorAll('.theme-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`${theme}Theme`).classList.add('active');
}

function loadTheme() {
    const savedTheme = localStorage.getItem('infoplex_theme') || 'dark';
    setTheme(savedTheme);
}