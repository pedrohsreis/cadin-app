import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import WorldWind from "./pages/WorldWind";


function App() {
  return (
    <Router>
      <Route component={Home} path="/" exact={true} />
      <Route component={WorldWind} path="/ww" />
    </Router>
  );
}

export default App;
