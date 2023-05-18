const express = require("express");
const router = express.Router();
const RandomNumberController = require('../controller/RandamoNumberController')


router.get("/random-number", RandomNumberController.getRandomNumber)

module.exports = router;
