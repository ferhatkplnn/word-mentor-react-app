import React from "react";
import { useRoutes } from "react-router-dom";
import AddWord from "../pages/AddWord";
import Home from "../pages/Home";
import BeginnerWordBox from "../pages/BeginnerWordBox";
import IntermediateWordBox from "../pages/IntermediateWordBox";

function RouterElement() {
  const routeConfig = [
    { path: "/", element: <Home /> },
    { path: "/addword", element: <AddWord /> },
    { path: "/beginner-word-box", element: <BeginnerWordBox /> },
    { path: "/intermediate-word-box", element: <IntermediateWordBox /> },
  ];

  const routers = useRoutes(routeConfig);
  return routers;
}

export default RouterElement;
