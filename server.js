const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

let db, 
    dbConnectionString = process.env.DB_STRING,
    dbName = 'sample_guides',
    collection

MongoClient.connect(dbConnectionString)
    .then(client =>{
        console.log('connected to Database')
        db = client.db(dbName)
        collection = db.collection('planets')
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.listen(process.env.PORT || PORT, () =>{
    console.log(`Server is running`)
})