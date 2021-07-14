const mongoose = require('mongoose')
const chalk = require('chalk')
const log = console.log;
mongoose.Promise = global.Promise
//#region 
// log(chalk.blue("Hello")+' World'+chalk.red('!'))
// log(chalk.blue.bgRed.bold("Hello World"))
// log(chalk.green.inverse("Hello World"))
//#endregion

///runs before all the tests
before(function(done){
      //connect to the database
      mongoose.connect('mongodb://localhost/mocha', { useNewUrlParser: true, useUnifiedTopology: true })

      mongoose.connection.once('open', function(){
      log(chalk.green.inverse('Connection has been made!'))
      done();
      }).on('error', function(error){
         log(chalk.red.inverse('Connection Error:'+error.message))
      })
})

//runs before each test
beforeEach(function(done){
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    })
})

