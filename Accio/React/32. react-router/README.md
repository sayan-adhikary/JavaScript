 # React Routing

React routing allows a single-page application to display different components for different URLs without reloading the page. The most common library is **React Router**.

## Basic Example

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
			</nav>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}
```

`BrowserRouter` enables routing, `Routes` groups route definitions, `Route` maps a URL to a component, and `Link` provides navigation without a full page refresh.

Install React Router with:

```bash
npm install react-router-dom
```
