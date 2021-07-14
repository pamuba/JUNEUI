const mongoose = require('mongoose');
const MarioChar = require('../models/marioChar');
const assert = require('assert');

//test suite--gr related tests
xdescribe("Saving Records", function(){
    it('Saves a new record to the database', function(){
        var char = new MarioChar({
            name:"John"
        });
        char.save().then(function(){
            assert(john.isNew === false)
        })
    })
 