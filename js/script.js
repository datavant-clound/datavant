document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Aqui você pode adicionar a lógica para verificar as credenciais e fazer o login
  
    console.log("Usuário: " + username);
    console.log("Senha: " + password);
  });
  