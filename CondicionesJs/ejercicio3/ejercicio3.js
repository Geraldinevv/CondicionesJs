document.getElementById('loginButton').addEventListener('click', function() {
    const uno = document.getElementById('uno').value;
    const dos = document.getElementById('dos').value;
    const tres = document.getElementById('tres').value;

    const password = uno + dos + tres;

    if (password === '911') {
        document.getElementById('result').textContent = 'Password 1 correcto';
    } else if (password === '714') {
        document.getElementById('result').textContent = 'Password 2 correcto';
    } else {
        document.getElementById('result').textContent = 'Password incorrecto';
    }
});