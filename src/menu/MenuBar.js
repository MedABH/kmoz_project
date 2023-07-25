import React from "react"
import { Link } from "react-router-dom"


function MenuBar() {
    return(
        <React.Fragment>
            <nav style={{width:'100%', backdropFilter:'blur(8px)'}} className="fixed-top navbar navbar-expand-lg bg-body-tertiary text-center justify-content-center pt-0">
                <div style={{backdropFilter:'blur(8px)'}} className="nav justify-content-center text-center pt-0">
                    <Link className="nav-link active px-5" aria-current="page" to="/">
                        <img style={{width:'80px'}} src="logo.svg" alt="Logo"/>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link active px-5" aria-current="page" to="/contacts"><small>Contacts</small></Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active px-5" to="/calculation"><small>Calculator</small></Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active px-5" to="/about"><small>About</small></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
};

export default MenuBar;