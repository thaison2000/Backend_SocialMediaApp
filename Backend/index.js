const express = require('express')
const cors = require('cors')
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()

mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB");
    }
  );

const app = express()
const PORT = process.env.PORT

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors())

app.listen(PORT,()=>{
    console.log(`User Service started on port ${PORT}`)
})

