// InfoPlex-user.js - User Management

const currentUser = sessionStorage.getItem('infoplex_active_user');
if (!currentUser) {
    sessionStorage.setItem('infoplex_active_user', 'GUEST');
    document.getElementById('userName').innerText = 'GUEST';
} else {
    document.getElementById('userName').innerText = currentUser.toUpperCase();
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        sessionStorage.removeItem('infoplex_active_user');
        alert('✅ Logged out successfully');
        location.reload();
    }
}