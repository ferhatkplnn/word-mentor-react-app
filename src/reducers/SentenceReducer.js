export const SentenceActionTypes = {
  ADD_SENTENCE: "ADD_SENTENCE",
};

export default function sentenceReducer(state, action) {
  switch (action.type) {
    case SentenceActionTypes.ADD_SENTENCE:
      return {
        ...state,
        sentences: [...state.sentences, action.payload],
      };

    default: {
      throw new Error("Unknown action type: " + action.type);
    }
  }
}
