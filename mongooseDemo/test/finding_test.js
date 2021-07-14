const mongoose = require('mongoose');
const MarioChar = require('../models/marioChar');
const assert = require('assert');

xdescribe("Finding Records", function(){
    beforeEach(function(done){
        var char = new MarioChar({
            name : "Mario"
        });
        char.save().then(function(){
            assert(char.isNew === false);
            done();
        });
    });

    //define th eindividual tests
    it("Finds a rcord in the database", function(done){
        MarioChar.findOne({name:'Mario'}).then(function(result){
            assert(result.name === 'Mario')
            done();
        })
    })
})