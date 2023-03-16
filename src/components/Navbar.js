import React from "react";
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.navMode} bg-${props.navMode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    {props.title}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                {props.aboutText}
                            </a>
                        </li>
                    </ul>
                    <div className="mx-3 mb-2 gap-2" aria-label="Basic mixed styles example">
                        <button type="button" onClick={() => props.changeTheme("primary")} className="btn mx-2 btn-primary border-primary"></button>
                        <button type="button" onClick={() => props.changeTheme("secondary")} className="btn mx-2 btn-secondary border-secondary"></button>
                        <button type="button" onClick={() => props.changeTheme("success")} className="btn mx-2 btn-success border-success"></button>
                        <button type="button" onClick={() => props.changeTheme("danger")} className="btn mx-2 btn-danger border-danger"></button>
                        <button type="button" onClick={() => props.changeTheme("warning")} className="btn mx-2 btn-warning border-warning"></button>
                        <button type="button" onClick={() => props.changeTheme("info")} className="btn mx-2 btn-info border-info"></button>
                        <button type="button" onClick={() => props.changeTheme("light")} className="btn mx-2 btn-light border-dark-subtle"></button>
                        <button type="button" onClick={() => props.changeTheme("dark")} className="btn mx-2 btn-dark border-light-subtle"></button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
}
