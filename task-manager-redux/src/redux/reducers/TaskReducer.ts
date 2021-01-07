import {
  FAIL,
  LOADING,
  GET_TASKS_SUCCESS,
  Task,
  TaskDispatchTypes,
  CREATE_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
  CHANGE_TASK_STATUS_SUCCESS,
} from "../actions/TaskActionsTypes";
interface IDefaultState {
  loading: boolean;
  tasks: Task[];
  errors: string[];
}

const defaultState: IDefaultState = {
  loading: false,
  tasks: [],
  errors: [],
};

const taskReducer = (
  state: IDefaultState = defaultState,
  action: TaskDispatchTypes
): IDefaultState => {
  switch (action.type) {
    case FAIL:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_TASKS_SUCCESS:
      return {
        loading: false,
        errors: [],
        tasks: action.payload,
      };
    case CREATE_TASK_SUCCESS:
      return {
        loading: false,
        errors: [],
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK_SUCCESS:
      return {
        loading: false,
        errors: [],
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case CHANGE_TASK_STATUS_SUCCESS:
      return {
        loading: false,
        errors: [],
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
