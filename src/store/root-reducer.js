import { combineReducers } from "redux";
import { taskReducer } from "./boards/board.reducer";
import { ModeReducer, StyleReducer } from "./style/style.reducer";

export const rootReducer = combineReducers({
  taskReducer: taskReducer,
  styleReducer: StyleReducer,
});
