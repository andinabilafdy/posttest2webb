function memberakun(){
    let dataForm = JSON.parse(sessionStorage.getItem('dataForm'));
    // Ambil index terakhir
    let lastIndex = dataForm.length - 1;
    // Ambil data pada index terakhir
    let dataTerakhir = dataForm[lastIndex];

    document.getElementById('ak_username').textContent = dataTerakhir.username;
    document.getElementById('ak_nama').textContent = dataTerakhir.nama;
    document.getElementById('ak_email').textContent = dataTerakhir.email;
    document.getElementById('ak_nohp').textContent = dataTerakhir.nohp;
    document.getElementById('ak_na').textContent = dataTerakhir.nationality;
    document.getElementById('service').textContent = dataTerakhir.service.join(', ');
    document.getElementById('gender').textContent = dataTerakhir.gender;
};

memberakun();