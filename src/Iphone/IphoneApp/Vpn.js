import { Link } from "react-router-dom";
import FooterBlack from "../../Footer/FooterBlack";

function Vpn(){

    return(
        <div>
            <br/>
            <div>
                <h1 className="text-center">Images !!!</h1>
            </div>
            <hr/>
            <div className="container" style={{width:"60%"}}>
                <h1 className="text-center"><strong>VPN World</strong></h1>
                <br/>
                <h4 className="">VPN WORLD. JUST PULL DOWN!</h4>
                <br/>
                <p style={{}}>The relevance of VPN applications is growing every day. We thought that the average man in the street does not need a load in the form of server settings and other functionality. Just swipe down and you're online!</p>
                <br/>
                <p>Our service is easy to use and available on all devices. We created a mobile application for Android and iOS from scratch, and also implemented builds for Windows, macOS, Linux.</p>
                <br/>
                <p>The solution was developed by us within 22 calendar days. Now you can download the results of our work in the play store of your phone or on the website: <Link className="text-decoration-none text-dark" to="https://vpn.oldi.dev/">vpn.oldi.dev</Link></p>
                <br/>
                <p>
                <Link to="https://apps.apple.com/ru/app/vpnworld/id1624305127?l=ru"><img src="AppIphone\Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917_xqyzms.svg"></img></Link>
                </p>
                <br/>
                <p>
                    <Link className="text-decoration-none text-dark" to="https://kmoz.dev/projects/vpn.pdf"><img style={{width:'45px'}} src="AppIphone\pdf-svgrepo-com_de5k7n.svg"></img> Download the project presentation</Link>
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
                    <img className="shadow p-3 mb-5 bg-body rounded" style={{width:'80px'}} src="AppIphone\obj-c_btj7po.svg"></img>
                    </div>
                    <div className="col" style={{}}>
                        <h4 className="" style={{padding:"20px 0"}}>Objective-C</h4>
                    </div>
                </div>
                <br/>
                <div className="row" style={{height:"70px"}}>
                    <div className="col-2">
                    <img className="shadow p-3 mb-5 bg-body rounded" style={{width:'80px'}} src="AppIphone\java_mmq165.svg"></img>
                    </div>
                    <div className="col" style={{}}>
                        <h4 className="" style={{padding:"20px 0"}}>Java</h4>
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
                    <img className="shadow p-3 mb-5 bg-body rounded" style={{width:'80px'}} src="AppIphone\rust_tlxmco.svg"></img>
                    </div>
                    <div className="col" style={{}}>
                        <h4 className="" style={{padding:"20px 0"}}>Rust</h4>
                    </div>
                </div>
                <br/>
                <div className="row" style={{height:"70px"}}>
                    <div className="col-2">
                    <img className="shadow p-3 mb-5 bg-body rounded" style={{width:'80px'}} src="AppIphone\electron_s1abmn.svg"></img>
                    </div>
                    <div className="col" style={{}}>
                        <h4 className="" style={{padding:"20px 0"}}>Electron</h4>
                    </div>
                </div>
                <br/>
                <div className="row" style={{height:"70px"}}>
                    <div className="col-2">
                    <img className="shadow p-3 mb-5 bg-body rounded" style={{width:'80px'}} src="AppIphone\spring_uidex1.svg"></img>
                    </div>
                    <div className="col" style={{}}>
                        <h4 className="" style={{padding:"20px 0"}}>Spring</h4>
                    </div>
                </div>
                <br/>
                <div className="row" style={{height:"95px"}}>
                    <div className="col-2">
                    <img className="shadow p-3 mb-5 bg-body rounded" style={{width:'80px'}} src="AppIphone\mobx_bh2afa.svg"></img>
                    </div>
                    <div className="col" style={{}}>
                        <h4 className="" style={{padding:"20px 0"}}>MobX-state-tree</h4>
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
                    <h2 style={{textAlign:"right"}} className="">Development cost: from 15 000 $</h2>
                </div>
                <br/>
            </div>
            <FooterBlack/>
        </div>
    )
}

export default Vpn;