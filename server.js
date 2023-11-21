const express = require('express')
const mongoose =require('mongoose')
const app= express()
const cors=require('cors')
const dotenv =require('dotenv')
const routesUrls=require('./router/routerform')

dotenv.config()

mongoose.set('strictQuery', false)

mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log('Database Connected'))
app.use(cors())
app.use(express.json())
app.use('/app',routesUrls)
app.listen(7777,()=>console.log('server is runing'))