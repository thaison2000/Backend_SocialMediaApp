const express = require('express')
const cors = require('cors')
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()

const postRoute = require("./routes/post");

mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB");
    }
  );

const app = express()
const PORT = process.env.PORT

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors())

app.use("/api/post", postRoute);

app.listen(PORT,()=>{
    console.log(`User Service started on port ${PORT}`)
})

