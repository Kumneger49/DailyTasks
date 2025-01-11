

import React from "react";
import "./Task.css";

const Task=props=>{
    const {task, handleDeleteTask, id, userId}=props;
    // const handleDeleteTask=props.handleDeleteTask;
     return(
        <>
              <div className="tasks-list">
                    <div className="tasks-element">
                        {task.text}
                    </div> 
                    <div className="edit-delete">
                    <div className="edit">Edit</div>
                    <div className="delete" onClick={()=>handleDeleteTask(id, userId)}>Delete</div>
                </div>     
            </div>
        </>
    )
}

export default Task;