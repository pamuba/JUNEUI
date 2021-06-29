// function Parent(){
//     p = 44;
//     function Child(){
//         var q = 55;
//     }
//     Child();
// }
// Parent();

// console.log(p)

//Scoping
// function run(){
//     var foo = "Foo";
//     let bar = "Bar";

//     console.log(foo, bar)


//     {
//         var moo = "Moo";
//         let baz = "Bazz"
//     }


//     console.log(moo)
//     console.log(baz)
// }

// run();


// var funcs = []
// for(let i=0; i<3;i++){
//     funcs[i] = function(){
//         console.log("My Value:"+i)
//     }
// }

// for(var a=0;a<3;a++){
//     funcs[a]();
// };

//Hoisting 
// function run(){
//     console.log(foo);//undefined
//     var foo = "Foo";
//     console.log(foo);
// }

// run()

//Redecleared
// let a = 11
// let a = 22;

// const a = {a:12};
// a = {b:22};

/// rest of the params and spred parameters
// arguments vs parameters

// function sum(...args){
//     let sum = 0;
//     for(let val of args)
//     {
//         sum += val;
//     }
//     console.log("SUM:",sum)
//     console.log(args instanceof Array)
// }

// sum(11)


// function sum(){

//     let sum = 0;
//     for(let val of arguments)
//     {
//         sum += val;
//     }
//     console.log("SUM:",sum)
//     console.log(arguments instanceof Array)
// }

// sum(1,2,3,4,5)

// let arr = [33,55,11]
// let arr1 = [00,1,3]

// console.log(Math.max(...arr, ...arr1))
// a=33;
// b=55;

// [a,b] = [b,a]

// console.log(a,' ',b)

