import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { WordProvider } from "./context/WordsContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <WordProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </WordProvider>
    </React.StrictMode>
  </BrowserRouter>
);
