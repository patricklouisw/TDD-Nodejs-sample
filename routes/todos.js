var express = require('express');
var router = express.Router();
var createError = require('http-errors')

const todos = [{id: 1, name:'do dishes', completed: false}]

/* Prefix: /todos/ */
router.get('/', function(req, res, next) {
  res.json(todos);
});

/* Prefix: /todos/:id */
router.get('/:id', function(req, res, next) {
    const foundTodo = todos.find(todo => todo.id === Number(req.params.id));

    if (!foundTodo) {
        return next(createError(404, 'Not found'));
    }
    
    res.json(foundTodo);
  });

/* Prefix: /todos/:id */
router.post('/', function(req, res, next) {
    const {body} = req;

    if (typeof body.name !== 'string'){
        return next(createError(422, 'Validation Error'));
    }

    const newTodo = {
        id: todos.length + 1,
        name: body.name,
        completed: false
    }

    todos.push(newTodo);
    
    res.status(201).json(newTodo);
  });

module.exports = router;
