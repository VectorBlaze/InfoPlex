// InfoPlex-homebutton.js - Home Button Function

function goHome() {
    document.getElementById('viewport').src = 'about:blank';
    document.getElementById('urlInput').value = '';
    document.getElementById('welcome').classList.remove('hidden');
}