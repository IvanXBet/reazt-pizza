const express = require("express")
const mongoose = require("mongoose")
const config = require("config")

const app = express()
const port = config.get('serverPort') || 5000;

app.use(express.json())
app.use(express.json({extended: true}))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/data', require('./routes/menu.routes'))

const start = async () => {
    try {
        await mongoose.connect(config.get('dbURL'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(port, () => {
            console.log(`server started on port ${port}`)
            
        })
    }catch(e) {
        console.log("server error", e.massage)
        process.exit(1)
    }
}

start()