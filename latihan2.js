const siswa = {
    nama : "budi",
    kelas : "11 pplg",
    nilai : 90
};
const namaSiswa = siswa.nama;

const {nama, kelas, nilai} = siswa;

console.log(`siswa bernama ${nama} dari ${kelas} mendapatkan nilai ${nilai}.`);