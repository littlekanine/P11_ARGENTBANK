import React from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/img/argentBankLogo.png"
import './layout.css'

function Layout ({children}) {

    return (
        <div className="height-full">
            <nav className="main-nav">
                <Link to="/">
                    <img src={logo} className="main-nav-logo-image" alt="Logo de Argent-Bank"/>
                </Link>
                <div>
                    <Link to="/Login" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign-In
                    </Link>
                </div>
            </nav>

        <main className="height-main">{children}</main>

        <footer className="footer">
            <p className="footer-text">Copyright 2020 Argent Bank</p>
        </footer>

        </div>
    )
}

export default Layout