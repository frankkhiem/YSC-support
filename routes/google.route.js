const express = require("express");
const router = express.Router();

const googleController = require("../controller/google.controller");

// router.get('/', todoController.getTodoList);

// router.get('/:id', todoController.getTodoById);

router.post('/', googleController.receiveToken);
router.get('/', googleController.receiveToken);

// router.put('/:id', todoController.updateTodo);

// router.delete('/:id', todoController.deleteTodo);

module.exports = router;
