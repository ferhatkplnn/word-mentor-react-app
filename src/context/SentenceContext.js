import { createContext, useContext, useEffect, useReducer } from "react";
import sentenceReducer, {
  SentenceActionTypes,
} from "../reducers/SentenceReducer";

const SentenceContext = createContext();

let initialSentences = [];

try {
  const storedSentences = localStorage.getItem("sentences");
  if (storedSentences) {
    initialSentences = JSON.parse(storedSentences);
  }
} catch (error) {
  console.error("Error parsing stored sentences:", error);
}

export const SentenceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sentenceReducer, {
    sentences: initialSentences,
  });

  useEffect(() => {
    localStorage.setItem("sentences", JSON.stringify(state.sentences));
  }, [state.sentences]);

  const addSentence = (sentence, id) => {
    dispatch({
      type: SentenceActionTypes.ADD_SENTENCE,
      payload: {
        sentence,
        id,
      },
    });
  };

  const getRandomSentence = (id) => {
    const filteredSentence = state.sentences.filter(
      (sentence) => id === sentence.id
    );

    return filteredSentence[
      Math.floor(Math.random() * filteredSentence.length)
    ];
  };

  const contextValues = {
    state,
    dispatch,
    addSentence,
    getRandomSentence,
  };

  return (
    <SentenceContext.Provider value={contextValues}>
      {children}
    </SentenceContext.Provider>
  );
};

export const useSentence = () => useContext(SentenceContext);
