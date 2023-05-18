const express = require('express')
const UserController = require('../controller/user')
const router = express.Router();

router.get('/', UserController.findAll);
router.get('/:id', UserController.findOne);
router.get('/email/:email', UserController.findOneEmail);
router.post('/', UserController.create);
router.patch('/:id', UserController.update);
router.delete('/:id', UserController.destroy);

module.exports = router