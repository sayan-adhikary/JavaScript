# Create a Background color changing with btn

Using `Vite`, `React`, and the `useState` hook to change the page background color with a button.

## Features

- Displays the current background color.
- Changes the background color when the button is clicked.
- Uses React state to store the selected color.

## Setup

```bash
npm i
npm run dev
```

## Example source

```jsx
import { useState } from 'react';

function App() {
	const colors = ['#f8f9fa', '#ffd6a5', '#bde0fe', '#caffbf', '#ffc6ff'];
	const [color, setColor] = useState(colors[0]);

	const changeBackground = () => {
		const nextColor = colors[Math.floor(Math.random() * colors.length)];
		setColor(nextColor);
	};

	return (
		<main style={{ backgroundColor: color, minHeight: '100vh' }}>
			<h1>Background Color Changer</h1>
			<p>Current color: {color}</p>
			<button onClick={changeBackground}>Change background</button>
		</main>
	);
}

export default App;
```

## How it works

`useState` stores the current color. When the button is clicked, `changeBackground` selects a color and calls `setColor`. React then re-renders the component with the updated `backgroundColor`.
