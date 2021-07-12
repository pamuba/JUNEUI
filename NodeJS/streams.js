// var fs = require('fs')

// var myReadStream = fs.createReadStream(__dirname+'/data.txt', 'utf-8');
// var myWriteStream = fs.createWriteStream(__dirname+'/data22.txt', 'utf-8')
// //whenever it receives data
// myReadStream.on('data', function(chunk){
//     console.log('++++++++++++++++++++++New Chunk++++++++++++++++++++++')
//     // console.log(chunk)
//     myWriteStream.write(chunk);
// })

/////////////////////pipe////////////////////////////////////
// var fs = require('fs')

// var myReadStream = fs.createReadStream(__dirname+'/data.txt', 'utf-8');
// var myWriteStream = fs.createWriteStream(__dirname+'/data23.txt', 'utf-8')

// myReadStream.pipe(myWriteStream);

////////////////////host the data on a server///////////////////
var fs = require('fs')
var http = require('http')

var server = http.createServer(function(req, res){
    console.log('Req was made from :', req.url);
    res.writeHead(200, {'Content-Type':'text/plain'})
    var myReadStream = fs.createReadStream(__dirname+'/data.txt', 'utf-8');
    myReadStream.pipe(res)
})
server.listen(3000)
console.log("Server listening @3000")