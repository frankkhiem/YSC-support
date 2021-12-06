const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = Schema(
  {
    todoId: {
      type: Schema.Types.ObjectId,
      ref: "Todo",
    },
    name: String,
    description: String,
    finished: Boolean,
    address: String,
    location: {
      type: {
        type: String,
        enum: ["Point"]
      },
      coordinates: [Number]
    },
  },
  { collection: "task", timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);