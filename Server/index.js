import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyparser from 'body-parser'

const app = express();

app.use(bodyparser.json({limit: "30mb",extended :"true"}))
app.use(bodyparser.urlencoded({limit: "30mb",extended :"true"}))
app.use(cors());

