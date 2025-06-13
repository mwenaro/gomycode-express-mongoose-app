import express from 'express'
import dotenv from 'dotenv'


//create variablrs
const PORT  = process.env.PORT || 5000
//create app
const app = express()

//start app
app.listen(PORT, ()=>console.log(`App is running on port ${PORT}`))