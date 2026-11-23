
const produk = [
  { nama: "Kopi Susu Gula Aren", harga: 25000 },
  { nama: "Keyboard Mechanical RGB", harga: 450000 },
  { nama: "Mousepad Gaming", harga: 75000 }
];


const kalimatPromosi = produk.map((item) => {
  
  const labelMewah = item.harga > 100000 ? " - Barang Mewah" : "";
  
  return `Beli ${item.nama} sekarang cuma Rp${item.harga.toLocaleString("id-ID")}${labelMewah}!`;
});


console.log(kalimatPromosi);