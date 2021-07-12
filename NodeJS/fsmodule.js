// var fs = require('fs')


// fs.readFile('data.txt', 'utf-8', function(err, data){
//     // console.log(data);
//     fs.writeFile('write.txt', data);
// });

// console.log('=======================================')

// var readMe = fs.readFileSync('data.txt', 'utf-8')
// // console.log(readMe)

// fs.writeFileSync('writeData.txt', readMe);


var fs = require('fs');

// fs.readFile('data.txt', 'utf-8', function(err, data){
//     if(err){
//         console.log(err.message)
//     }
//     else
//     {
//         console.log(data);
//         fs.writeFile('data1.txt', data, (err)=>{
//             if(err){
//                 console.log(err.message)
//             }
//             else
//                 console.log("Data written succesfully")
//         })
//     }
// })

// let data = "Some dummy data"

// fs.writeFile('data2.txt', data, {encoding:"utf-8", flag:"w"}, (err)=>{
//     if(err)
//     {
//         console.log(err.message)
//     }
//     else
//     {
//         console.log("Written Successfully");
//         console.log(fs.readFileSync('data2.txt', "utf-8"))
//     }
// })


///appending////////////////////

// let content = "\nHello World!!!"
// fs.writeFile('data2.txt', content, {flag:'a'}, (err)=>{
//     if(err)
//         console.log(err.message)
// })


////////////////////////////////////////////////////////

// fs.readFile('data.txt', 'utf-8',function(err, data){
//     console.log(data)
// })

//////rename a file///////////////////////////
// fs.rename('data2.txt','new.txt', function(err){
//     if(err){}
//     else{}
// })

///////////////delete files/////////////////////
// fs.unlink('new.txt', (err)=>{
//     if(err){}
//     else{}
// })

/////////copy a file////////////////////

// var source = "data.txt"
// var destination = "copy.txt"

// fs.copyFile(source, destination, (err)=>{
//     if(err){}
//     else{}
// })

/////////copy a folder/////////////////////////
// var path = require('path')

// var source = "folderA"
// var destination = "folderB"

// function copyFolder(from, to){
//     fs.mkdirSync(to);
//     fs.readdirSync(from).forEach(file=>{
//         fs.copyFileSync(path.join(from,file),path.join(to, file));
//     })

// }
// copyFolder(source, destination)

///////////////truncate a file///////////////////////////////
// fs.truncate('data1.txt', 4, (err)=>{
//     if(err){}
// })

//////////////delete a folder/////////////
fs.rmdir('folderA', {recursive:true}, (err)=>{
    if(err){
        console.log(err.message)
    }
})