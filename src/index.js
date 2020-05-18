const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const cookieParser = require('cookie-parser')

const app = express()
const port = process.env.PORT 

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>{
    console.log('Server running on port ' + port)
})