const express = require("express")
const router = express.Router()

const videoController = require("../controllers/video")

router.get("/getAll",videoController.getAll)

module.exports = router