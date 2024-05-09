const Restaurant = require('../models/restaurant');

// Tạo mới một nhà hàng
exports.createRestaurant = async (req, res) => {
  try {
    const restaurant = new Restaurant(req.body);
    await restaurant.save();
    res.status(201).send(restaurant);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Lấy danh sách tất cả nhà hàng
exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.send(restaurants);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Lấy thông tin của một nhà hàng theo ID
exports.getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).send();
    }
    res.send(restaurant);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Cập nhật thông tin của một nhà hàng theo ID
exports.updateRestaurant = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'address', 'cuisineType', 'priceRange', 'openingHours', 'images'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!restaurant) {
      return res.status(404).send();
    }
    res.send(restaurant);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Xóa một nhà hàng theo ID
exports.deleteRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
    if (!restaurant) {
      return res.status(404).send();
    }
    res.send(restaurant);
  } catch (error) {
    res.status(500).send(error);
  }
};
