const express = require('express')
const app = express()
const PORT = 3500

app.get('/',(request,response)=>{
    response.send('working')
})

app.listen(PORT,console.log(`Server is running at http://localhost:${PORT}`))