import React from 'react';
import Social from '../Social/Social';
import "./Header.css";
import Logo from "../PreLoader/lost-loch.jpeg"

const Header = () => {
    return (
        <>
            <div className="headWrapper row">
                <button className="btn btn-secondary col-sm-4 col-md-2 col-lg-1 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">&#9776;</button>
                <img className="img-fluid col-sm-4 col-md-6 col-lg-3" src={Logo} alt="" />
                <Social className="col-sm-4 col-md-4 col-lg-8" />
            </div>
            <div className="d-none d-md-block adjHtHead"></div>
            <div className="offcanvas offcanvas-start sideBar" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
                <div className="offcanvas-header">
                    <button type="button" className="closeCanvas" data-bs-dismiss="offcanvas" aria-label="Close">X</button>
                </div>
                <div className="offcanvas-body">
                    <nav className="nav flex-column">
                        <a className="nav-link" aria-current="page" href="#">Shop</a>
                        <a className="nav-link" href="#">About Us</a>
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Products
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Eeno Gin</a></li>
                            <li><a className="dropdown-item" href="#">Murmichan</a></li>
                            <li><a className="dropdown-item" href="#">Haroosh</a></li>
                            <li><a className="dropdown-item" href="#">Singular Series</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;