import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        
        <nav className="menu">

            {/* Refatorar em casa! */}
            <Link to="/">
                <i className="fa fa-home"></i> {props.n1}
            </Link>
            <Link to="/CriarContatos">
                <i className="fa fa-plus"></i> {props.n2}
            </Link>
            <Link to="/ShowContatos">
                <i className="fa fa-users"></i> {props.n3}
            </Link>
            
        </nav>
    </aside>