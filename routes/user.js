const express = require("express")
const router = express.Router()

const userController = require("../controllers/user")

// ALL GET USERS DATA
router.get("/getAll",userController.getAll)

// GET USER BY ID
router.get("/getById/:id",userController.getById)
// router.get("/getByUserAndUpdate/:username/:item",userController.getByUsernameAndUpdate)
// router.get("/getByUserAndDelete/:username",userController.getByUsernameAndDelete)
router.get("/getByIdAndUpdate/:id/:item",userController.getByIdAndUpdate)
router.get("/getByIdAndDelete/:id",userController.getByIdAndUpdate)
router.get("/getAchievementById/:id",userController.getAchievementById)

// LOGIN AND REGISTER
router.post("/register",userController.register)
router.post("/login",userController.login)

module.exports = router