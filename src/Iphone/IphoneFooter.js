import { Link } from "react-router-dom";

function IphoneFooter(){

    return(
        <nav style={{backgroundColor:'', margin:'0 auto', left:'0px', right:'46px', marginTop:'99.4px', width:'266.8px', height:'60px', borderRadius:'37px'}} className="navbar navbar-expand-lg navbar-light bg-warning">
            <div className="container collapse navbar-collapse">
                <div className="navbar-nav row">
                <Link className="nav-item nav-link col-3" to="#">Our projects</Link>
                <Link className="nav-item nav-link col-3" to="#">Contacts</Link>
                <Link className="nav-item nav-link col-3" to="#">Calculator</Link>
                <Link className="nav-item nav-link col-3" to="#">About</Link>
                </div>
            </div>
        </nav>
    )
}

export default IphoneFooter;