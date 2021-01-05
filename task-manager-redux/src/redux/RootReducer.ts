import { combineReducers } from "redux";
import taskReducer from "./reducers/TaskReducer";

const RootReducer = combineReducers({
    task: taskReducer
});

export default RootReducer;