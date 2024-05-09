const Restaurant = require('../models/restaurant.model');

// Tạo mới một nhà hàng
exports.createRestaurant = async (req, res) => {
  try {
    const existingRestaurant = await Restaurant.findOne({ name: req.body.name });
    if (existingRestaurant) {
      return res.status(400).json({
        status: 400,
        message: 'Restaurant with the same name already exists',
        data: null
      });
    }

    const restaurant = new Restaurant(req.body);
    const response = await restaurant.save();

    if (response) {
      res.status(201).json({
        status: 201,
        message: 'Restaurant created successfully',
        data: restaurant
      });
    } else {
      res.status(400).json({
        status: 400,
        message: 'Failed to create restaurant',
        data: null
      });
    }

  } catch (error) {
    console.log("error", error);
    res.status(400).send(error);
  }
};

// Lấy danh sách tất cả nhà hàng
exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json({
      status: 200,
      message: 'Retrieved all restaurants successfully',
      data: restaurants
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      status: 500,
      message: 'Internal server error',
      data: null
    });
  }
};

// Lấy thông tin của một nhà hàng theo ID
exports.getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({
        status: 404,
        message: 'Restaurant not found',
        data: null
      });
    }
    res.status(200).json({
      status: 200,
      message: 'Retrieved restaurant successfully',
      data: restaurant
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      status: 500,
      message: 'Internal server error',
      data: null
    });
  }
};

// Cập nhật thông tin của một nhà hàng theo ID
exports.updateRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!restaurant) {
      return res.status(404).json({
        status: 404,
        message: 'Restaurant not found',
        data: null
      });
    }
    res.status(200).json({
      status: 200,
      message: 'Updated restaurant successfully',
      data: restaurant
    });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({
      status: 400,
      message: 'Failed to update restaurant',
      data: null
    });
  }
};


// Xóa một nhà hàng theo ID
exports.deleteRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
    if (!restaurant) {
      return res.status(404).json({
        status: 404,
        message: 'Restaurant not found',
        data: null
      });
    } else {
      res.status(200).json({
        status: 200,
        message: 'Deleted restaurant successfully',
        data: restaurant
      });
    }

  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      status: 500,
      message: 'Internal server error',
      data: null
    });
  }
};