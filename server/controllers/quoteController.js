const Quote = require("../models/Quote");

// GET all quotes
const getQuotes = async (req, res) => {
  try {
    console.log("GET QUOTES CALLED");

    const quotes = await Quote.find().sort({
      createdAt: -1,
    });

    console.log(quotes);

    res.status(200).json(quotes);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// CREATE quote
const createQuote = async (req, res) => {
  try {
    console.log("BODY RECEIVED:", req.body);

    const { text, author, category } = req.body;

    if (!text || !author) {
      return res.status(400).json({
        message: "Text and author are required",
      });
    }

    const quote = await Quote.create({
      text,
      author,
      category,
    });

    console.log("QUOTE CREATED:", quote);

    res.status(201).json(quote);
  } catch (error) {
    console.log("CREATE ERROR:");
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE quote
const updateQuote = async (req, res) => {
  try {
    const quote = await Quote.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!quote) {
      return res.status(404).json({
        message: "Quote not found",
      });
    }

    res.status(200).json(quote);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE quote
const deleteQuote = async (req, res) => {
  try {
    const quote = await Quote.findByIdAndDelete(
      req.params.id
    );

    if (!quote) {
      return res.status(404).json({
        message: "Quote not found",
      });
    }

    res.status(200).json({
      message: "Quote deleted successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getQuotes,
  createQuote,
  updateQuote,
  deleteQuote,
};