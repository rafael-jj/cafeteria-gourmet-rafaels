
document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('emailInp').value;
        const password = document.getElementById('passwordInp').value;
        const firstName = document.getElementById('fnameInp').value;
        const lastName = document.getElementById('lnameInp').value;

        // Simulação de armazenamento local
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = storedUsers.find(u => u.email === email);

        if (existingUser) {
            alert('Este email já está cadastrado. Por favor, use outro.');
        } else {
            const newUser = { email, password, firstName, lastName };
            storedUsers.push(newUser);
            localStorage.setItem('users', JSON.stringify(storedUsers));

            // Limpar campos do formulário
            registerForm.reset();

            // Exibir mensagem de sucesso
            const successMessage = document.getElementById('successMessage');
            successMessage.style.display = 'block';

            // Redirecionar para a página de login após o cadastro
             window.location.href = 'index.html';
        }
    });
});
