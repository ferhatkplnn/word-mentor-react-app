import { createContext, useContext, useEffect, useReducer } from "react";
import sentenceReducer, {
  SentenceActionTypes,
} from "../reducers/SentenceReducer";

const SentenceContext = createContext();

const initialSentences = JSON.parse(localStorage.getItem("sentences")) || [];

export const SentenceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sentenceReducer, {
    sentences: initialSentences,
  });

  useEffect(() => {
    localStorage.setItem("sentences", JSON.stringify(state.sentences));
  }, [state]);

  const addSentence = (sentence, id) => {
    dispatch({
      type: SentenceActionTypes.ADD_SENTENCE,
      payload: {
        sentence,
        id,
      },
    });
  };

  const getRandomSentence = () => {
    return state.sentences[Math.floor(Math.random() * state.sentences.length)];
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
