function myFunction() {
    let passwordInput = document.getElementById('myPassword');
    let showPassword = document.getElementById('showPassword');
    let hiddenPassword = document.getElementById('hidePassword');

    if (passwordInput.type === 'password'){
        passwordInput.type = 'text';
        showPassword.style.display = 'block';
        hiddenPassword.style.display = 'none'
    }
    else{
        passwordInput.type = 'password';
        showPassword.style.display = 'none';
        hiddenPassword.style.display = 'block'
    }
}