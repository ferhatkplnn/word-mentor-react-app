import React from "react";
import { useRoutes } from "react-router-dom";
import AddWord from "../pages/AddWord";
import Home from "../pages/Home";

function RouterElement() {
  const routeConfig = [
    { path: "/", element: <Home /> },
    { path: "/addword", element: <AddWord /> },
  ];

  const routers = useRoutes(routeConfig);
  return routers;
}

export default RouterElement;
