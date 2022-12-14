const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { orderValidation } = require('../../validations');
const { orderController } = require('../../controllers');

const router = express.Router();

router.route('/')
    .get(auth('getOrders'), validate(orderValidation.getOrders), orderController.getOrders)
    .post(auth('createOrder'), validate(orderValidation.createOrder), orderController.createOrder);

router
    .route('/:orderId')
    .get(auth('getOrders'), validate(orderValidation.getOrder), orderController.getOrder)
    .patch(auth('updateOrders'), validate(orderValidation.updateOrder), orderController.updateOrder);
    // .delete(auth('manageUsers'), validate(userValidation.deleteUser), userController.deleteUser);

module.exports = router;
// TODO: add swagger for order
