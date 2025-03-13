import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webHooks.js'

const app=express()

// Connect to database
await connectDB()

// Middleware
app.use(cors())

// Routes 
app.get('/',(req,res)=>res.send('Api Working'))
app.post('/clerk',express.json(),clerkWebhooks)

// Port No.

const PORT= process.env.PORT || 5000

app.listen(PORT,()=>{
  console.log(`Server is Running on port ${PORT}`);
  
})