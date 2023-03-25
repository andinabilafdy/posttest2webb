let dataForm = JSON.parse(sessionStorage.getItem('dataForm')) || [];

// const tombol = document.getElementById("submit");
// tombol.onclick = submit;

function submitForm() {
   let username = document.getElementById("form_username").value;
   let nama = document.getElementById("form_nama").value;
   let email = document.getElementById("form_email").value;
   let password = document.getElementById("form_password").value;
   let nohp = document.getElementById("form_nohp").value;
   let nationality = document.getElementById("form_na").value;
   let radios = document.getElementsByName("gender");
   let gender = "";
  
   for (let i=0; i < radios.length; i++) {
      if (radios[i].checked) {
         gender = radios[i].value;
         break;
      }
   }

   let service = [];
   let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');

   for (let i=0; i < checkboxes.length; i++) {
      service.push(checkboxes[i].value);
   }

   dataForm.push({
      username: username,
      nama: nama,
      email: email,
      password: password,
      nohp: nohp,
      nationality: nationality,
      service: service,
      gender: gender
   });
   alert("Berhasil Daftar Menjadi Member");
   sessionStorage.setItem('dataForm', JSON.stringify(dataForm));
   window.location.href = "memberaccount.html"
}

document.getElementById('dataa').addEventListener('submit', function(event) {
   event.preventDefault();
   submitForm();
});

