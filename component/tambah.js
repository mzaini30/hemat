tambah = {
 template: "#tambah",
 data(){
  return {
   uraian: "",
   jumlah: null
  }
 },
 methods: {
  tambahkan(){
   x = this
   db.data.add({
    tanggal: sekarang(),
    uraian: this.uraian,
    jumlah: this.jumlah
   }).then(() => {
    x.uraian = ""
    x.jumlah = null
    x.$router.push("/")
   })
  }
 }
}