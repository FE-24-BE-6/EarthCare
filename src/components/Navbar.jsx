import { Link, NavLink } from "react-router-dom"
import "../css/navbar.css"
import { Dropdown } from "bootstrap"
import logoNav from "../assets/logo-nav.png"

export const Navbar = () => {
    return (
        <>
            <header>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" data-bs-theme="dark">
                    <div className="container">
                        <NavLink className="navbar-brand text-white" to="/">
                            <img src={logoNav} className="logo-nav" alt="logo navbar" height="50" />
                            &nbsp;EarthCare
                        </NavLink>
                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarTogglerDemo02"
                            aria-controls="navbarTogglerDemo02" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-lg-center text-center">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/" activeClassName="active">Home</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Content
                                    </a>
                                    <ul className="dropdown-menu animate slideIn dropdown-menu-dark">
                                        <li>
                                            <Link className="dropdown-item" to="/event">Event</Link>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/article">Article</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/about" activeClassName="active">About</NavLink>
                                </li>
                                <li className="nav-item me-lg-4">
                                    <NavLink className="nav-link" to="/contact" activeClassName="active">Contact Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">
                                        <button className="btn btn-primary px-3 border-0" type="submit">Login</button>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}