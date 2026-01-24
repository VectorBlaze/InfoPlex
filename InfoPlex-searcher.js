// InfoPlex-searcher.js - Search Functionality

function handleSearch(e) {
    if (e.key === 'Enter') {
        const val = document.getElementById('urlInput').value.trim();
        
        if (!val) return;

        // Technox Security Check
        const badWord = checkForBadWords(val);
        if (badWord) {
            triggerTechnox(badWord);
            return;
        }

        hideWelcome();
        showLoading();

        const frame = document.getElementById('viewport');
        let targetUrl;
        
        if (val.includes('.') && !val.includes(' ')) {
            targetUrl = val.startsWith('http') ? val : `https://${val}`;
        } else {
            targetUrl = `https://www.google.com/search?igu=1&q=${encodeURIComponent(val)}`;
        }
        
        frame.src = targetUrl;
        
        // Add to history
        addToHistory(val, targetUrl);
        
        setTimeout(hideLoading, 1500);
    }
}

function quickSearch(query) {
    document.getElementById('urlInput').value = query;
    hideWelcome();
    showLoading();
    
    const targetUrl = `https://www.google.com/search?igu=1&q=${encodeURIComponent(query)}`;
    document.getElementById('viewport').src = targetUrl;
    
    // Add to history
    addToHistory(query, targetUrl);
    
    setTimeout(hideLoading, 1500);
}

function hideWelcome() {
    document.getElementById('welcome').classList.add('hidden');
}

function showLoading() {
    document.getElementById('loadingBar').classList.add('active');
}

function hideLoading() {
    document.getElementById('loadingBar').classList.remove('active');
}