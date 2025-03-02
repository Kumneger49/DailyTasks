
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db"
import taskRoutes from "./Routes/tasks.routes"

dotenv.config()

connectDB()

const app = express()

app.use(express.json());

app.use(cors())

app.get("/", (req, res)=>{
    res.send("Server is running")
})

app.use("/api/tasks", taskRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is runnign on http://localhost:${PORT}`)
})