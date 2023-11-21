import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const WordContext = createContext();

const initialWords = JSON.parse(localStorage.getItem("word")) || [];

export const WordProvider = ({ children }) => {
  const [words, setWords] = useState(initialWords);

  useEffect(() => {
    addWordsToLocalStorage(words);
  }, [words]);

  const addWordsToLocalStorage = (words) => {
    localStorage.setItem("word", JSON.stringify(words));
  };

  const addWord = (newWordData) => {
    if (!newWordData || Object.keys(newWordData).length === 0) {
      console.error("Invalid data for adding a word");
      return;
    }

    const newWord = {
      ...newWordData,
      score: 0,
      mistakeScore: 0,
      correctScore: 0,
      _id: uuidv4(),
    };

    setWords((prevWords) => [...prevWords, newWord]);
  };

  const updateWord = (updatedData, id) => {
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

  const removeWord = (id) => {
    console.log(id);
    setWords(words.filter((item) => item._id !== id));
  };

  const getRandomWordId = (minLimit, maxLimit) => {
    const filteredWords = words.filter(
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
    setWords(
      words.map((item) => {
        if (item._id === id) {
          return {
            ...item,
            score: item.score + 1,
            correctScore: item.correctScore + 1,
          };
        }
        return item;
      })
    );
  };

  const decreaseScore = (id) => {
    setWords(
      words.map((item) => {
        if (item._id === id) {
          return {
            ...item,
            score: item.score - 1,
            mistakeScore: item.mistakeScore + 1,
          };
        }

        return item;
      })
    );
  };

  const getWord = (id) => {
    return words.find((word) => word._id === id);
  };

  const contextValues = {
    words,
    setWords,
    addWord,
    updateWord,
    removeWord,
    getRandomWordId,
    getWord,
    increaseScore,
    decreaseScore,
  };

  return (
    <WordContext.Provider value={contextValues}>
      {children}
    </WordContext.Provider>
  );
};

export const useWords = () => useContext(WordContext);
