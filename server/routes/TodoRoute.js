const express = require('express');
const router = express.Router();

const getTodo = require("../controllers/TodoController");

router.get("/get-todo", getTodo.getTodo);

router.post("/save-todo", getTodo.saveTodo);

router.patch("/update-todo", getTodo.updateTodo);

router.delete("/delete-todo", getTodo.deleteTodo);

module.exports = router;