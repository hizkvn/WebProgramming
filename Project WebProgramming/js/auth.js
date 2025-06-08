document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "index.html";
    } else {
      alert("Invalid credentials");
    }
  });
