import { combineReducers } from "redux";
import { CountryReducer, taskReducer } from "./country/task.reducer";
import { ModeReducer, StyleReducer } from "./style/style.reducer";

export const rootReducer = combineReducers({
  taskReducer: taskReducer,
  styleReducer: StyleReducer,
});
