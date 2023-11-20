import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const WordContext = createContext();

export const WordProvider = ({ children }) => {
  const [words, setWords] = useState([]);

  const addWord = (newWordData) => {
    if (!newWordData || Object.keys(newWordData).length === 0) {
      console.error("Invalid data for adding a word");
      return;
    }

    const newWord = {
      ...newWordData,
      skor: 0,
      mistakeSkore: 0,
      correctSkore: 0,
      _id: uuidv4(),
    };

    setWords((prevWords) => [...prevWords, newWord]);
  };

  const editWord = (updatedData, id) => {
    if (!updatedData || Object.keys(updatedData).length === 0) {
      console.error("Invalid data for editing a word");
      return;
    }

    setWords((prevWords) =>
      prevWords.map((item) =>
        item._id === id ? { ...item, ...updatedData } : item
      )
    );
  };

  const contextValues = { words, setWords, addWord, editWord };

  return (
    <WordContext.Provider value={contextValues}>
      {children}
    </WordContext.Provider>
  );
};

export const useWords = () => useContext(WordContext);
