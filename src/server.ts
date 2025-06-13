import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import { dbConnect } from './db/dbConnect'
import { userRouter } from './routes/userRoute'

//load env vars
dotenv.config()
//create variablrs
const PORT  = process.env.PORT || 5000
//create app
const app = express()

// midddlewares
app.use(express.json())
//run db connection
dbConnect()

//routes
// GET /
app.get("/", (req:Request, res:Response)=>{
    res.status(200).send("App is up and running")
})

//users
app.use("/users", userRouter)
//students

//books

//teachers


//


// Error atcher
app.use((req, res)=>{
res.status(404).json({error:"Invalid path"})
})





//start app
app.listen(PORT, ()=>console.log(`App is running on port ${PORT}`))