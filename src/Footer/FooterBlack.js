import { Link } from "react-router-dom";

function FooterBlack() {
    return(
        <div style={{}} className="">
            <div style={{backgroundColor:'black',color:'white'}} className="" id="footer">
                <div style={{}} className="container p-4">
                    <div style={{}} className="row">
                        <div className="col-3">
                            <Link className="nav-link active" aria-current="page" to="/">
                                <img style={{width:'100px', padding:'15px'}} src="logo_white.svg"></img>
                            </Link>
                        </div>
                        <div className="col-3">
                            <strong>Navigation</strong>
                            <br/>
                            <small><Link className="text-white text-decoration-none" to='/'>Main</Link>
                            <br/>
                            <Link className="text-white text-decoration-none" to='/contacts'>Contacts</Link>
                            <br/>
                            <Link className="text-white text-decoration-none" to='/calculation'>Calculator</Link>
                            <br/>
                            <Link className="text-white text-decoration-none" to='/about'>About</Link></small>
                        </div>
                        <div className="col-3">
                            <strong>Contacts</strong>
                            <br/>
                            <small><Link className="text-white text-decoration-none" to='tel:+12082025937'>+1 (208) 202 5937</Link>
                            <br/>
                            <Link className="text-white text-decoration-none" to='mailto:contact@dup.company'>contact@dup.company</Link></small>
                        </div>
                        <div className="col-3">
                            <strong>Address</strong>
                            <br/>
                            <small>Middletown, Delaware
                            <br/>
                            651 N Broad St, Suite 201, 19709</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterBlack;