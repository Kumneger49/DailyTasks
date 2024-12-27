

import React from "react";
import "./Task.css";

const Task=props=>{
    const {task, handleDeleteTask}=props;
    // const handleDeleteTask=props.handleDeleteTask;
    const id=props.id;
     return(
        <>
              <div className="tasks-list">
                    <div className="tasks-element">
                        {task.text}
                    </div> 
                    <div className="edit-delete">
                    <div className="edit">Edit</div>
                    <div className="delete" onClick={()=>handleDeleteTask(id)}>Delete</div>
                </div>     
            </div>
        </>
    )
}

export default Task;