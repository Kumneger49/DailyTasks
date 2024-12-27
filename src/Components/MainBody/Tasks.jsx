import React, {useState, useEffect} from "react"
import "./Tasks.css";

import Task from "./Task";


const Tasks=props=>{
 
    const {currentTasks, handleDeleteTask, handleAddTask}=props;
    const [addTask, setAddTask]=useState(false)
    const [newTask, setNewTask]=useState("")

    const handleInputChange=(event)=>{
        setNewTask(event.target.value);
        console.log(newTask)
    }

    const handleAddingTask=(event)=>{
        event.preventDefault();
        handleAddTask(newTask);
        setAddTask(false);
        setNewTask("")
    }

    const changeAddTaskState=()=>{
        if(addTask==false){
            setAddTask(true)
            }
            else{
                setAddTask(false)
            }
    }
   
    return(         
        <div class="main-tasks-class">
            {/* <h1>lkdjalkj</h1> */}
            <ul>
                {currentTasks.length!=0?currentTasks.map(
                    (task)=>(
                        <li key={task.id} >
                            <Task task={task} id={task.id} handleDeleteTask={handleDeleteTask}/>
                        </li>
                    )
                ):<h1>There is no task to do</h1>
            }
            </ul>
         
            <h4 className="shufle-text">Reshufle the tasks</h4>
            <h4 className="add-task-text" onClick={changeAddTaskState}>Add Tasks</h4>
            {addTask?<form action="" onSubmit={handleAddingTask}>
                <input value={newTask} required type="text" placeholder="add the name of the new task" onChange={handleInputChange}/>
                <button type="submit">Add task</button>
            </form>:<></>}
            
        </div>
    )
}

export default Tasks;