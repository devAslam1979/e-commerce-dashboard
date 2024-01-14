import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isLogedIn=localStorage.getItem('user')
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          {isLogedIn?<Link>Logout</Link>:<Link to="/signup">Sign up</Link>}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
