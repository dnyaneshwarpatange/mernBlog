const express = require("express");
const router = express.Router();
const {home} = require("../controllers/authControllers")
const controllers = require("../controllers/authControllers")


const apiRouteds  = {} 
router.get("/",home);
router.post("/register",controllers.register);
router.post("/login",controllers.Login)
module.exports = router;