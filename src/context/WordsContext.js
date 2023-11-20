import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const WordContext = createContext();

export const WordProvider = ({ children }) => {
  const [words, setWords] = useState([]);

  const addWord = (word) => {
    const newWord = {
      ...word,
      skor: 0,
      mistakeSkore: 0,
      correctSkore: 0,
      _id: uuidv4(),
    };
    setWords([...words, newWord]);
  };

  const values = { words, setWords, addWord };

  return <WordContext.Provider value={values}>{children}</WordContext.Provider>;
};

export const useWords = () => useContext(WordContext);
