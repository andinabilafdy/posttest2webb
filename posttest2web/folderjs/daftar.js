const tombol = document.getElementById("daftar");
tombol.onclick = daftar;

function daftar(e) {
   e.preventDefault();

   const nama = document.getElementById("daf_nama").value;
   const email = document.getElementById("daf_email").value;
   const pass = document.getElementById("daf_password").value;
  
   localStorage.setItem("Nama", nama);
   localStorage.setItem("Email", email);
   localStorage.setItem("Password", pass);
   
   alert("Berhasil Daftar");
}