const express = require("express")
const router = express.Router()

const videoController = require("../controllers/video")

router.get("/getAll",videoController.getAll)
router.get("/getBendaById/:id",videoController.getBendaById)
router.get("/getMateriById/:id",videoController.getMateriById)

module.exports = router