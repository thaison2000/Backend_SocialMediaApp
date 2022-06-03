const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mysql = require('mysql')
dotenv.config()

//connect mysql
let conn = mysql.createConnection({
    host: "localhost",
    user: "thaison",
    password: "",
    database: "social_media_app"
  });

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!!!")
});

const app = express()
const PORT = process.env.PORT

app.use(cors())

app.listen(PORT,()=>{
    console.log(`User Service started on port ${PORT}`)
})

