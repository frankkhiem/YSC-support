const TaskModel = require("../models/task.model");


//Hàm định dạng 1 Point trên WeMap
const _createLocationPoint = ({ longitude, latitude }) => {
  if (!longitude || !latitude) return;

  return {
    type: "Point",
    coordinates: [longitude, latitude],
  };
};

//Hàm get danh sách Task thuộc 1 Todo
const getTasksInTodo = async (req, res) => {
  try {
    const { todoId } = req.params;
    const Tasks = await TaskModel.find({ todoId });
    
    var result = {
      TaskList: Tasks,
      success: true
    };

    res.status(200).send(result);

  } catch (error) {
    res.status(error.status || 400);
    res.send(error);
  }
}

//Hàm get 1 Task theo id
const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const Task = await TaskModel.findById(id);

    var result = {
      Task: Task,
      success: true
    };

    res.status(200).send(result);

  } catch (error) {
    res.status(error.status || 400);
    res.send(error);
  }
}


//Hàm insert 1 Task
const createTask = async (req, res) => {

  try {
    const { todoId, name, description, finished, address, location } = req.body;

    const newTask = new TaskModel({
      todoId,
      name,
      description,
      finished,
      address,
      location: _createLocationPoint(location),
    })

    await newTask.save();

    var result = {
      Task: newTask,
      success: true,
    };

    res.status(200).send(result);

  } catch (error) {
    res.status(error.status || 400);
    res.send(error);
  }
};


//Hàm update 1 task 
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { todoId, name, description, finished, address, location } = req.body;

    await TaskModel.findByIdAndUpdate(id, {
      todoId,
      name,
      description,
      finished,
      address,
      location: _createLocationPoint(location)
    })

    var result = {
      success: true,
    };

    res.status(200).send(result);

  } catch (error) {
    res.status(error.status || 400);
    res.send(error);
  }
}

//Hàm delete 1 task 
const deleteTask = async (req, res) => {
  try {
    const {id} = req.params;
    await TaskModel.findByIdAndDelete(id);

    var result = { success: true };

    res.status(200).send(result);

  } catch (error) {
    res.status(error.status || 400);
    res.send(error);
  }
}

module.exports = {
  getTasksInTodo,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
}