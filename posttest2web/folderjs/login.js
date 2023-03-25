const login = document.getElementById("login");
const email = document.getElementById("email");
const password = document.getElementById("password");

login.addEventListener("submit", function (e){
    e.preventDefault();

    const loc_email = localStorage.getItem("Email", email);
    let loc_password = localStorage.getItem("Password", password);

    if(email.value == loc_email && password.value == loc_password){
        alert("Berhasil Masuk");
        window.location.href = "home.html";
    }else{
        alert("Gagal masuk");
    }
})