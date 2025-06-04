//Routing Kavramı
const express = require("express");
const app = express();


/*
Burada id bilgisi girdik ve id değeri mesela furkan.com/member/5 şeklinde bir uzantım olursa 
ekrana id = {"5"} şeklinde bir uyarı verecek.
Bu detay sayfası kullanılırken kullanılan bir yöntemdir.
Kısacası hangi URL’ye girdiğine göre farklı cevaplar döner. Buna Routing (Yönlendirme) denir.

*/
app.use("/member/:id",function(req,res){
    res.send(req.params)
})
app.use("/member", function(req,res){
    res.send("Member")
})

app.use("/",function(req,res){
    res.send("Home Page")
})

app.listen(3000, ()=>{
    console.log("3000 Portu Dinleniyor ! ")
})
