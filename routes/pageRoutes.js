const express = require("express");
const router = express.Router();
const {controller} = require("../controllers/loginController/login");

router.get("/", index);

module.exports = {index};
