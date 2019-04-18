import React, { useState } from "react";
import "./App.css";
import { getBpm, getBpmSets } from "./bpm";

const App = () => {
  const [beats, setBeats] = useState([]);
  const recordBeat = () => setBeats([...beats, Date.now()]);
  const latestBpm = getBpm(beats.slice(beats.length - 2));
  const bpmSets = getBpmSets(beats, 4);

  return (
    <div className="App">
      <button className="BeatButton" onClick={recordBeat}>
        beat
      </button>
      <div className="BPM">
        <div className="BPM__latest">{latestBpm || "-"} bpm</div>
        <div className="BPM__sets">
          <div className="BPM__sets__inner">{bpmSets.join(" ⋅ ")}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
