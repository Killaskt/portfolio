import React from "react";
import { Route } from "react-router-dom";

import Home from "./Components/Home/Home.jsx";
import "./App.css";

const  App = () => {
  return <Route path="/" component={Home} />;
}

export default App;
