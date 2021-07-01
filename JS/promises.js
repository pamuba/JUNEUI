//how to do async programming in js
//callback
//Promise a result in the future , not immediately

//promise(resolve(value) , reject(error))

//clg()

let promise = new Promise(function(resolve, reject){
    setTimeout(
        ()=>resolve("Successful"), 
        // ()=>reject(new Error("Failed")), 1000
    )
})

promise.then(
    result => console.log(result),
    // err => console.log(err.message)
).catch(
    err => console.log(err.message)
).finally(
    ()=> console.log("Always Runs")
)
