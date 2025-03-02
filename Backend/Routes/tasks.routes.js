

import express from "express"

import { createTask, updateTask, deleteTask, getTasks } from "../Backend/Controllers/tasks.controller"

const router = express.Router()

router.post("/", createTask)
router.delete("/;id", deleteTask)
router.put("/:id", updateTask)
router.get("/", getTasks)

export default router;