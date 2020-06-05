beranda = {
 template: "#beranda",
 data(){
  return {
   total: 0,
   data: []
  }
 },
 methods: {
  hitung_total(){
   db.data.toArray(data => {
    total = 0
    for (x of data){
     total += Number(x.jumlah)
    }
    this.total = total
   })
  },
  tampil_data(){
   db.data.reverse().toArray(data => this.data = data)
  },
  hapus(y){
   x = this
   tanya = confirm("Hapus kah?")
   if (tanya){
    db.data.where({
     id: Number(y)
    }).delete().then(() => {
     x.tampil_data()
     x.hitung_total()
    })
   }
  }
 },
 mounted(){
  this.hitung_total()
  this.tampil_data()
 },
 filters: {
  rupiah(x){
   return Number(x).toLocaleString("id")
  }
 }
}