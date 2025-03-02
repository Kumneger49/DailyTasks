


import Task from "../Models/tasks.model";


export const createTask = async (req, res)=>{
   const task = req.body; 

   if(!task.name){
        res.status(400).json({success: false, message: "The name of the product is required"})
   }

   const newTask = new Task(task)
    try{
        await newTask.save()
        res.status(201).json({success: true, message: "Task successfully created"})
    }
    catch(error){
        res.status(500).json({success: false, message: "Server error"})
    }
}


export const deleteTask = async (req, res)=>{
    const {id} = req.params;
    try{
        const task = await Task.findByIdAndDelete(id);
        if(!task){
            return res.status(404).json({success: false, message: "Product not found"})
        }

        res.status(200).json({success: true, message: "Task successfully deleted"})
    }
    catch(error){
         res.status(500).json({success: false, message: "Server error"})
    }
}

export const updateTask = async(req, res)=>{
    const {id} = req.params;
    const newTasks = req.body;
    try {
        
        const task = await Task.findByIdAndUpdate(id, newTask, {new: true});
        if(!task){
            return res.status(404).json({success: false, message: "Tasks does not exist"})
        }

        res.status(200).json({success: true, data: task})

    } catch (error) {
        res.status(500).json({success: false, message: "Server error"})
    }
}

export const getTasks = async (req, res)=>{
    try {
        const task = await Task.find()
        res.status(200).json({success: true, data: task})
    } catch (error) {
        res.status(500).json({success: false, message: "Server error"})
    }
}

