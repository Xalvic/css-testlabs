import React from "react";
import List from "./List";
import Head from "./Head";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TheProvider } from "./Context";
import "./App.css";

function App() {
  return (
    <TheProvider>
      <Router>
        <div className='App'>
          <Head />
          <List />
        </div>
      </Router>
    </TheProvider>
  );
}

export default App;
