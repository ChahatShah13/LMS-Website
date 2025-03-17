import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webHooks.js'
import { clerkMiddleware } from '@clerk/express'
import educatorRouter from './routes/educatorRoutes.js'

const app=express()

// Connect to database
await connectDB()

// Middleware
app.use(cors())
app.use(clerkMiddleware())

// Routes 
app.get('/',(req,res)=>res.send('Api Working'))
app.post('/clerk',express.json(),clerkWebhooks)
app.use('/api/educator', express.json(), educatorRouter)

// Port No.
 
const PORT= process.env.PORT || 5000

app.listen(PORT,()=>{
  console.log(`Server is Running on port ${PORT}`);
  
})