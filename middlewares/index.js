const convertPriceRangeStringToNumber = (priceRangeString) => {
  const [min, max] = priceRangeString.split(' - ').map(value => parseInt(value.replace(/\D/g, '')));
  return { min, max };
};

function priceRangeMiddleware(req, res, next) {
  console.log("req", req.body);
  const { min, max } = convertPriceRangeStringToNumber(req.body.priceRange);
  req.body.minPrice = min;
  req.body.maxPrice = max;
  next();
};

module.exports = priceRangeMiddleware;