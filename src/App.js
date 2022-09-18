import React from "react";
import { Route, Routes } from "react-router-dom";
import GlobalNavigation from "./components/GlobalNavigation";
import Body from "./components/Body";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <GlobalNavigation />
      <Body />
      <Footer />
    </>
  );
};

export default App;
