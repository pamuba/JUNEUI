// function* generator(){
//     yield 1;
//     yield 2;
//     yield 3;
// }

// let gen = generator();


// console.log(gen.next().value); //1
// console.log(generator().next().value); //1
// console.log(generator().next().value); //1
// setTimeout(
//     ()=>{}, 2000
// )

// console.log(gen.next().value);

// console.log(gen.next().value);


function* generator(){
    let index = 0

    while(true){
        yield index++
    }
}

let gen = generator();


console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);