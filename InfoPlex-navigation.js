// InfoPlex-navigation.js - Navigation Controls

function goBack() {
    try { 
        document.getElementById('viewport').contentWindow.history.back(); 
    } catch(e) {
        console.log('Cannot go back');
    }
}

function goForward() {
    try { 
        document.getElementById('viewport').contentWindow.history.forward(); 
    } catch(e) {
        console.log('Cannot go forward');
    }
}

function refresh() {
    showLoading();
    const frame = document.getElementById('viewport');
    frame.src = frame.src;
    setTimeout(hideLoading, 1500);
}