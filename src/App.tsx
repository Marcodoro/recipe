import React, { useState } from "react";
import "./App.css";

function App() {
  const [numer, setnumber] = useState(0);
  const [numberof, setnumberof] = useState<number[]>([]);

  function countPages(e: React.FormEvent<HTMLFormElement>, numer: number) {
    e.preventDefault();
    setnumberof(new Array(numer).fill(0));
    setnumber(0)
  }

  const pages = {
    pagesCount: {
      numberof: numberof,
    }
  }

  return (
    <div className="app">
      {numberof.length > 0 &&
        numberof.map((_, index) => {
          return <div key={index}>Hello</div>;
        })}
      <form onSubmit={(e) => countPages(e, numer)}>
        <input
          type="number"
          value={numer}
          onChange={(e) => setnumber(e.target.valueAsNumber)}
        />
        <button type="submit">Count Pages</button>
      </form>
    </div>
  );
}

export default App;
