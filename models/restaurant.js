const { default: mongoose } = require("mongoose");
const priceRangeMiddleware = require("../middlewares");


const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  cuisineType: {
    type: String,
    required: true
  },
  minPrice: {
    type: Number, // Lưu trữ giá trị tối thiểu của khoảng giá
    required: true
  },
  maxPrice: {
    type: Number, // Lưu trữ giá trị tối đa của khoảng giá
    required: true
  },
  openingHours: {
    type: String,
    required: true
  },
  images: [{
    type: String
  }]
});

restaurantSchema.pre('save', priceRangeMiddleware);

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
