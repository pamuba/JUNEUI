var events = require('events')
var fs = require('fs')

var event = new events.EventEmitter();
event.on('Run', ()=>{
    console.log("Run Event Invoked");
});
event.emit("Run");

process.on('exit', (code)=>{
    console.log("Process Ending with Exit Code:"+code)
})

process.on('uncaughtException', (err, source)=>{
    console.log(`Caught exception:${err.message} ${source}\n`)
})

// const data = fs.readFileSync("dataaa.txt", "utf-8")
// add();


process.on('unhandledRejection', (err, source)=>{
    console.log(`Unhandled Rejection:${err.message} ${source}\n`)
})

new Promise((resolve, reject)=> {
    setTimeout(()=> reject('woops'), 2000)
})
// .then()
// .catch(err=>console.log(err.message))
