const express = require("express");

const router = express.Router();

const controller = require("../controllers/quoteController");

console.log(controller);

router.get("/", controller.getQuotes);

router.post("/", controller.createQuote);

router.put("/:id", controller.updateQuote);

router.delete("/:id", controller.deleteQuote);

module.exports = router;