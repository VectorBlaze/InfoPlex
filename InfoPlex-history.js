// InfoPlex-history.js - History Management

let browsingHistory = [];
let isFluxMode = false;

function loadHistory() {
    const savedHistory = localStorage.getItem('infoplex_history');
    if (savedHistory) {
        browsingHistory = JSON.parse(savedHistory);
        renderHistory();
    }
}

function saveHistory() {
    if (!isFluxMode) {
        localStorage.setItem('infoplex_history', JSON.stringify(browsingHistory));
    }
}

function addToHistory(query, url) {
    if (isFluxMode) return;
    
    const historyItem = {
        query: query,
        url: url,
        timestamp: new Date().toISOString(),
        id: Date.now()
    };
    
    browsingHistory.unshift(historyItem);
    
    if (browsingHistory.length > 100) {
        browsingHistory = browsingHistory.slice(0, 100);
    }
    
    saveHistory();
    renderHistory();
}

function renderHistory() {
    const historyList = document.getElementById('historyList');
    
    if (browsingHistory.length === 0) {
        historyList.innerHTML = '<p style="color: var(--text-secondary); text-align: center; margin-top: 20px;">No browsing history</p>';
        return;
    }
    
    historyList.innerHTML = browsingHistory.map(item => `
        <div class="history-item" onclick="loadFromHistory('${item.url.replace(/'/g, "\\'")}')">
            <div class="history-text">${escapeHtml(item.query)}</div>
            <div style="display: flex; align-items: center; gap: 10px;">
                <span class="history-time">${formatTime(item.timestamp)}</span>
                <button class="delete-history-item" onclick="event.stopPropagation(); deleteHistoryItem(${item.id})">🗑️</button>
            </div>
        </div>
    `).join('');
}

function formatTime(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return date.toLocaleDateString();
}

function loadFromHistory(url) {
    hideWelcome();
    showLoading();
    document.getElementById('viewport').src = url;
    setTimeout(hideLoading, 1500);
    toggleSidebar();
}

function deleteHistoryItem(id) {
    browsingHistory = browsingHistory.filter(item => item.id !== id);
    saveHistory();
    renderHistory();
}

function clearHistory() {
    if (confirm('Are you sure you want to clear all browsing history?')) {
        browsingHistory = [];
        localStorage.removeItem('infoplex_history');
        renderHistory();
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}