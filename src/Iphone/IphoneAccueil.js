import IphoneFooterAcc from "./IphoneFooterAcc";
import { Link } from "react-router-dom";

function IphoneAccueil(){

    return(
        <div>
            <h6 style={{marginTop:'10px'}}>Our projects</h6>
            <hr style={{margin:'7px'}}/>
            <div className="container justify-content-center text-center">
                <div>
                    <ul className="navbar-nav">
                        <li className="row">
                            <img className="col-3" src="acceuil_logo\iphoneAccueil\PIMS_adjqzt.svg"></img>
                            <div className="col-6">
                                <strong>PIMS</strong>
                                <br/>
                                <small>Food delivery</small>
                            </div>
                            <button style={{border:'0', borderRadius:'20px', height:'30px'}} className="col-3 text-primary"><Link className="text-decoration-none" to="/pims">open</Link></button>
                        </li>
                        <hr style={{margin:'7px'}}/>
                        <li className="row">
                            <img className="col-3" src="acceuil_logo\iphoneAccueil\WoodCoin_ux0sbp.svg"></img>
                            <div className="col-6">
                                <strong>Woodcoin Wallet</strong>
                                <br/>
                                <small>Crypto Wallet</small>
                            </div>
                            <button style={{border:'0', borderRadius:'20px', height:'30px'}} className="col-3 text-primary"><Link className="text-decoration-none" to="/woodcoin">open</Link></button>
                        </li>
                        <hr style={{margin:'7px'}}/>
                        <li className="row">
                            <img className="col-3" src="acceuil_logo\iphoneAccueil\VPN_World_suu08e.svg"></img>
                            <div className="col-6">
                                <strong>VPN World</strong>
                                <br/>
                                <small>Secure connection</small>
                            </div>
                            <button style={{border:'0', borderRadius:'20px', height:'30px'}} className="col-3 text-primary"><Link className="text-decoration-none" to="/vpn">open</Link></button>
                        </li>
                        <hr style={{margin:'7px'}}/>
                        <li className="row">
                            <img className="col-3" src="acceuil_logo\iphoneAccueil\Foot_Skill_bqde8n.svg"></img>
                            <div className="col-6">
                                <strong>Foot Skill</strong>
                                <br/>
                                <small>Football school's personal account</small>
                            </div>
                            <button style={{border:'0', borderRadius:'20px', height:'30px'}} className="col-3 text-primary"><Link className="text-decoration-none" to="/fs">open</Link></button>
                        </li>
                        <hr style={{margin:'7px'}}/>
                    </ul>
                </div>
            </div>
            <div style={{marginTop:'130px'}}>
                <IphoneFooterAcc/>
            </div>
        </div>
    )

}

export default IphoneAccueil;