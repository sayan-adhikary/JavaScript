import { useState } from 'react';
import { generatePassword } from './utils/passwordGenerator';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);

  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
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

  const handleReset = () => {
    setPassword('');
    setLength(12);
    setUppercase(true);
    setLowercase(true);
    setNumbers(true);
    setSymbols(false);
  };

  const handleCopy = () => {
    if (!password) return;

    navigator.clipboard.writeText(password);
    alert('Password copied!');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      {' '}
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-8 text-center text-3xl font-bold">
          Password Generator
        </h1>

        {/* Password Display */}
        <div className="mb-6 flex gap-2">
          <input
            type="text"
            value={password}
            placeholder="Generated Password"
            readOnly
            className="w-full rounded-md border border-gray-300 px-3 py-3 outline-none focus:border-blue-500"
          />

          <button
            onClick={handleCopy}
            className="rounded-md bg-gray-800 px-4 py-2 text-white transition hover:bg-gray-700 active:scale-95"
          >
            Copy
          </button>
        </div>

        {/* Password Length */}
        <div className="mb-6">
          <div className="mb-3 flex justify-between">
            <label className="font-medium">Password Length</label>

            <span className="font-bold text-blue-600">{length}</span>
          </div>

          <input
            type="range"
            min="4"
            max="30"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full cursor-pointer"
          />
        </div>

        {/* Options */}
        <div className="mb-6 flex flex-col gap-4">
          <label className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={uppercase}
              onChange={() => setUppercase(!uppercase)}
              className="h-4 w-4"
            />
            Uppercase Letters
          </label>

          <label className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={lowercase}
              onChange={() => setLowercase(!lowercase)}
              className="h-4 w-4"
            />
            Lowercase Letters
          </label>

          <label className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={numbers}
              onChange={() => setNumbers(!numbers)}
              className="h-4 w-4"
            />
            Numbers
          </label>

          <label className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={symbols}
              onChange={() => setSymbols(!symbols)}
              className="h-4 w-4"
            />
            Symbols
          </label>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleGeneratePassword}
            className="flex-1 rounded-md bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700 active:scale-95"
          >
            Generate Password
          </button>

          <button
            onClick={handleReset}
            className="rounded-md bg-gray-200 px-4 py-3 font-medium transition hover:bg-gray-300 active:scale-95"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
