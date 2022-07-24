import { combineReducers } from "redux";
import { CountryReducer, taskReducer } from "./country/task.reducer";
import { ModeReducer } from "./mode/mode.reducer";

export const rootReducer = combineReducers({
  taskReducer: taskReducer,
  viewReducer: ModeReducer,
});
