import { Dispatch } from "redux";
import axios from "axios";
import {
  FAIL,
  LOADING,
  GET_TASKS_SUCCESS,
  TaskDispatchTypes,
  TaskInput,
  CREATE_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
  CHANGE_TASK_STATUS_SUCCESS,
  Task,
} from "./TaskActionsTypes";

export const GetTasks = () => async (dispatch: Dispatch<TaskDispatchTypes>) => {
  try {
    dispatch({ type: LOADING });
    const result = await axios.get("http://localhost:3000/tasks");
    dispatch({ type: GET_TASKS_SUCCESS, payload: result.data });
  } catch (e) {
    console.log(e);
    dispatch({ type: FAIL, payload: ["Fetch error"] });
  }
};

export const CreateTask = (task: TaskInput) => async (
  dispatch: Dispatch<TaskDispatchTypes>
) => {
  try {
    dispatch({ type: LOADING });
    const result = await axios.post("http://localhost:3000/tasks", task);
    dispatch({ type: CREATE_TASK_SUCCESS, payload: result.data });
  } catch (e) {
    dispatch({ type: FAIL, payload: e.response.data.message });
  }
};

export const DeleteTask = (taskId: string) => async (
  dispatch: Dispatch<TaskDispatchTypes>
) => {
  try {
    dispatch({ type: LOADING });
    await axios.delete(`http://localhost:3000/tasks/${taskId}`);
    dispatch({ type: DELETE_TASK_SUCCESS, payload: taskId });
  } catch (e) {
    console.log(e);
    dispatch({ type: FAIL, payload: ["Fetch error"] });
  }
};

export const ChangeTaskStatus = (task: Task) => async (
  dispatch: Dispatch<TaskDispatchTypes>
) => {
  try {
    dispatch({ type: LOADING });
    const newStatus = task.status !== "IN_PROGRESS" ? "IN_PROGRESS" : "DONE";
    const { data } = await axios.patch(
      `http://localhost:3000/tasks/${task.id}/status`,
      {
        status: newStatus,
      }
    );
    dispatch({ type: CHANGE_TASK_STATUS_SUCCESS, payload: data });
  } catch (e) {
    console.log(e);
    dispatch({ type: FAIL, payload: ["Fetch error"] });
  }
};
