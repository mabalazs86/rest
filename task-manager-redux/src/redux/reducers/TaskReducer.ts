import { FAIL, LOADING, GET_TASKS_SUCCESS, Task, TaskDispatchTypes, CREATE_TASK_SUCCESS } from "../actions/TaskActionsTypes";

interface IDefaultState {
    loading: boolean
    tasks: Task[]
}

const defaultState: IDefaultState = {
    loading: false,
    tasks: []
};

const taskReducer = (state: IDefaultState = defaultState, action: TaskDispatchTypes): IDefaultState => {
    switch (action.type) {
        case FAIL:
            return {
                ...state,
                loading: false,
            }
        case LOADING:
            return {
                ...state,
                loading: true,
            }
        case GET_TASKS_SUCCESS:
            return {
                loading: false,
                tasks: action.payload
            }
        case CREATE_TASK_SUCCESS:
            return {
                loading: false,
                tasks: [...state.tasks, action.payload]
            }
        default:
            return state;
    }
}

export default taskReducer;