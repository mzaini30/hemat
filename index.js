db = new Dexie("database hemat")
db.version(1).stores({
 data: "++id, tanggal, uraian, jumlah"
})
sekarang = () => {
 tanggalan = new Date
 list_hari = ["Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
 list_bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
 return `${list_hari[tanggalan.getDay()]}, ${tanggalan.getDate()} ${list_bulan[tanggalan.getMonth()]} ${tanggalan.getFullYear()}`
}
app = new Vue({
 el: ".vue",
 router: new VueRouter({
  routes: [
   {
    path: "/",
    component: beranda
   },
   {
    path: "/tambah",
    component: tambah
   }
  ]
 })
})