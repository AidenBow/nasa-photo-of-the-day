import React from "react";
import "./App.css";
import { Header } from "semantic-ui-react";
import NasaPhoto from "./components/nasaPhoto.js";
//import SnapshotState from "jest-snapshot/build/State";

function App() {
  return (
    <div className="App">
      <Header as='h1'>
        Nasa's Photo of the Day!
      </Header>
        <NasaPhoto/>
    </div>
  );
}

export default App;
