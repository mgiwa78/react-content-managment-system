import { TASK_ACTION_TYPES } from "./task.types";

export const setTasksAction = (tasks) => {
  console.log(tasks);
  return {
    type: TASK_ACTION_TYPES.SET_TASKS_DATA,
    payload: tasks,
  };
};
export const setBoardsArrayAction = (boards) => {
  return {
    type: TASK_ACTION_TYPES.SET_TASKS_BOARDS,
    payload: boards,
  };
};
export const setBoardsObjectAction = (boardsArray) => {
  const boardsMapObject = {};
  boardsArray.forEach((board) => {
    boardsMapObject[board.name.split(" ").join("")] = board.columns;
  });
  return {
    type: TASK_ACTION_TYPES.SET_TASKS_BOARDS_OBJECT,
    payload: boardsMapObject,
  };
};
