import React from "react";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Zeeshan");

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setName("Ahmed")}>Change Name</button>
      <button>Disabled for no reason</button>
    </div>
  );
}

export default App;
