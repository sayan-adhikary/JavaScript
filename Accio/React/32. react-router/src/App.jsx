import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router";

import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Product from "./pages/Product.jsx";
import Navbar from './components/Navbar.jsx'
import ResourceNotFound from "./pages/ResourceNotFound.jsx";

function App() {
  const [cnt, setCnt] = useState(0);
  return (
    <>
      {/* <Home></Home>
      <Product></Product>
      <Contact></Contact>
      <Login></Login> */}

      {/* <Navbar /> */}
      <Navbar />
      <h2>cnt : {cnt}</h2>
      <button onClick={()=>setCnt(cnt+1)}>INC</button>

    {/* url - path, and the element or page or component you want to render  */}
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/products"} element={<Product />}></Route>
        <Route path={"/contact"} element={<Contact />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
        {/* Prefer this route at the end */}
        {/* What will happen if not the end */}
        <Route path={"/*"} element={<ResourceNotFound/>}></Route>
        {/* <Route path={"/*"} element={<Navigate to="/" />}></Route> */}
      </Routes>


        {/* <Footer /> */}



    </>
  );
}

export default App;
