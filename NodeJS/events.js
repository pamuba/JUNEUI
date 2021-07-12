// var events = require('events');

// var person = new events.EventEmitter();


// //onClick
// person.on('run', function(msg){
//     console.log("Running:"+msg);
// })


// //click
// person.emit('run', " Jon")

var events = require('events')
var utils = require('util')

var Person = function(name){
    this.name = name;
}

utils.inherits(Person, events.EventEmitter)

var John = new Person("JOHN")

John.on('Eat', function(){
    console.log("John is eating")
})

John.on('Clean', function(){
    console.log("John is cleaning")
})

John.emit('Eat')
John.emit('Clean')
