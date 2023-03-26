import React from "react";
import { useState, useEffect, useRef } from "react";
import './App.css'

function App() {
  const [grid, setgrid] = useState([
    [0],[0],[0],[0],
    [0],[0],[0],[0],
    [0],[0],[0],[0],
  ])
  function setGridValue(rowIndex: number, colIndex: number, value: number) {
    const newGrid = [...grid];
    newGrid[rowIndex][colIndex] = value;
    setgrid(newGrid);
    console.log(setgrid(newGrid));
  }
  return (
    <div className="app">
        <div className="grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
            {row.map((number, colIndex) => (
                <div key={colIndex} className="cell">
                    <input type="number" value={number} onChange={
                        (e) => setGridValue(rowIndex, colIndex, parseInt(e.target.value))
                    }/>
                </div>
            ))}
        </div>
      ))}
        </div>
    </div>
  )
}
export default App;
