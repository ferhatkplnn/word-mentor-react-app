import { v4 as uuidv4 } from "uuid";

export const ActionTypes = {
  ADD_WORD: "ADD_WORD",
  UPDATE_WORD: "UPDATE_WORD",
  REMOVE_WORD: "REMOVE_WORD",
  INCREASE_SCORE: "INCREASE_SCORE",
  DECREASE_SCORE: "DECREASE_SCORE",
};

export default function wordReducer(state, action) {
  switch (action.type) {
    case ActionTypes.ADD_WORD: {
      const newWord = {
        ...action.payload.newWordData,
        score: 0,
        mistakeScore: 0,
        correctScore: 0,
        _id: uuidv4(),
      };
      return { ...state, words: [...state.words, newWord] };
    }
    case ActionTypes.UPDATE_WORD: {
      return {
        ...state,
        words: state.words.map((item) =>
          item._id === action.payload.id
            ? { ...item, ...action.payload.updatedData }
            : item
        ),
      };
    }
    case ActionTypes.REMOVE_WORD: {
      console.log(action.payload.id);
      console.log(state.words.filter((item) => item._id !== action.payload.id));
      return {
        ...state,
        words: state.words.filter((item) => item._id !== action.payload.id),
      };
    }
    case ActionTypes.INCREASE_SCORE: {
      return {
        ...state,
        words: state.words.map((item) =>
          item._id === action.payload.id
            ? {
                ...item,
                score: item.score + 1,
                correctScore: item.correctScore + 1,
              }
            : item
        ),
      };
    }

    case ActionTypes.DECREASE_SCORE: {
      return {
        ...state,
        words: state.words.map((item) =>
          item._id === action.payload.id
            ? {
                ...item,
                score: item.score - 1,
                mistakeScore: item.mistakeScore + 1,
              }
            : item
        ),
      };
    }

    default: {
      throw Error("Unknown action type: " + action.type);
    }
  }
}
