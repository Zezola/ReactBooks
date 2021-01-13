import React from 'react';
import {Link} from 'react-router-dom';
function Navbar() {
    return (
     
            <nav className="navbar navbar-expand-lg">
                <div>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/livros/create" className="nav-link">Novo livro</Link>
                        </li>
                    </ul>
                </div>
            </nav>
     
    )
}

export default Navbar;