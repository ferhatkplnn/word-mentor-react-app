import { createContext, useContext, useState } from "react";

const WordContext = createContext();

export const WordProvider = ({ children }) => {
  const [words, setWords] = useState([]);

  const addWord = (word) => {
    const newWord = { ...word, skor: 0, mistakeSkore: 0, correctSkore: 0 };
    setWords([...words, newWord]);
  };

  const values = { words, setWords, addWord };

  return <WordContext.Provider value={values}>{children}</WordContext.Provider>;
};

export const useWords = () => useContext(WordContext);
