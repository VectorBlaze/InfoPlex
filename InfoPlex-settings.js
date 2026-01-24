// InfoPlex-settings.js - Settings Management

function toggleSettings() {
    const settings = document.getElementById('settingsPanel');
    settings.classList.toggle('active');
}

function toggleFluxMode() {
    isFluxMode = document.getElementById('fluxMode').checked;
    localStorage.setItem('infoplex_flux_mode', isFluxMode);
    
    if (isFluxMode) {
        alert('🔒 Flux Mode Activated - Browsing history will not be saved');
    } else {
        alert('✅ Flux Mode Deactivated - Browsing history will be saved');
    }
}

function loadFluxMode() {
    const savedFluxMode = localStorage.getItem('infoplex_flux_mode') === 'true';
    isFluxMode = savedFluxMode;
    document.getElementById('fluxMode').checked = savedFluxMode;
}