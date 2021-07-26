const StocksBought = require("../models.Stocks");

async function show(req, res) {
  try {
    const stockBought = await StocksBought.findById(req.params.buy_id);
    res.status(200).json(stockBought);
  } catch (err) {
    res.status(404).json({ err });
  }
}