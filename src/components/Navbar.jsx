import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Collapse } from "bootstrap";

const Navbar = () => {
    const collapseRef = useRef(null);

    const fecharMenu = () => {
        if (!collapseRef.current) return;
        const bsCollapse = Collapse.getInstance(collapseRef.current) || new Collapse(collapseRef.current, { toggle: false });
        bsCollapse.hide();
    };

    return (
        <>
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
                            <li className="nav-item">
                                <Link to="/" className="nav-link" onClick={fecharMenu}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/portfolio" className="nav-link" onClick={fecharMenu}>Portfólio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cadastro" className="nav-link" onClick={fecharMenu}>Cadastro</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Botão extra para teste */}
            <button onClick={fecharMenu} style={{ marginTop: "100px" }}>
                Fechar menu manualmente
            </button>
        </>
    );
};

export default Navbar;
