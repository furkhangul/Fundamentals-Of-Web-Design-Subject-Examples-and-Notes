/*
EJS, Express.js ve Node.js içerisinde sıkça kullanılan bir şablon motorudur.
Yani HTML dosyalarının içerisine JS gömmeyi sağlar.
<% %> ifadesi ile HTML içerisine JS kodu yazabilmekteyiz
Dinamik sayfa oluşturmamızı sağlar.
res.render() ile veriyi HTML'e yerleştirir.


indirmek için zaten kurulu express üzerine bash terminali üzerinden:
npm install ejs
komutunu girip indirme işlemini sağlayabilmekteyiz.

ardından express kütüphanesine ejs yi tanıtmak için:
app.set("view engine", "ejs"); 
komutuna ihtiyaç duyarız.
*/

const express = require("express");
const app = express();

app.set("view engine","ejs")
//Bu işlemleri gerçekleştirdikten sonra views adından özel bir klasör açıp html dosyalarının uzantsını .ejs yapıp klasöre atıyoruz.

//Ve express'te kullandığımız send() methodu yerine render() methodu kullanılacak.
app.use("/urun/:id", function(req,res){
    res.render("urunler-1")

})
app.use("/urun", function(req,res){
    res.render("urunler")
});
app.use("/uye", function(req,res){
    res.render("uyeler")
});

app.use("/urun", function(req,res){
    res.render("urunler")
});

app.use("/", function(req,res){
    res.render("index")
});

app.listen(3000, ()=>{
    console.log("3000 Portu Dinlenmektedir !")
})
