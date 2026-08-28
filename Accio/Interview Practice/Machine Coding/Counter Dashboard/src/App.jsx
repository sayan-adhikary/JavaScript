import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = () => {
    setCount(count + step);
  };

  const handleDecrement = () => {
    if (count - step < 0) {
      setCount(0);
    } else {
      setCount(count - step);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-center text-3xl font-bold text-slate-800">
          Counter Dashboard
        </h1>

        {/* Count Display */}
        <div className="my-8 text-center">
          <p className="text-sm font-medium text-slate-500">Current Count</p>

          <h2 className="mt-2 text-6xl font-bold text-blue-600">{count}</h2>
        </div>

        {/* Step Input */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Step Value
          </label>

          <input
            type="number"
            min="1"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={handleIncrement}
            className="rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700 active:scale-95"
          >
            Increment
          </button>

          <button
            onClick={handleDecrement}
            disabled={count === 0}
            className="rounded-lg bg-red-500 px-4 py-3 font-medium text-white transition hover:bg-red-600 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Decrement
          </button>
        </div>

        {/* Reset Button */}
        <button
          onClick={handleReset}
          className="mt-4 w-full rounded-lg bg-slate-200 px-4 py-3 font-medium text-slate-700 transition hover:bg-slate-300 active:scale-95"
        >
          Reset
        </button>
      </section>
    </main>
  );
}

export default App;