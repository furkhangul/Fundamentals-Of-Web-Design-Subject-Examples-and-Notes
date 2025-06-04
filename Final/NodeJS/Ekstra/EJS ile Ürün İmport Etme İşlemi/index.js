
const express = require("express");
const app = express();

app.set("view engine","ejs")


//Ürün ekleyerek bu işmelere devam edecek olursak:

const data = [
    {id:"1", name:"Oyuncak", price:"1100"},
    {id:"2", name:"İçecek", price:"1200"},
    {id:"3", name:"Tahıl", price:"1300"},
    {id:"4", name:"Meyve", price:"1500"},
    {id:"5", name:"Sebze", price:"1620"},
    {id:"6", name:"Baharat", price:"1750"},
    {id:"7", name:"Kuruyemiş", price:"1520"}
];
app.use("/urun/:id", function(req,res){
    res.render("urunler-1", {
        liste:date
    })

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