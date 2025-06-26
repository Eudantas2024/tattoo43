import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Collapse } from "bootstrap";
import "./Header.css";

function Header() {
  const collapseRef = useRef(null);
  const bsCollapse = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (collapseRef.current && !bsCollapse.current) {
      bsCollapse.current = new Collapse(collapseRef.current, { toggle: false });
    }
  }, []);

  useEffect(() => {
    if (bsCollapse.current && collapseRef.current.classList.contains("show")) {
      bsCollapse.current.hide();
    }
  }, [location]);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Estúdio Tattoo <span className="logo-numero">43</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" ref={collapseRef}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/portfolio" className="nav-link">Portfólio</Link></li>
            <li className="nav-item"><Link to="/cadastro" className="nav-link">Cadastro</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
