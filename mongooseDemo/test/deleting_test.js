const mongoose = require('mongoose');
const MarioChar = require('../models/marioChar');
const assert = require('assert');

xdescribe("Deleting Records", function(){
    beforeEach(function(done){
        var char = new MarioChar({
            name : "Mario"
        });
        char.save().then(function(){
            assert(char.isNew === false);
            done();
        });
    });

    it("Deletes one record from the database", function(done){
        MarioChar.findOneAndRemove({name:'Mario'}).then(function(){
            MarioChar.findOne({name:'Mario'}).then(function(result){
               assert(result === null)
            })
            done()
        })
    })

})