import React, {useState, useEffect} from "react"
import "./Tasks.css";

import Task from "./Task";


const Tasks=props=>{
    const [tasks, setTasks]=useState([{text: "First task", id: 0}, 
        {text: "Second task", id: 1}, 
        {text: "Third task", id: 2},
        {text: "Fourth task", id: 3},
        {text: "Fifth task", id: 5}])
    const [id, setId]=useState(6);

    const handleDeleteTask=(id)=>{
        setTasks(tasks.filter(
            (task)=>{
                return (task.id!==id)
            }
        ))
    }

   
      

     const handlAddTask=(newText, newId)=>{
        // <input type="text" ></input>
        
        const obj={
            text: "newText",
            id: id
        }
        setTasks( 
            [...tasks, obj]
        )
        setId(id+1)
    }
 
                
    return(
        <div class="main-tasks-class">
            {/* <h1>lkdjalkj</h1> */}
            <ul>
                {tasks.map(
                    (task)=>(
                        <li key={task.id} >
                            <Task task={task} id={task.id} handleDeleteTask={handleDeleteTask}/>
                        </li>
                    )
                )
            }
            </ul>
            {/* <Task tasks={tasks}/> */}
         
            <h4 className="shufle-text">Reshufle the tasks</h4>
            <h4 className="add-task-text" onClick={handlAddTask}>Add Tasks</h4>
        </div>
    )
}

export default Tasks;