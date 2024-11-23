import Todo from "../models/todo.model.js";
import AppError from "../shared/apperror.js";
import httpStatusCodes from "../shared/httpStatusCodes.js";

// @desc    Add a todo
// @route   POST /api/v2/todos/
export const createTodo = async (req, res, next) => {
  const { title, description, status } = req.body;
  if(!title){
    const error = new AppError("# Please provide a title", httpStatusCodes.BAD_REQUSEST);
    return next(error);
  }
  const newTodo = await Todo.create({title, description, status});
  if(!newTodo) {
    const error = new AppError("# Error while creating a todo", httpStatusCodes.INTERNAL_SERVER_ERROR);
    return next(error);
  }
  res.status(httpStatusCodes.RESOURCE_CREATED).json(newTodo);
}

// @desc    Get all todos
// @route   GET /api/v2/todos/
export const getAllTodos = async (req, res, next) => {
  const allTodos = await Todo.findAll();
  if(!allTodos){
    const error = new AppError("# Error while fetchin todos", httpStatusCodes.INTERNAL_SERVER_ERROR);
    return next(error);
  }
  res.status(httpStatusCodes.OK).json(allTodos);
}

// @desc    Get a todo vid id
// @route   GET /api/v2/todos/:id
export const getSingleTodo = async (req, res, next) => {
  const id = parseInt(req.params.id);
  const todo = await Todo.findByPk(id);
  if(!todo) {
    const error = new AppError("# Todo not found", httpStatusCodes.NOT_FOUND);
    return next(error);
  }
  res.status(httpStatusCodes.OK).json(todo);
}

// @desc    update certain todo
// @route   PUT /api/v2/todos/:id
export const updateTodo = async (req, res, next) => {
  const {title, description, status} = req.body;
  const id = req.params.id;
  const todo = await Todo.findByPk(id);
  if(!todo){
    const error = new AppError("# Todo not found", httpStatusCodes.NOT_FOUND);
    return next(error);
  }
  // Updating the todo
  todo.title = title || todo.title;
  todo.description = description || todo.description;
  todo.status = status !== undefined ? status : todo.status;
  const updatedTodo = await todo.save();
  if(!updatedTodo){
    const error = new AppError("# Error while updating todo", httpStatusCodes.INTERNAL_SERVER_ERROR);
    return next(error);
  }
  res.status(httpStatusCodes.OK).json(updatedTodo);
}

// @desc    Delete a todo via id
// @route   DELETE /api/v2/todos/:id
export const deleteTodo = async (req, res, next) => {
  const id = parseInt(req.params.id);
  const todo = await Todo.findByPk(id);
  if(!todo){
    const error = new AppError("# Todo not found", httpStatusCodes.NOT_FOUND);
    return next(error);
  }
  const deletedTodo = await todo.destroy();
  if(!deleteTodo){
    const error = new AppError("# Error while deleting todo", httpStatusCodes.INTERNAL_SERVER_ERROR);
    return next(error);
  }
  res.status(httpStatusCodes.OK).json(`Todo with id ${id} deleted`);
}