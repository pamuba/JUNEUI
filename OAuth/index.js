require('dotenv').config()

const express = require('express')
const axios = require('axios')

const clientID = '574e4487773a8c099bcc'
const clientSecret = '665ab42267d3facf0d40974838164df4ec4d296a'
const app = express();

app.set('view engine', 'ejs')
var access_token = ""

app.get('/', function(req, res){
    res.render('pages/index', {client_id:clientID});
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('App listening @3000'))

app.get('/github/callback', (req, res) => {

    const requestToken = req.query.code

    axios({
        method: 'post',
        url:`https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
        headers:{
            accept:'application/json'
        }

    }).then((response) => {
        access_token = response.data.access_token
        res.redirect('/success');
    });
});

app.get('/success', (req, res)=>{
    axios({
        method:'get',
        url:`https://api.github.com/user`, 
        headers:{
            Authorization:'token '+access_token
        }
    }).then((response)=>{
        res.render('pages/success', {userData: response.data})
    })
});