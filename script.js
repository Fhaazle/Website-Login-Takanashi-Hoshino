const validUsername = "admin";
const validPassword = "1234";

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === validUsername && password === validPassword) {
    Swal.fire({
      title: "Login Berhasil Sensei!",
      text: "Sensei berhasil login.",
      imageUrl: "assets/berhasil.gif",
      imageWidth: 300,
      imageHeight: 300,
      timer: 4500,
      confirmButtonText: "Oke",
      backdrop: false,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then(() => {
      window.location.href = "sukses.html";
    });
  } else {
    Swal.fire({
      title: "Login Gagal Sensei!",
      text: "Username atau password salah Sensei.",
      imageUrl: "assets/gagal.gif",
      imageWidth: 300,
      imageHeight: 300,
      confirmButtonText: "Coba Lagi",
      backdrop: false,
      showClass: {
        popup: "animate__animated animate__shakeX",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  }
});

document.getElementById("showPassword").addEventListener("change", function () {
  const passwordField = document.getElementById("password");
  passwordField.type = this.checked ? "text" : "password";
});
