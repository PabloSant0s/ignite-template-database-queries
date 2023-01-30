import './database'
import express from 'express'
import 'express-async-errors'
import { catchError } from './middlewares/catch-error'

const app = express()

app.use(express.json())

app.use(catchError)

export { app }
