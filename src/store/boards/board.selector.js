import { createSelector } from "reselect";

const taskReducer = (state) => state.taskReducer;

export const SelectBoardsArray = createSelector(
  [taskReducer],
  (taskReducer) => {
    return taskReducer.boardsArray;
  }
);

export const SelectBoardsObject = createSelector(
  [taskReducer],
  (taskReducer) => taskReducer.boardsObject
);
