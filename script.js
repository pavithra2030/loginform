document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerform");
  const loginForm = document.getElementById("loginform");

  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const newUsername = document.getElementById("newUsername").value;
      const newPassword = document.getElementById("newPassword").value;

      
      localStorage.setItem("registeredUsername", newUsername);
      localStorage.setItem("registeredPassword", newPassword);

      alert("register successfully")

     
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      
      const registeredUsername = localStorage.getItem("registeredUsername");
      const registeredPassword = localStorage.getItem("registeredPassword");

      if (username === registeredUsername && password === registeredPassword) {
        window.location.href = "helloworld.html";
      } else {
        alert("Invalid login credentials. Please try again.");
      }
    });
  }
});
