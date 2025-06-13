import express from 'express'
import dotenv from 'dotenv'
import { dbConnect } from './db/dbConnect'

//load env vars
dotenv.config()
//create variablrs
const PORT  = process.env.PORT || 5000
//create app
const app = express()
//run db connection
dbConnect()
//start app
app.listen(PORT, ()=>console.log(`App is running on port ${PORT}`))