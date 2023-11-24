import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import ContextsProvider from "./context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ContextsProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </ContextsProvider>
    </React.StrictMode>
  </BrowserRouter>
);
