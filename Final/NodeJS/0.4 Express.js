/*Express.JS
Express.js, Node.js üzerinde çalışan en popüler framework'tür.

Node ile keni başına sunucu kurmak olduça zor ve karmaşıktır. 

Geçen işlemlerimde yazdığım kodlarda görüldüğü gibi http.createServer, req.url, fs.readFile gibi bir sürü
işlemden geçmekteydi.

Express bu işleri basitleştirir.
Örneğin http.createServer() fonksiyonu yerine app.get("/" , ...) şeklinde yazarak server çıktısını anında alırız.
Mesela url analizini req.url şeklinde biz yaparken Express bu uygulamayı kendi gerçekleştirmektedir.
*/


/*Express'i kurabilmek için expressjs.com sitesine gidip indirme bölümünden:
npm install express --save 
kodunu kendi terminalimizde (git bash terminali tabiki) çalıştırıp indirme işlemimizi gerçekleştirebiliriz.

ayrıca gerekli yüklemeler: 
npm init --yes 
npm i install express@sürüm_no
*/


/*Örnek Kod*/
const express = require("express");
const app = express();

app.use("/member/furkan",function(req,res){
    res.send("Member Furkan")
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
