import { useState } from "react";
import { useDispatch } from "react-redux";
import {addTask} from '../actions/usersAction.js'


const AddTask = () => {
    const dispatch= useDispatch()
    const [taskId, setTaskId] = useState(1)
    const [newTask, setNewTask]= useState({id : taskId , Description : '', isDone : false })

    const handleOnChange =(e) =>{
        const {name, value} = e.target
        setNewTask({...newTask, [name] : value})
    }

    const handleOnSubmit =(e)=>{
        e.preventDefault()
        dispatch(addTask(newTask))
        setTaskId(taskId + 1)
        setNewTask({id : taskId + 1, Description : '', isDone : false})
    }

    return ( 
        <div className="container mt-5">
          <div className="input-group mb-3">
            <input 
              type="text" 
              className="form-control" 
              name="Description" 
              placeholder="Add new task" 
              value={newTask.Description} 
              onChange={handleOnChange} 
            />
            <button className="btn btn-primary" onClick={handleOnSubmit}>Submit</button>
          </div>
        </div>
      );
}
 
export default AddTask;
