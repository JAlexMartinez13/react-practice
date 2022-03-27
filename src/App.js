import { useState } from "react";

function App() {
  const [counter, setCount] = useState(0);

  return (
    <>
      <h1 style={{ textAlign: "center" }}> Counter:{counter} </h1>
      <button onClick={() => setCount(counter + 1)}>+</button>
      {counter > 0 && (
        <button
          onClick={() => {
            setCount(counter - 1);
          }}
        >
          -
        </button>
      )}{" "}
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default App;
