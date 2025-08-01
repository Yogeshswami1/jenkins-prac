import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import studentRoutes from './routes/studentRoutes.js'

dotenv.config()
const app = express()

// app.use(cors({
//   origin: 'http://school.yogeshtech.xyz',
//   methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
//   credentials: true,
//   allowedHeaders: ['Content-Type', 'Authorization'],
// }));app.use(express.json());app.use(express.json())

app.use(cors({
  origin: ['http://books.yogeshtech.xyz', 'http://localhost:5173','http://school.yogeshtech.xyz'],
  credentials: true
}));

app.use('/api/students', studentRoutes)

const PORT = process.env.PORT || 9000

connectDB()

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})
