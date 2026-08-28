import { useState } from 'react';
import { generatePassword } from './utils/passwordGenerator.js';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(6);

  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(
      length,
      uppercase,
      lowercase,
      numbers,
      symbols,
    );

    if (!newPassword) {
      alert('Please select at least one character type.');
      return;
    }

    setPassword(newPassword);
  };

  return (
    <div className="container">
      <h1>Password Generator</h1>

      {/* Password Display */}
      <div className="password-box">
        <input
          type="text"
          value={password}
          placeholder="Generated Password"
          readOnly
        />
        <button
          onClick={() => {
            if (!password) return;

            navigator.clipboard.writeText(password);
            alert('Password copied!');
          }}
        >
          Copy
        </button>
      </div>

      {/* Password Length */}
      <div className="length-section">
        <label>Password Length: {length}</label>

        <input
          type="range"
          min="6"
          max="30"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </div>

      {/* Options */}
      <div className="options">
        <label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
          Uppercase
        </label>

        <label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
          Lowercase
        </label>

        <label>
          <input
            type="checkbox"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
          />
          Numbers
        </label>

        <label>
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
          Symbols
        </label>
      </div>

      {/* Buttons */}
      <div className="buttons">
        <button onClick={handleGeneratePassword}>Generate Password</button>
        <button
          onClick={() => {
            setPassword('');
            setLength(12);
            setUppercase(true);
            setLowercase(true);
            setNumbers(true);
            setSymbols(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
