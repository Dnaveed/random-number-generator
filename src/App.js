import React, { useState } from 'react';
import './App.css';

function App() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [history, setHistory] = useState([]);

  const generateNumber = () => {
    const newNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(newNumber);
    setHistory([...history, { number: newNumber, timestamp: new Date() }]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Number Generator</h1>
        <div className="input-group">
          <label>
            Min:
            <input
              type="number"
              value={min}
              onChange={(e) => setMin(parseInt(e.target.value))}
            />
          </label>
          <label>
            Max:
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(parseInt(e.target.value))}
            />
          </label>
        </div>
        <button onClick={generateNumber}>Generate Number</button>
        {randomNumber !== null && (
          <div className="result">
            <h2>Your random number is:</h2>
            <p className="number">{randomNumber}</p>
            <p className="range-info">(between {min} and {max})</p>
          </div>
        )}
        {history.length > 0 && (
          <div className="history">
            <h3>History</h3>
            <ul>
              {history.map((item, index) => (
                <li key={index}>
                  {item.number} - {item.timestamp.toLocaleTimeString()}
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
