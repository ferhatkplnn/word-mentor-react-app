import React from "react";
import { WordProvider } from "./WordsContext";
import { SentenceProvider } from "./SentenceContext";

function ContextsProvider({ children }) {
  return (
    <WordProvider>
      <SentenceProvider>{children}</SentenceProvider>
    </WordProvider>
  );
}

export default ContextsProvider;
