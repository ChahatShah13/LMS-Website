import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app=express()

// Middleware
app.use(cors())

// Routes 
app.get('/',(req,res)=>res.send('Api Working'))

// Port No.

const PORT= process.env.PORT || 5000

app.listen(PORT,()=>{
  console.log(`Server is Running on port ${PORT}`);
  
})