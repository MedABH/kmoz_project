import { Link } from "react-router-dom";
import FooterBlack from "../../Footer/FooterBlack";

function Woodcoin(){

    return(
        <div>
            <br/>
            <div>
                <h1 className="text-center">Images !!!</h1>
            </div>
            <hr/>
            <div className="container" style={{width:"60%"}}>
                <h1 className="text-center"><strong>Woodcoin Wallet</strong></h1>
                <br/>
                <h4 className="">Woodcoin: Crypto Currency You Can Rely On!</h4>
                <br/>
                <p style={{}}>A multi-currency crypto wallet is a challenge that our team has accepted. The task was to write a cross-platform solution for storing LOG coins and other cryptocurrencies. 1 month was allotted for the task.</p>
                <br/>
                <p>We have created a mobile application for Android and iOS from scratch. Users of the application can store/send/receive cryptocurrency LOG and other currencies directly on the phone. During the work, the developers had to add the Woodcoin software package for integration with the mobile application.</p>
                <br/>
                <p>The solution was developed by us within 32 calendar days. Now you can download the results of our work in the play store of your phone.</p>
                <br/>
                <p>
                <Link to="https://apps.apple.com/ru/app/woodcoinwallet/id1618671502?l=ru"><img style={{height:"40px"}} src="AppIphone\Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917_xqyzms.svg"></img></Link>
                <Link to="https://play.google.com/store/apps/details?id=com.hermesus.woodcoin"><img style={{marginLeft:"15px", height:"40px"}} src="AppIphone\google-play-badge_clmwsc.svg"></img></Link>
                </p>
                <br/>
                <p>
                    <Link className="text-decoration-none text-dark" to="https://kmoz.dev/projects/woodcoin.pdf"><img style={{width:'45px'}} src="AppIphone\pdf-svgrepo-com_de5k7n.svg"></img> Download the project presentation</Link>
                </p>
                <br/>
                <h3 className="text-center"><strong>Technologies</strong></h3>
                <br/>
                <div className="row" style={{height:"70px"}}>
                    <div className="col-2">
                    <img className="shadow p-3 mb-5 bg-body rounded" style={{width:'80px'}} src="AppIphone\typescript_tvnqfy.svg"></img>
                    </div>
                    <div className="col" style={{}}>
                        <h4 className="" style={{padding:"20px 0"}}>TypeScript</h4>
                    </div>
                </div>
                <br/>
                <div className="row" style={{height:"70px"}}>
                    <div className="col-2">
                    <img className="shadow p-3 mb-5 bg-body rounded" style={{width:'80px'}} src="AppIphone\react_botlo0.svg"></img>
                    </div>
                    <div className="col" style={{}}>
                        <h4 className="" style={{padding:"20px 0"}}>React Native</h4>
                    </div>
                </div>
                <br/>
                <div className="row" style={{height:"70px"}}>
                    <div className="col-2">
                    <img className="shadow p-3 mb-5 bg-body rounded" style={{width:'80px'}} src="AppIphone\mobx_bh2afa.svg"></img>
                    </div>
                    <div className="col" style={{}}>
                        <h4 className="" style={{padding:"20px 0"}}>MobX-state-tree</h4>
                    </div>
                </div>
                <br/>
                <div className="row" style={{height:"70px"}}>
                    <div className="col-2">
                    <img className="shadow p-3 mb-5 bg-body rounded" style={{width:'80px'}} src="AppIphone\c_lc9hud.svg"></img>
                    </div>
                    <div className="col" style={{}}>
                        <h4 className="" style={{padding:"20px 0"}}>C++</h4>
                    </div>
                </div>
                <br/>
                <div className="row" style={{height:"95px"}}>
                    <div className="col-2">
                    <img className="shadow p-3 mb-5 bg-body rounded" style={{width:'80px'}} src="AppIphone\bitcore_y8l9ip.svg"></img>
                    </div>
                    <div className="col" style={{}}>
                        <h4 className="" style={{padding:"20px 0"}}>BitCore</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                    <img className="shadow p-3 mb-5 bg-body rounded" style={{width:'80px'}} src="AppIphone\figma_p5dewl.svg"></img>
                    </div>
                    <div className="col" style={{}}>
                        <h4 className="" style={{padding:"20px 0"}}>Figma</h4>
                    </div>
                </div>
                <div>
                    <h2 style={{textAlign:"right"}} className="">Development cost: from 50 000 $</h2>
                </div>
                <br/>
            </div>
            <FooterBlack/>
        </div>
    )
}

export default Woodcoin;