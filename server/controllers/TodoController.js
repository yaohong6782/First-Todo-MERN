const TodoModel = require("../models/TodoModel");

const getTodo = async (req, res) => {
  const Todo = await TodoModel.find();
  res.send(Todo);
};

const saveTodo = async (req, res) => {
  const { text } = req.body;
  TodoModel.create({ text })
    .then(() => res.status(201).send({ msg: "Create Success" }))
    .catch((err) => console.log(err));
};

const deleteTodo = async (req, res) => {
  const { _id } = req.body;
  //   console.log(req.body)
  //   console.log(_id)
  console.log(req.params);
  const { pid } = req.params;

  console.log(pid);
  // console.log("_id " + _id)
  // console.log(req.params.pid);
  TodoModel.findByIdAndDelete(pid)
    .then(() => res.status(201).send({ msg: "Delete Success" }))
    .catch((err) => console.log(err));
};

const updateTodo = async (req, res) => {
  const { _id, text } = req.body;

  TodoModel.findByIdAndUpdate(_id,  {text} )
    .then(() => res.status(201).send({ msg: " Update Success"}))
    .catch((err) => console.log(err));

  //   try {
  //     await updatedTodo.save();
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   updatedTodo.text = text;
  //   res.status(200).json({ todo: updatedTodo.toObject({ getters: true }) });
};

exports.getTodo = getTodo;
exports.saveTodo = saveTodo;
exports.deleteTodo = deleteTodo;
exports.updateTodo = updateTodo;
