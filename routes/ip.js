const express = require("express")
const router = express.Router()

const ipController = require("../controllers/ip")

router.get("/setHost/:ip/:port",ipController.createHost)
router.get("/getAll",ipController.getAllHost)

module.exports = router