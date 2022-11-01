const express = require("express")
const router = express.Router()
const TodoCtrl = require('../controllers/todoController')

//Post request to /todos to create a new todo task

router.post('/', TodoCtrl.createNewTodo)

//Get request to /todos to fetch all todo task

router.get('/', TodoCtrl.getTodoTasks)

//Get request to /todos to fetch a single todo task

router.get('/:id', TodoCtrl.getTodoTask)

// put request to /todos/:id to update a single  task

router.put('/:id', TodoCtrl.updateTask)

// delete request to /todos/:id to delete a single  task

router.delete('/:id', TodoCtrl.deleteTask)

module.exports = router