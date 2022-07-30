import { BOARD_ACTION_TYPES } from "./board.types";

export const addNewBoard = (newBoard, BoardsObject) => {
  console.log(newBoard);
  const newBoards = {
    ...BoardsObject,
    [newBoard.name.toLowerCase()]: newBoard,
  };
  return newBoards;
};

export const setBoardsObjectAction = (BoardsObject) => {
  return {
    type: BOARD_ACTION_TYPES.SET_BOARDS_OBJECT,
    payload: BoardsObject,
  };
};

export const setBoardsArrayAction = (BoardsObject) => {
  const newBoardsArray = Object.keys(BoardsObject);
  const newArray = newBoardsArray.map((board) => {
    return {
      name: BoardsObject[board].name,
      columns: BoardsObject[board].columns,
    };
  });
  console.log(newArray);
  return {
    type: BOARD_ACTION_TYPES.SET_BOARDS_DATA_ARRAY,
    payload: newArray,
  };
};
export const setNewTask = (BoardsObject, newTask, currentBoard) => {
  console.log(currentBoard);
  const newColumnArray = currentBoard.columns.map((column) => {
    if (newTask.id !== column.name) return column;
    else {
      console.log(column.name, newTask.id);

      const newC = {
        ...column,
        ...(column.tasks
          ? { tasks: [...column.tasks, newTask.data] }
          : { tasks: [newTask.data] }),
      };
      return newC;
    }
  });

  const BoardKeys = Object.keys(BoardsObject);
  BoardKeys.forEach((boardKey) => {
    if (BoardsObject[boardKey].name !== currentBoard.name)
      return BoardsObject[boardKey];
    else {
      return (BoardsObject[boardKey].columns = newColumnArray);
    }
  });

  return updateBoardsObject(BoardsObject);
};

// export const setBoardsObjectAction = (boardsArray) => {
//   console.log("resetting object");
//   if (!boardsArray) return;

//   const boardsMapObject = {};
//   boardsArray.forEach((board) => {
//     boardsMapObject[board.name.split(" ").join("")] = board.columns;
//   });
//   return {
//     type: BOARD_ACTION_TYPES.SET_BOARDS_OBJECT,
//     payload: boardsMapObject,
//   };
// };

export const addNewBoardAction = (newBoard, BoardsObject) => {
  const updatedBoard = addNewBoard(newBoard, BoardsObject);

  return updateBoardsObject(updatedBoard);
};

export const updateBoardsObject = (updatedBoard) => {
  return {
    type: BOARD_ACTION_TYPES.SET_BOARDS_OBJECT,
    payload: updatedBoard,
  };
};
