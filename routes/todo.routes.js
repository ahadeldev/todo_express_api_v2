import express from "express";
const router = express.Router();

import {
  createTodo,
  getAllTodos,
  getSingleTodo,
  updateTodo,
  deleteTodo } from "../services/todo.services.js";

// CREATE: Add a new todo
router.post("/", createTodo);

// READ: Get all todos
router.get("/", getAllTodos);

// READ: Get a single todo by ID
router.get("/:id", getSingleTodo);

// UPDATE: Update a todo by ID
router.put("/:id", updateTodo);

// DELETE: Delete a todo by ID
router.delete("/:id", deleteTodo);

export default router;