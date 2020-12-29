import React from "react";
import "./styles/Header.css";
import {Link} from "react-router-dom";

const Header = () => (
    <header>

        <div className="title">
            <Link to="/"><img src="/images/logo.svg" alt="Deagle Skins"/></Link>
            <Link to="/"><h2 >Deagle Skins</h2></Link>

        </div>

        <div className="first-list">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li>Producto</li>
                <li>
                    <Link to="/quote">Vendé tus skins</Link>
                </li>
                <li>
                    <Link to="/draw">
                        Sorteos
                    </Link>
                    </li>
            </ul>
        </div>
        <div className="second-list">
            <ul >
                <li><Link to="/login">Iniciar Sesión</Link></li>
                <li>Registrarse</li>
            </ul>
        </div>
    </header>
);


export default Header;