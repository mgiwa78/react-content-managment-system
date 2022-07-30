import { BOARD_ACTION_TYPES } from "./board.types";

const INITIAL_STATE = {
  boardsArray: [],
  boardsObject: {},
};

export const taskReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  if (!type) return;

  switch (type) {
    case BOARD_ACTION_TYPES.SET_BOARDS_DATA_ARRAY:
      return { ...state, boardsArray: payload };
    case BOARD_ACTION_TYPES.SET_BOARDS_OBJECT:
      return { ...state, boardsObject: payload };

    default:
      return state;
  }
};
