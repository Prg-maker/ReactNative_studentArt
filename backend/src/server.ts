import express from 'express'
import { routes } from './routes'
import cors from 'cors'
const server = express()

server.use(cors({
  origin:"*"
}))

server.use(express.json())
server.use(routes)


server.listen(3001 , ()=> console.log('server is running'))