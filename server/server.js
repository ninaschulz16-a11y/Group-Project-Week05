import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import pg from "pg"

const app = express()

app.use(express.json())

dotenv.config()

app.use(cors())