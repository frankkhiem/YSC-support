const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = Schema(
  {
    name: String,
    description: String,
  },
  { collection: "todo", timestamps: true }
);

module.exports = mongoose.model("Todo", todoSchema);