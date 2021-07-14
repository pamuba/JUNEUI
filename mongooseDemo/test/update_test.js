const mongoose = require('mongoose');
const MarioChar = require('../models/marioChar');
const assert = require('assert');

xdescribe("Updating Records", function(){
    var char;
    beforeEach(function(done){
        char = new MarioChar({
            name : "Mario"
        });
        char.save().then(function(){
            assert(char.isNew === false);
            done();
        });
    });

    it("Updates one record in the database", function(done){
        MarioChar.findOneAndUpdate({name:'Mario'},{name:'Luigi'}).then(function(){
           MarioChar.findOne({_id:char._id}).then(function(result){
               assert(result.name === 'Luigi')
               done()
           })
        })
    })

})