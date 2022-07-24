import { STYLE_ACTION_TYPES } from "./style.types";

const INITIAL_STATE = {
  styleMode: {},
};

export const StyleReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case STYLE_ACTION_TYPES.SET_VIEW_STYLE:
      return { ...state, styleMode: payload };

    default:
      return state;
  }
};
