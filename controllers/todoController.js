const Todo = require("../models/Todo");
const { v4: uuid } = require("uuid");

// Adding new task

exports.createNewTodo = (req, res) => {
    //// retrieve new tasks details from req.body
    const task = req.body
  Todo.create(
    {
      title: task.title,
      description: task.description
    },
    (err, newTask) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      } else {
        return res
          .status(201)
          .json({ message: "New task created succesfully", newTask });
      }
    }
  );
};


// Retrieve Todo tasks
exports.getTodoTasks = (req, res) => {
    // check req.query for filter
    let filterConditions = {}
    if (req.query.title) {
        filterConditions.title = req.query.title
    }
    if (req.query.description) {
        filterConditions.description = req.query.description
    }
    Todo.find(filterConditions, (err, tasks) => {
        if(err) {
            return res.status(500).json({message: err.message})
        }
        else {
            return res.status(200).json({tasks})
        }
    })
}

// retrieve a single task
exports.getTodoTask = (req, res) => {
    Todo.findById(req.params.id, (err, task) => {
        if(err) {
            return res.status(500).json({message: err.message})
        }
        else if (!task) {
            return res.status(404).json({message: "task not found"})
        }
        else {
            return res.status(200).json({task})
        }
    })
}

// Update a particular Todo task
exports.updateTask = (req, res) => {
    Todo.findByIdAndUpdate(req.param.id, {
        title: req.body.title,
        description: req.body.description
    }, (err, task) => {
        if (err) {
            return res.status(500).json({message: err.message})
        }
        else if (!task){
            return res.status(404).json({message: "task not found yet"})
        }
        else {
            task.save((err, saveTask) => {
                if (err) {
                    return res.status(400).json({message: err})
                }
                else {
                    return res.status(200).json({message: "task updated"})
                }
            })
        }
    })
}

// deleting a particular task
exports.deleteTask = (req, res) => {
    Todo.findByIdAndDelete(req.params.id, (err, task) => {
        if (err) {
            return res.status(500).json({message: err.message})
        }
        else if(!task) {
            return res.status(404).json({message: "task not found"})
        }
        else {
            return res.status(200).json({message: "Task deleted successfully"})
        }
    })
}