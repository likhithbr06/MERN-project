import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyparser from 'body-parser'
import mongodb from 'mongodb'
import postRoutes from './routes/post.js'

const app = express();

app.use('/posts',postRoutes)

app.use(bodyparser.json({limit: "30mb",extended :"true"}))
app.use(bodyparser.urlencoded({limit: "30mb",extended :"true"}))
app.use(cors());

const MongoClient = mongodb.MongoClient
//const MongoClient = mongoose.MongoClient
const url = 'mongodb://127.0.0.1:27017/MERN'
const PORT = process.env.PORT || 5000

MongoClient.connect(url,{useNewUrlParser : true, useUnifiedTopology : true})
    .then(()=> app.listen(PORT,()=> console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err.message))



