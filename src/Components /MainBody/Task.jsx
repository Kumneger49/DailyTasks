

import React from "react";
import "./Task.css";

const Task=props=>{
    const task=props.task;
    const handleDeleteTask=props.handleDeleteTask;
    const id=props.id;
     return(
        <>
              <ul className="tasks-list">
                    <li className="tasks-element">
                        {task.text}
                    </li> 
                    <div className="edit-delete">
                    <div className="edit">Edit</div>
                    <div className="delete" onClick={()=>handleDeleteTask(id)}>Delete</div>
                </div>     
            </ul>
        </>
    )
}

export default Task;