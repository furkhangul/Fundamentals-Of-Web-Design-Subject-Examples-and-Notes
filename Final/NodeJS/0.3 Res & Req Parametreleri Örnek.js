/* Dosyaları birbirine bağlama:
Dosyaları bağlamak için fs modülü kullanılır. */
var http = require("http");
var fs = require("fs");
var server = http.createServer((req,res) => {
    if(req.url == "/"){
        fs.readFile("index.html",(err,html) =>{
            res.write(html);
            res.end();
        });
    }
    else if(req.url == "/uyeler"){
        fs.readFile("uyeler.html", (err,html) =>{
            res.write(html)
            res.end();
        })
    }
    else{
        fs.readFile("hata.html",(err,html) =>{
        res.write(html)
        res.end();
    })
    }
});

server.listen(3000, ()=>{
    console.log("3000 Portu Dinleniyor !")
})
