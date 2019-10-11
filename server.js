const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/speechdelay', {
	useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

mongoose.connection.once('open', () => console.log('DB connected'))
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

app.use(express.static("gambar"))
app.use(express.static("videos"))

let port = process.env.PORT || 3000

const userRoutes = require("./routes/user")
const videoRoutes = require("./routes/video")
const ipRoutes =require("./routes/ip")

app.use("/user",userRoutes)
app.use("/video",videoRoutes)
app.use("/ip",ipRoutes)

app.listen(port,()=>{
    console.log("Server is running!")
})