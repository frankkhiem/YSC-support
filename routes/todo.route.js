const express = require("express");
const router = express.Router();

const todoController = require("../controller/todo.controller");

router.get('/', todoController.getTodoList);

router.get('/:id', todoController.getTodoById);

router.post('/', todoController.createTodo);

router.put('/:id', todoController.updateTodo);

router.delete('/:id', todoController.deleteTodo);

module.exports = router;
