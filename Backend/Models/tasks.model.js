

import mongoose, { mongo } from "mongoose";

const taskSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        }
    }, {timestamps: true}
)

const Task = mongoose.model("Task", taskSchema)

export default Task;