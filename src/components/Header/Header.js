import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light menu">
            <div className="container d-flex">
                <a className="navbar-brand" href="/">
                    <img className='img-fulid logo-img ' src="logos.png" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"     aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
                        <li className="nav-item mr-3">
                                <Link className="nav-link active mr-3" aria-current="page" to="/">Home</Link>
                            </li> 
                            <li className="nav-item mr-3">
                                <Link className="nav-link active mr-3" aria-current="page" to="/review">Review</Link>
                            </li> 
                            <li className="nav-item mr-3">
                                <Link className="nav-link active mr-3" aria-current="page" to="/dashboard">Dashboard</Link>
                            </li> 
                            <li className="nav-item ">
                                <Link className="nav-link active mr-3" aria-current="page" to="/blogs">Blogs</Link>
                            </li> 
                            <li className="nav-item">
                                <Link className="nav-link active " aria-current="page" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;