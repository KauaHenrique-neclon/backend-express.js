const express = require('express');
const tasksControllers = require('./controllers/tasksController');
const taskMiddlewares = require('./middlewares/tasksMiddleware');

const router = express.Router();



router.get('/tasks', tasksControllers.getAll);
router.post('/tasks', taskMiddlewares.ValidarTasks ,tasksControllers.createTaskFunc)
router.delete('/tasks/:id', tasksControllers.deleteTask);
router.put('/tasks/:id', taskMiddlewares.ValidarTaskUpdate ,tasksControllers.deleteTask);


module.exports = router;