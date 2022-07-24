import { STYLE_ACTION_TYPES } from "./style.types";

export const SetViewMode = (styleMode) => {
  return { type: STYLE_ACTION_TYPES.SET_VIEW_STYLE, payload: styleMode };
};
