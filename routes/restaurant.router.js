const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurant.controller');

router.get('/', restaurantController.getAllRestaurants);
router.post('/create', restaurantController.createRestaurant);
router.get('/restaurant/:id', restaurantController.getRestaurantById);
router.patch('/update/:id', restaurantController.updateRestaurant);
router.delete('/delete/:id', restaurantController.deleteRestaurant);

module.exports = router;
