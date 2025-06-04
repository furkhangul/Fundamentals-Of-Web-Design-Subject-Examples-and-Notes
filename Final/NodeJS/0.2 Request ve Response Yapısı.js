/*
Request:
Kullanıcının (tarayıcı, telefon, uygulama gibi ) araçlarla sunucuya gönderdiği mesajdır.
Mesela instagram.com yazdığımız zaman sunucuya "Merhaba, beni Instagram ana sayfasına götürür müsün? " şeklinde 
mesaj göndermiş oluruz ve bu mesaj bir HTTP request'tir.

Response:
Sunucunun gelen isteğe verdiği yanıttır.
Mesela sunucu da der ki: "Buyur kardeşim HTML sayfan içinde görseller, metinler, her şey var."

Bu iki kavram server'a ihtiyaç duyar.
Node kurulumu ile bize zaten birkaç modül gelmektedir 
Mesela : http , os, fs
*/

/*Bu kodda http modülünü çağırıyoruz. require paramtresi kütüphane çağırmak için kullanılır.*/

var http = require("http")
var server = http.createServer((req,res) => {
    console.log("İstek geldi",req.url);

    res.write("<h1>Furkan Gul</h1>");
    res.end();
})

server.listen(3000,()=>{
    console.log("Server 3000 portta çalışıyor.")
})

/*Yeni bir kodda deneyerek farklı site içi bölümlere farklı adlar verelim*/
var http = require("http");
var server = http.createServer((req,res) => {
    console.log("İstek Geldi", req.url);
    
    if(req.url == "/"){
        res.write("<h1>Ana Sayfa</h1>");
    }
    else if(req.url == "/uye"){
        res.write("<h1>Uyeler</h1>");
    }
    else if(req.url == "/urunler"){
        res.write("<h1>Urunler</h1>");
    }
    else{
        res.write("<h1><center>404 Found Error ! </center></h1>");
    }
    res.end();
});

server.listen(3000, () =>{
    console.log("3000 Portu dinleniyor !");
});
