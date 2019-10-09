// const path = require("path")
const fs = require("fs")
const express = require("express")
// const root = path.join(__dirname+"/..")

const app = express()
app.use(express.static("gambar"))

app.listen(5000,()=>{
    console.log("Server is running!")
})