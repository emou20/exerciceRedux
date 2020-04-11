import React, { Component } from 'react';
import List from "./components/List";
import AddListe from "./components/AddListe";
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Articles</h2>
        <List />
        <AddListe />
      </div>
    );
  }
}

export default App;
