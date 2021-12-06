const express = require("express");
const router = express.Router();

const zaloController = require("../controller/zalo.controller");

// router.get('/', todoController.getTodoList);

// router.get('/:id', todoController.getTodoById);

router.post('/', zaloController.receiveToken);
router.get('/', zaloController.receiveToken);

// router.put('/:id', todoController.updateTodo);

// router.delete('/:id', todoController.deleteTodo);

module.exports = router;