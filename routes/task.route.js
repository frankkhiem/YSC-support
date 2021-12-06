const express = require("express");
const router = express.Router();

const taskController = require("../controller/task.controller");

router.get('/todo/:todoId', taskController.getTasksInTodo);

router.get('/:id', taskController.getTaskById);

router.post('/', taskController.createTask);

router.put('/:id', taskController.updateTask);

router.delete('/:id', taskController.deleteTask);

module.exports = router;
