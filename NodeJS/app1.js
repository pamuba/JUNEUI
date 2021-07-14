const bcrypt = require("bcrypt");

//IIFE
(
    async function main(){
        //increase the time to calculate the hash
        const saltRounds = 10;
        const originalPassword = "Complex@123"
        const Password = "Complex@123"

        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPass = await bcrypt.hash(originalPassword, salt)

        ///
        /// save it to the database

        //retrive it from the db and compare it to Password

        const isMatch = await bcrypt.compare(Password, hashedPass)
        console.log(isMatch)
    }
)();