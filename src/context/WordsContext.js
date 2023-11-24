import { createContext, useContext, useEffect, useReducer } from "react";
import wordReducer, { WordActionTypes } from "../reducers/WordReducer";

const WordContext = createContext();

const initialWords = JSON.parse(localStorage.getItem("word")) || [];

export const WordProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wordReducer, { words: initialWords });

  useEffect(() => {
    localStorage.setItem("word", JSON.stringify(state.words));
  }, [state.words]);

  const addWord = (newWordData) => {
    if (!newWordData || Object.keys(newWordData).length === 0) {
      console.error("Invalid data for adding a word");
      return;
    }
    dispatch({ type: WordActionTypes.ADD_WORD, payload: { newWordData } });
  };

  const updateWord = (updatedData, id) => {
    if (!updatedData || Object.keys(updatedData).length === 0) {
      console.error("Invalid data for editing a word");
      return;
    }

    dispatch({
      type: WordActionTypes.UPDATE_WORD,
      payload: { updatedData, id },
    });
  };

  const removeWord = (id) => {
    console.log(id);
    dispatch({ type: WordActionTypes.REMOVE_WORD, payload: { id } });
  };

  const getRandomWordId = (minLimit, maxLimit) => {
    const filteredWords = state.words.filter(
      (item) => item.score >= minLimit && item.score < maxLimit
    );

    if (filteredWords.length === 0) {
      return;
    }

    let randomIndex = Math.floor(Math.random() * filteredWords.length);
    let randomWord = filteredWords[randomIndex];

    console.log(randomWord);
    return randomWord._id;
  };

  const increaseScore = (id) => {
    dispatch({
      type: WordActionTypes.INCREASE_SCORE,
      payload: { id },
    });
  };

  const decreaseScore = (id) => {
    dispatch({
      type: WordActionTypes.DECREASE_SCORE,
      payload: { id },
    });
  };

  const getWord = (id) => {
    return state.words.find((word) => word._id === id);
  };

  const contextValues = {
    addWord,
    updateWord,
    removeWord,
    getRandomWordId,
    getWord,
    increaseScore,
    decreaseScore,
    state,
  };

  return (
    <WordContext.Provider value={contextValues}>
      {children}
    </WordContext.Provider>
  );
};

export const useWords = () => useContext(WordContext);
