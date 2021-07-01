// //1.Call

// var pokemon = {
//     firstName:'Pika',
//     lastName:'Chu',
//     //Function
//     getPokeName : function(){
//         var fullName = this.firstName+' '+this.lastName;
//         return fullName;
//     }
// }

// var pokemonName = function(snack, hobby){
//     // console.log(this)
//     console.log(this.getPokeName() + ' I choose you')
//     console.log(this.getPokeName()+' loves '+snack+' and '+hobby)
// }

// var bindPokemon =  pokemonName.bind(pokemon)
// //10 lines of code
// bindPokemon('pizza', 'eating')

//2.call, apply
// var pokemon = {
//     firstName:'Pika',
//     lastName:'Chu',
//     //Function
//     getPokeName : function(){
//         var fullName = this.firstName+' '+this.lastName;
//         return fullName;
//     }
// }
// var pokemonName = function(snack, hobby){
//     console.log(this.getPokeName()+' loves '+snack+' and '+hobby)
// }
// pokemonName.call(pokemon, 'sushi', 'javascript');
// pokemonName.apply(pokemon, ['sushi', 'javascript']);

