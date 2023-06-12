require("dotenv").config()
const express = require('express')
const app = express()
const PORT = 3500
const employee = require('./routers/employeeRouter')
const mongoose = require('mongoose')

app.use(express.json())

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection

db.on("error",(error)=> console.log(error.message))
db.once("open",()=> console.log("Connection Established"))

app.get('/',(request,response)=>{
    response.send('working')
})

app.use('/api/v1/employee',employee)

app.listen(PORT,console.log(`Server is running at http://localhost:${PORT}`))