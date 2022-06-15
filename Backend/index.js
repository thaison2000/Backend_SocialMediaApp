const express = require('express')
const cors = require('cors')
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");
const commentRoute = require("./routes/comment");

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

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/comment", commentRoute);

app.listen(PORT,()=>{
    console.log(`User Service started on port ${PORT}`)
})

