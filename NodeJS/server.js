const fs = require('fs');
const http = require('http');
const path = require('path');

// var server = http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type':'text/text'});
//     res.end('<h1>Hello World</h1>')
// }).listen(3000);
// console.log("Server Running");

var server = http.createServer(function(req, res){
    console.log(req.url)
    if(req.url === "/"){
        fs.readFile("./public/index.html", "utf-8", function(err, html){
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(html)
        })
    }
    else if(req.url.match("\.css$")){
        var cssPath = path.join(__dirname,'public', req.url);
        var fileStream = fs.createReadStream(cssPath, "utf-8");
        res.writeHead(200, {'Content-Type':'text/css'});
        fileStream.pipe(res)
    }
    else{
        res.writeHead(404, {'Content-Type':'text/text'});
        res.end("No Page Found")
    }
}).listen(3000)

