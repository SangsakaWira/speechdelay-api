const express = require("express")
const router = express.Router()

const videoController = require("../controllers/video")

router.get("/getAll",videoController.getAll)
router.get("/getById/:id",videoController.getById)
// router.get("/getMateriById/:id",videoController.getMateriById)
router.get("/getAllBenda",videoController.getAllBenda)
router.get("/getAllMateri",videoController.getAllMateri)

module.exports = router