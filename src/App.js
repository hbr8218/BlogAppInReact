import React from "react";
import { Route, Routes } from "react-router-dom";
import GlobalNavigation from "./components/GlobalNavigation";
import Body from "./components/Body";


const App = () => {
  return (
    <>
      <GlobalNavigation />
      <Body />
      
    </>
  );
};

export default App;
