import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CartContextProvider from "./contexts/cart/CartContextProvider.jsx";
import ProductContextProvider from "./contexts/product/ProductContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ProductContextProvider>
    <CartContextProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </CartContextProvider>
  </ProductContextProvider>,
);
