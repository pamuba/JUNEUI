var counter = function(arr){
    return 'There are '+ arr.length +' elements';
}

var add = function(a,b){
    return `Sum is:${a+b}`
}

var IR = 9.78;

module.exports = {
    counter:counter,
    add:add,
    IR:IR
}



// module.exports.counter = counter
// module.exports.add = add
// module.exports.IR = IR



// //counter is made avilable outside the file
// module.exports = counter;



