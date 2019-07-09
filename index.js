const express = require('express')
const date = require('./middleware/date')
const app = express()
const port = 3000
const apiV1Birthdayrouter = require("./routers/birthdays/dates")
const apiV1Chatrouter = require("./routers/api/v1/chat")

app.get('/', (req, res) => res.send('hello'))
app.use('/birthdays', apiV1Birthdayrouter)
app.use('/api/v1/chat', apiV1Chatrouter)




app.listen(port, () => console.log(`example ${port}`))