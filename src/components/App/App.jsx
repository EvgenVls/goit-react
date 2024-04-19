import { useState } from "react";

import "./App.css";

function App() {
  const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
  const [query, setQuery] = useState("");
  const [click, setClick] = useState(0);

  const filteredPlanets = planets.filter((planet) => planet.includes(query));

  return (
    <>
      <button onClick={() => setClick(click + 1)}>
        Number of clicks: {click}
      </button>
      <ul>
        {filteredPlanets.map((planet) => (
          <li key={planet}>{planet}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
