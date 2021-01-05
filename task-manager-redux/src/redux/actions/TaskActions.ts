import {Dispatch} from "redux"
import axios from "axios"
import { FAIL, LOADING, GET_TASKS_SUCCESS, TaskDispatchTypes, TaskInput, CREATE_TASK_SUCCESS } from "./TaskActionsTypes";

export const GetTasks = () => async (dispatch: Dispatch<TaskDispatchTypes>) => {
    try {
        dispatch({ type: LOADING });
        const result = await axios.get('http://localhost:3000/tasks');
        dispatch({ type: GET_TASKS_SUCCESS, payload: result.data });
    } catch (e) {
        console.log(e);
        dispatch({ type: FAIL }); 
    }
};

export const CreateTask = (task: TaskInput) => async (dispatch: Dispatch<TaskDispatchTypes>) => {
    try {
        dispatch({ type: LOADING });
        const result = await axios.post('http://localhost:3000/tasks', task);
        dispatch({ type: CREATE_TASK_SUCCESS, payload: result.data });
    } catch (e) {
        console.log(e);
        dispatch({ type: FAIL }); 
    }
};