export const LOADING = "LOADING";
export const FAIL = "FAIL";
export const GET_TASKS_SUCCESS = "GET_TASKS_SUCCESS";
export const CREATE_TASK_SUCCESS = "CREATE_TASK_SUCCESS";

export type Task = {
    id: string
    title: string
    description: string
    status: string
}

export type TaskInput = {
    title: string
    description: string
}

export interface Loading {
    type: typeof LOADING
}
export interface Fail {
    type: typeof FAIL
}
export interface GetTasksSuccess {
    type: typeof GET_TASKS_SUCCESS
    payload: Task[]  
}
export interface CreateTaskSuccess {
    type: typeof CREATE_TASK_SUCCESS
    payload: Task 
}

export type TaskDispatchTypes = Loading | Fail | GetTasksSuccess | CreateTaskSuccess;