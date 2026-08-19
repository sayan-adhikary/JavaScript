import React from "react";
import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "skyblue",
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      {/* <div>Home</div> */}
      {/* a => renders whole page */}
      {/* a => Link */}
      {/* <div><a href="/">Home</a></div>
        <div><a href="/products">Products</a></div>
        <div><a href="/contact">Contact</a></div>
        <div><a href="/login">Login</a></div> */}

      {/* Link => href=>to */}
      {/* <div><Link to="/">Home</Link></div>
        <div><Link to="/products">Products</Link></div>
        <div><Link to="/contact">Contact</Link></div>
        <div><Link to="/login">Login</Link></div> */}

      {/* Link => NavLink */}
      {/* isActive */}
      <div>
        <NavLink
          className={({ isActive}) => isActive ? "active" : ""}
          to="/"
        >
          Home
        </NavLink>
      </div>
      <div>
        <NavLink
        className={({ isActive}) => isActive ? "active" : ""}
          to="/products"
        >
          Products
        </NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive}) => isActive ? "active" : ""}
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive}) => isActive ? "active" : ""}
          to="/login"
        >
          Login
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
