const TodoModel = require("../models/todo.model");

//Hàm get danh sách Todo
const getTodoList = async (req, res) => {
  try {
    
    const TodoList = await TodoModel.find({}).sort({"createdAt": -1});

    var result = {
      TodoList: TodoList,
      success: true
    };

    res.status(200).send(result);


  } catch (error) {
    res.status(error.status || 400);
    res.send(error);
  }
};

//Hàm get 1 Todo
const getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const Todo = await TodoModel.findById(id);

    var result = {
      Todo: Todo,
      success: true
    };

    res.status(200).send(result);

  } catch (error) {
    res.status(error.status || 400);
    res.send(error);
  }
};

//Hàm insert 1 Todo
const createTodo = async (req, res) => {
  try {
    const { name, description } = req.body;
    var newTodo = new TodoModel({
      name,
      description
    });
    await newTodo.save();
    
    var result = {
      Todo: newTodo,
      success: true,
    };

    res.status(200).send(result);
    
  } catch (error) {
    res.status(error.status || 400);
    res.send(error);
  }
};

//Hàm update 1 Todo
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const Todo = await TodoModel.findById(id);

    await Todo.update({ name, description });

    var result = {
      success: true,
    };

    res.status(200).send(result);

  } catch (error) {
    res.status(error.status || 400);
    res.send(error);
  }
}

//Hàm delete 1 Todo
const deleteTodo = async (req, res) => {
  try {
    const {id} = req.params;
    await TodoModel.findByIdAndDelete(id);

    var result = { success: true };

    res.status(200).send(result);

  } catch (error) {
    res.status(error.status || 400);
    res.send(error);
  }
}


module.exports = {
  getTodoList,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
}