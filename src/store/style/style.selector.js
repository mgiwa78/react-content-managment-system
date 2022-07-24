import { createSelector } from "reselect";

const styleReducer = (state) => {
  return state.styleReducer;
};

export const SelectStlyeMode = createSelector(
  [styleReducer],
  (styleReducer) => {
    return styleReducer.styleMode;
  }
);
