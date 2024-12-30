const express = require("express");
const router = express.Router();

const getProducts = require("../controller/controller");

router.get("/products/api", getProducts);

module.exports = router;
