const StocksBought = require("../models.Stocks");

async function show(req, res) {
  try {
    const stockBought = await StocksBought.findById(req.params.buy_id);
    res.status(200).json(stockBought);
  } catch (err) {
    res.status(404).json({ err });
  }
}

async function create(req, res) {
  try {
    const stockBought = await StocksBought.create(req.body);
    res.status(201).json(stockBought);
  } catch (err) {
    res.status(422).json({ err });
  }
}
