const convertPriceRangeStringToNumber = (priceRangeString) => {
  const [min, max] = priceRangeString.split(' - ').map(value => parseInt(value.replace(/\D/g, '')));
  return { min, max };
};

module.exports = convertPriceRangeStringToNumber;