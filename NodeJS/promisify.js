// const fs = require('fs')
// const util = require('util')
// const read = util.promisify(fs.readFile)

// var run = async() => {
    //Promise
    // read('data1.txt',"utf-8")
    //     .then(data => {
    //         console.log(data)
    //     })
    //     .catch(err=>{
    //         console.log(err.message)
    //     })

    //async/await
//     try{
//         const data = await read('data1.txt')
//         console.log(data.toString())
//     }
//     catch(err){

//     }
// }
// run();

const fs = require('fs')
const util = require('util')
const read = util.promisify(fs.readFile)

// Promise.all([
//     read("copy.txt"),
//     read("data.txt"),
//     read("data1.txt")
// ])
// .then(data => {
//     const [data1, data2, data3 ] = data
//     console.log(data1.toString())
//     console.log(data2.toString())
//     console.log(data3.toString())
// })

//async await format
var run = async () => {
const [data1, data2, data3] = await Promise.all([
    read("copy.txt"),
    read("data.txt"),
    read("data1.txt")
]);
    console.log(data1.toString())
    console.log(data2.toString())
    console.log(data3.toString())
}
run();