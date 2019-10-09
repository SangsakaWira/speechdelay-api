const fs = require("fs")
const path = require("path")

const benda = path.join(__dirname+"/.."+"/gambar")
fs.readdir(benda, (err, files) => {
    files.forEach(file => {
      console.log(file);
    });
  });