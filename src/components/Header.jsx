
// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Estúdio Tattoo</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">Portfólio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cadastro">Cadastro</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;