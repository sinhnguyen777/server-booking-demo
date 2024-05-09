const { convertPriceRangeStringToNumber } = require("../helpers");

function priceRangeMiddleware(req, res, next) {
  const { min, max } = convertPriceRangeStringToNumber(req.body.priceRange);
  req.body.minPrice = min;
  req.body.maxPrice = max;
  next();
};

module.exports = priceRangeMiddleware;