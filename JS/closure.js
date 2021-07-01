function outer(a,b){
    var outerA = 22;

    return function inner(c){
        //capture
        console.log(outerA)
        console.log(a)
        console.log(b)
        function innermost(){
            console.log("Innermost:",outerA)
        }
        innermost();
    }
}

var r = outer(1,1)
setTimeout(
    ()=>{r()},  5000
)
