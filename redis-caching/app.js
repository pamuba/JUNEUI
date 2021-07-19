const express = require('express')
const axios = require('axios')
const redis = require('redis')
const responseTime = require('response-time')
const {promisify} = require('util')


const app = express()
app.use(responseTime())

const client = redis.createClient({
    host: '127.0.0.1',
    port: 6379
})


const GET_ASYNC = promisify(client.get).bind(client)
const SET_ASYNC = promisify(client.set).bind(client)


//localhost:3000/rockets
app.get('/rockets', async (req, res, next)=>{
    try{

        const reply = await GET_ASYNC('rockets')
        if(reply){
            console.log('Using cached data')
            res.send(JSON.parse(reply))
            return
        }
        const response = await axios.get('https://api.spacexdata.com/v3/rockets')
        const saveResult = await SET_ASYNC('rockets', JSON.stringify(response.data), 'EX', 5)
        console.log('New Data has been CACHED', saveResult)
        res.send(response.data)
    }
    catch(error){
        res.send(error.message)
    }
})


app.get('/rockets/:rocket_id', async (req, res, next)=>{
    try{
        const {rocket_id} = req.params
        const reply = await GET_ASYNC(rocket_id)
        if(reply){
            console.log('Using cached data')
            res.send(JSON.parse(reply))
            return
        }
        const response = await axios.get(`https://api.spacexdata.com/v3/rockets/${rocket_id}`)
        const saveResult = await SET_ASYNC(rocket_id, JSON.stringify(response.data), 'EX', 5)
        console.log('New Data has been CACHED', saveResult)
        res.send(response.data)
    }
    catch(error){
        res.send(error.message)
    }
})

app.listen(3000, ()=> console.log('Server listening @3000'))