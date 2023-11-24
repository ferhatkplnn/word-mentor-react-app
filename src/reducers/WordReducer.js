import { v4 as uuidv4 } from "uuid";

export const WordActionTypes = {
  ADD_WORD: "ADD_WORD",
  UPDATE_WORD: "UPDATE_WORD",
  REMOVE_WORD: "REMOVE_WORD",
  INCREASE_SCORE: "INCREASE_SCORE",
  DECREASE_SCORE: "DECREASE_SCORE",
};

export default function wordReducer(state, action) {
  switch (action.type) {
    case WordActionTypes.ADD_WORD: {
      const newWord = {
        ...action.payload.newWordData,
        score: 0,
        mistakeScore: 0,
        correctScore: 0,
        _id: uuidv4(),
      };
      return { ...state, words: [...state.words, newWord] };
    }
    case WordActionTypes.UPDATE_WORD: {
      return {
        ...state,
        words: state.words.map((item) =>
          item._id === action.payload.id
            ? { ...item, ...action.payload.updatedData }
            : item
        ),
      };
    }
    case WordActionTypes.REMOVE_WORD: {
      console.log(action.payload.id);
      console.log(state.words.filter((item) => item._id !== action.payload.id));
      return {
        ...state,
        words: state.words.filter((item) => item._id !== action.payload.id),
      };
    }
    case WordActionTypes.INCREASE_SCORE: {
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

    case WordActionTypes.DECREASE_SCORE: {
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
