require('dotenv').config()
const express = require('express')
const app = express()
const route = require('./routes/index')
const connectDB = require('./db/connectDB')
const cors = require('cors')
// 3sw20aYo'?Nq

connectDB()
app.use(cors())
app.use(express.json())


app.use('/', route)

let port = process.env.PORT 

app.listen(port, ()=>{
    console.log('port running');
})



// 5. step ta hocche backend/server shobar agey database er shathe connect korbe. database er theke data ana newa korbe. tarpor ekta api generate korbe jeita front end theke data niye ashte parbe. front end jodi ekhon database theke data ante chay tahole o directly database theke ante parbe na. or agey backend/server ke request korte hobe tarpor server/backend database theke request kore then frontend ke dibe. toh proccess takey amader backend e banaite hobe 

// 6. body request ar params request er difference hocche. ami body/form/field e jai likhi paste korbo  oite hocche body request. Ar Params hocche link/url e ja ee likhi na keno oita hocche parameter request. toh simply bolte name/description/title eigula amra body tei likhi