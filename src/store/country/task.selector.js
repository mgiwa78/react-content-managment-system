import { createSelector } from "reselect";

const taskReducer = (state) => state.taskReducer;

export const SelectTaskObject = createSelector(
  [taskReducer],
  (taskReducer) => taskReducer.tasks
);
export const SelectBoardsArray = createSelector(
  [taskReducer],
  (taskReducer) => taskReducer.boardsArray
);
export const SelectBoardsObject = createSelector(
  [taskReducer],
  (taskReducer) => taskReducer.boardsObject
);
