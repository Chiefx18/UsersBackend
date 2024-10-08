const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getAllUsers);
router.get('/:userId', userController.getSpecificUser);
router.post('/', userController.addUser);
router.put('/:userId', userController.editUser);
router.delete('/:userId', userController.deleteUser);

module.exports = router;