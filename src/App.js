import React from "react";
import "./App.css";

const Quadrado = ({ texto }) => <div className="quadrado">{texto}</div>;

const Log = () => (
  <div className="log">
    <h2>Log:</h2>
    <p>
      2024–11–18 20:18:29,467 [INFO] distributedConsensus.LeaderCandidate
      Participated to a new round of number 13 with rank as 263
    </p>
    <p>
      2024–11–18 20:18:29,467 [INFO] distributedConsensus.LeaderCandidate
      Participated to a new round of number 13 with rank as 263
    </p>
    <p>
      2024–11–18 20:18:29,467 [INFO] distributedConsensus.LeaderCandidate
      Participated to a new round of number 13 with rank as 263
    </p>
    <p>
      2024–11–18 20:18:29,467 [INFO] distributedConsensus.LeaderCandidate
      Participated to a new round of number 13 with rank as 263
    </p>
    <p>
      2024–11–18 20:18:29,467 [INFO] distributedConsensus.LeaderCandidate
      Participated to a new round of number 13 with rank as 263
    </p>
    <p>
      2024–11–18 20:18:29,467 [INFO] distributedConsensus.LeaderCandidate
      Participated to a new round of number 13 with rank as 263
    </p>
    <p>
      2024–11–18 20:18:29,467 [INFO] distributedConsensus.LeaderCandidate
      Participated to a new round of number 13 with rank as 263
    </p>
    <p>
      2024–11–18 20:18:29,467 [INFO] distributedConsensus.LeaderCandidate
      Participated to a new round of number 13 with rank as 263
    </p>
  </div>
);

const App = () => (
  <div className="app">
    <div className="container-medidores">
      <div className="coluna">
        <Quadrado texto="Acelerômetro" />
        <Quadrado texto="Altímetro" />
      </div>
      <div className="coluna">
        <Quadrado texto="Giroscópio" />
        <Quadrado texto="Velocímetro" />
      </div>
    </div>

    <div className="container-mapa">
      <div className="mapa">Localização</div>
    </div>

    <div className="container-log">
      <Log />
    </div>
  </div>
);

export default App;
