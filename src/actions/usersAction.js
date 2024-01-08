import { ADD_TASK, UPDATE_TASK, DELETE_TASK, IS_DONE } from "../constants/usersConst";

// ajout d'une tâche
export const addTask = (task) =>{
    return({
        type : ADD_TASK,
        payload : task
    })
}

// mise à jour d'une tâche
export const updateTask = (id,Description) =>{
    return({
        type : UPDATE_TASK,
        payload : {id,Description}
    })
}

// atribu si une tâche et éffectuée ou non
export const taskDone = (id, isDone)=>{
    return({
        type : IS_DONE,
        payload : {id, isDone}
    })
}

// supprime une tâche
export const deleteTask = (id) =>{
    return({
        type : DELETE_TASK,
        payload : {id}
    })
}