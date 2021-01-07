export const LOADING = "LOADING";
export const FAIL = "FAIL";
export const GET_TASKS_SUCCESS = "GET_TASKS_SUCCESS";
export const CREATE_TASK_SUCCESS = "CREATE_TASK_SUCCESS";
export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS";
export const CHANGE_TASK_STATUS_SUCCESS = "CHANGE_TASK_STATUS_SUCCESS";

export type Task = {
  id: string;
  title: string;
  description: string;
  status: string;
};

export type TaskInput = {
  title: string;
  description: string;
};

type ID = string;

export interface Loading {
  type: typeof LOADING;
}
export interface Fail {
  type: typeof FAIL;
  payload: string[];
}
export interface GetTasksSuccess {
  type: typeof GET_TASKS_SUCCESS;
  payload: Task[];
}
export interface CreateTaskSuccess {
  type: typeof CREATE_TASK_SUCCESS;
  payload: Task;
}

export interface DeleteTaskSuccess {
  type: typeof DELETE_TASK_SUCCESS;
  payload: ID;
}

export interface ChangeTaskStatusSuccess {
  type: typeof CHANGE_TASK_STATUS_SUCCESS;
  payload: Task;
}

export type TaskDispatchTypes =
  | Loading
  | Fail
  | GetTasksSuccess
  | CreateTaskSuccess
  | DeleteTaskSuccess
  | ChangeTaskStatusSuccess;
