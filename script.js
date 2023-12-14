// script.js

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Assume a successful login redirects to the dashboard
    if (isValidUser(username, password)) {
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

function isValidUser(username, password) {
    // Add your logic to check the credentials here
    // For simplicity, let's assume a hardcoded username and password
    return username === 'Farhan' && password === '123';
}

function togglePasswordVisibility() {
    var passwordField = document.getElementById('password');
    var toggleButton = document.querySelector('.toggle-password');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleButton.textContent = '👁️';
    } else {
        passwordField.type = 'password';
        toggleButton.textContent = '👁️';
    }
}
