    function myFunction(alert)
    function alert(message?: any): void;










// Redirect //

       const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      alert("Login Successful!");

      // Redirect after 1 second
      setTimeout(() => {
        window.location.href = "/page/login.html ";
      }, 1000);
    });