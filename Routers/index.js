const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlwareAuth/Authentication');
const userController = require('../Controller/UserController');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/',  userController.createUser);
router.put('/:id',  userController.updateUser);
router.delete('/:id',  userController.deleteUser);

module.exports = router;
