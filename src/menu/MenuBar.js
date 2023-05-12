import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react";


function MenuBar() {

const dropdownItem=[
    {lang:"englais", value:"englais"},
    {lang:"francais", value:"francais"},
    {lang:"Arab", value:"arab"}

];
const [value, setValue] = useState('');
     
      const handleChange = (event) => {
     
        setValue(event.target.value);
     
      };
    return(
        <React.Fragment>
            <nav style={{width:'100%', backdropFilter:'blur(8px)'}} className="fixed-top navbar navbar-expand-lg bg-body-tertiary text-center justify-content-center pt-0">
                <div style={{backdropFilter:'blur(8px)'}} className="nav justify-content-center text-center pt-0">
                    <Link className="nav-link active px-5" aria-current="page" to="/">
                        <img style={{width:'80px'}} src="logo.svg"></img>
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
                            
                            <li className="nav-item px-5">
                                <div>
                                <small><select className="nav-link text-dark" style={{border:"0", backgroundColor:"#FAFAFA"}} value={value} onChange={handleChange}>
                                    {dropdownItem.map((item) => (<option value={item.value}>{item.lang}</option>))}
                                    </select></small>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
};

export default MenuBar;