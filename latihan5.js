const tampilJudul = (keren) => {
  return 'Aplikasi Data Siswa';
}

const tampilKelas = (kelas) => {
  return 'Saya dari kelas ' + kelas;
}

const tambahAngka = (a, b) => {
  return a + b;
}

const cekPassword  = (pass) => {
  if (pass === '1234') {
    return 'Login Berhasil';
  } else {
    return 'Password Salah';
  }
}

const data = (pass) => {
  return `nis: 101, alamat: Cibinong`;
} ; //Keluarkan nis dan alamat menggunakan kurung kurawal { ... } lalu tampilkan dengan console.log(nis, alamat)



console.log(data('1234'));