import React from "react";
import "./styles/Header.css";
import {Link} from "react-router-dom";
import Cartwidget from "./Cartwidget"

const Header = () => (
    <header>

        <div className="title">
            <Link to="/"><img src="/images/logo.svg" alt=""/></Link>
            <Link to="/"><h2 >Nuevo Proyecto</h2></Link>

        </div>

        <div className="first-list">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li>Producto</li>
                <li>
                    <Link to="/draw">
                        Sorteos
                    </Link>
                    </li>
            </ul>
        </div>
        <div className="second-list">
            <ul >
                <li><Cartwidget/></li>
            </ul>
        </div>
    </header>
);


export default Header;