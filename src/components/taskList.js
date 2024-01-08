import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./task";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask, taskDone } from "../actions/usersAction";

const Tasklist = () => {
const dispatch = useDispatch()
const tasks = useSelector((state) => state.task)

const [taskFilter,setTaskFilter]= useState('')
const [editingTask, setEditingTask]= useState({editingId :'', editingDescription :'' , editingDone :''})

// filtrage de la liste de tâche selon que la tâche est éffectuée ou non, sinon affiche toute les tâches
const toFilter =(e)=>{
setTaskFilter(e.target.value)
}
const tFilter = taskFilter === '' ? tasks : tasks.filter((task)=> task.isDone === (taskFilter === "true") )

// contrôle l'edition de la tâche et stockage la valeur modifiée dans un objet temporaire
const handleEditTask = (taskId, taskDescription) => {
    setEditingTask({ editingId: taskId, editingDescription: taskDescription });
};

// mise à jour la tâche sélectionnée par la valeur pré-stockée
const handleSaveTask = ()=>{
    dispatch(updateTask(editingTask.editingId, editingTask.editingDescription))
    setEditingTask({editingId : '', editingDescription : ''})
}

// modification de la valeur de la propriété isDone de la tache sélectionnée
const handleCheck = (id,isDone)=>{
    dispatch(taskDone(id, !isDone))
}

// suppression de la tâche sélectionnée
const handleDeleteTask = (id) => {
    dispatch(deleteTask(id))
}

return (
    <div className="container mt-4">
      <div className="d-flex">
        <button className="btn btn-outline-primary me-2" value="" onClick={toFilter}>
          All
        </button>
        <button className="btn btn-outline-success me-2" value={true} onClick={toFilter}>
          Done
        </button>
        <button className="btn btn-outline-danger" value={false} onClick={toFilter}>
          Not Done
        </button>
        
      </div>
      <h2 className="mt-4">Tasks:</h2>
      <ul className="list-group mt-3">
        {tFilter.map((task) => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
            {editingTask.editingId === task.id ? (
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  value={editingTask.editingDescription}
                  onChange={(e) => setEditingTask({ ...editingTask, editingDescription: e.target.value })}
                />
                <button className="btn btn-outline-primary" onClick={handleSaveTask}>
                  Save
                </button>
              </div>
            ) : (
              <div className="d-flex align-items-center">
                <Task {...task} handleCheck={() => handleCheck(task.id, task.isDone)} />
                <button className="btn btn-outline-warning me-2" onClick={() => handleEditTask(task.id, task.Description)}>
                  Edit
                </button>
                <button className="btn btn-outline-danger" onClick={() => handleDeleteTask(task.id)}>
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default Tasklist;
