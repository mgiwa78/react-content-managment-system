import { TASK_ACTION_TYPES } from "./task.types";

const INITIAL_STATE = {
  tasks: [],
  boardsObject: {},
  boardsArray: [],
};

export const taskReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  if (!type) return;

  switch (type) {
    case TASK_ACTION_TYPES.SET_TASKS_DATA:
      return { ...state, tasks: payload };
    case TASK_ACTION_TYPES.SET_TASKS_BOARDS:
      return { ...state, boardsArray: payload };
    case TASK_ACTION_TYPES.SET_TASKS_BOARDS_OBJECT:
      return { ...state, boardsObject: payload };

    default:
      return state;
  }
};
