import React from "react";
import "./App.css";

import NasaPhoto from "./components/nasaPhoto.js";
import SnapshotState from "jest-snapshot/build/State";

function App() {
  return (
    <div className="App">
      <p>
        Nasa's Photo of the Day!
      </p>
        <NasaPhoto />
    </div>
  );
}

export default App;
