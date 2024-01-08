import { ADD_TASK, UPDATE_TASK, DELETE_TASK, IS_DONE } from "../constants/usersConst.js"
const initalState =  
{task :  []}


const rootReducer = (state = initalState, action) =>{
    switch(action.type){

        case ADD_TASK :
            return {task : [...state.task, action.payload]}

        case DELETE_TASK :
          return{
            ...state, task: state.task.filter(tasks => tasks.id !== action.payload.id)
          }

        case IS_DONE :
          return { 
                ...state,
                task: state.task.map(tasks =>
                  tasks.id === action.payload.id ? { ...tasks, isDone: action.payload.isDone } : tasks
          )}  

        case UPDATE_TASK :
            return {
                ...state,
                task: state.task.map(tasks =>
                  tasks.id === action.payload.id ? { ...tasks, Description: action.payload.Description } : tasks
                )
              };
            default :
            return state
    }
}

export default rootReducer;

