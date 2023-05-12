import { Link } from "react-router-dom";

function IphoneFooterCon(){

    return(
        <nav style={{backgroundColor:'', margin:'0 auto', left:'0px', right:'46px', marginTop:'99.4px', width:'266.8px', height:'60px', borderRadius:'37px', backgroundColor:'#DCDCDC'}} className="navbar navbar-expand-lg navbar-light">
            <div className="container collapse navbar-collapse">
                <div className="navbar-nav row">
                    <div className="nav-item col-3 m-0 mt-2">
                        <Link style={{}} className="nav-link" to="/"><img style={{}} className="" src="iphoneFooterImg\projects.svg"/><br/><strong style={{fontSize:'0.5em', lineHeight:''}}>OurProjects</strong></Link>
                    </div>
                    <div className="nav-item col-3 m-0 mt-2">
                    <Link className="nav-link" to="/contacts"><img style={{}} src="iphoneFooterImg\contacts-blue.svg"/><br/><strong style={{fontSize:'0.5em'}}>Contacts</strong></Link>
                    </div>
                    <div className="nav-item col-3 m-0 mt-2">
                    <Link className="nav-link" to="/calculation"><img style={{}} src="iphoneFooterImg\calculation.svg"/><br/><strong style={{fontSize:'0.5em'}}>Calculator</strong></Link>
                    </div>
                    <div className="nav-item col-3 m-0 mt-2">
                    <Link className="nav-link" to="/about"><img style={{}} src="iphoneFooterImg\about.svg"/><br/><strong style={{fontSize:'0.5em'}}>About</strong></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default IphoneFooterCon;