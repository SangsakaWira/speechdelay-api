const express = require("express")
const router = express.Router()

const userController = require("../controllers/user")

// ALL GET USERS DATA
router.get("/getAll",userController.getAll)

// LOGIN AND REGISTER
router.post("/register",userController.register)
router.post("/login",userController.login)

module.exports = router