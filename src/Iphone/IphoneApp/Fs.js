import { Link } from "react-router-dom";
import FooterBlack from "../../Footer/FooterBlack";

function Fs(){

    return(
        <div>
            <br/>
            <div>
                <h1 className="text-center">Images !!!</h1>
            </div>
            <hr/>
            <div className="container" style={{width:"60%"}}>
                <h1 className="text-center"><strong>Foot Skill</strong></h1>
                <br/>
                <h4 className="">FOOT SKILL: Soccer coach</h4>
                <br/>
                <p style={{}}>This case is interesting because we have developed our own IT infrastructure for our friends from Foot Skill, which includes: a web application for school students, a web interface for trainers, a native application for iOS, a native application for Android.</p>
                <br/>
                <p>Foot Skill is the first school of football equipment in the south of Russia. Today, parents and students of the school can track the statistics of football testing and compare it with the success of their peers. A loyalty and achievement program has been implemented, and the school schedule can be easily viewed in the mobile application.</p>
                <br/>
                <p>Our service is easy to use and available on all devices. The solution was developed by us for 6 months. Now you can download the results of our work in the play store of your phone or look at the website: <Link className="text-decoration-none text-dark" to="https://krasnodar-fs.ru/">krasnodar-fs.ru</Link></p>
                <br/>
                <p>
                <Link to="https://apps.apple.com/ru/app/foot-skill/id1633652809?l=en"><img style={{height:"40px"}} src="AppIphone\Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917_xqyzms.svg"></img></Link>
                <Link to="https://play.google.com/store/apps/details?id=com.oldi.football"><img style={{marginLeft:"15px", height:"40px"}} src="AppIphone\google-play-badge_clmwsc.svg"></img></Link>
                </p>
                <br/>
                <h3 className="text-center"><strong>Technologies</strong></h3>
                <br/>
                <div className="row" style={{height:"70px"}}>
                    <div className="col-2">
                    <img className="shadow p-3 mb-5 bg-body rounded" style={{width:'80px'}} src="AppIphone\figma_p5dewl.svg"></img>
                    </div>
                    <div className="col" style={{}}>
                        <h4 className="" style={{padding:"20px 0"}}>Figma</h4>
                    </div>
                </div>
                <br/>
                <div className="row" style={{height:"70px"}}>
                    <div className="col-2">
                    <img className="shadow p-3 mb-5 bg-body rounded" style={{width:'80px'}} src="AppIphone\Strapi_pkwo8z.svg"></img>
                    </div>
                    <div className="col" style={{}}>
                        <h4 className="" style={{padding:"20px 0"}}>Strapi</h4>
                    </div>
                </div>
                <br/>
                <div className="row" style={{height:"70px"}}>
                    <div className="col-2">
                    <img className="shadow p-3 mb-5 bg-body rounded" style={{width:'80px'}} src="AppIphone\react-admin_wbfzjb.svg"></img>
                    </div>
                    <div className="col" style={{}}>
                        <h4 className="" style={{padding:"20px 0"}}>React Admin</h4>
                    </div>
                </div>
                <br/>
                <div className="row" style={{height:"70px"}}>
                    <div className="col-2">
                    <img className="shadow p-3 mb-5 bg-body rounded" style={{width:'80px'}} src="AppIphone\js_j8f0hc.svg"></img>
                    </div>
                    <div className="col" style={{}}>
                        <h4 className="" style={{padding:"20px 0"}}>JavaScript</h4>
                    </div>
                </div>
                <br/>
                <div className="row" style={{height:"70px"}}>
                    <div className="col-2">
                    <img className="shadow p-3 mb-5 bg-body rounded" style={{width:'80px'}} src="AppIphone\react_botlo0.svg"></img>
                    </div>
                    <div className="col" style={{}}>
                        <h4 className="" style={{padding:"20px 0"}}>React</h4>
                    </div>
                </div>
                <br/>
                <div className="row" style={{height:"70px"}}>
                    <div className="col-2">
                    <img className="shadow p-3 mb-5 bg-body rounded" style={{width:'80px'}} src="AppIphone\axios_kff2hf.svg"></img>
                    </div>
                    <div className="col" style={{}}>
                        <h4 className="" style={{padding:"20px 0"}}>Axios</h4>
                    </div>
                </div>
                <br/>
                <div className="row" style={{height:"70px"}}>
                    <div className="col-2">
                    <img className="shadow p-3 mb-5 bg-body rounded" style={{width:'80px'}} src="AppIphone\swift_dsfbkk.svg"></img>
                    </div>
                    <div className="col" style={{}}>
                        <h4 className="" style={{padding:"20px 0"}}>Swift</h4>
                    </div>
                </div>
                <br/>
                <div className="row" style={{height:"70px"}}>
                    <div className="col-2">
                    <img className="shadow p-3 mb-5 bg-body rounded" style={{width:'80px'}} src="AppIphone\SwiftUi_eu1nvj.svg"></img>
                    </div>
                    <div className="col" style={{}}>
                        <h4 className="" style={{padding:"20px 0"}}>SwiftUI</h4>
                    </div>
                </div>
                <br/>
                <div className="row" style={{height:"95px"}}>
                    <div className="col-2">
                    <img className="shadow p-3 mb-5 bg-body rounded" style={{width:'80px'}} src="AppIphone\ruby_lz38oc.svg"></img>
                    </div>
                    <div className="col" style={{}}>
                        <h4 className="" style={{padding:"20px 0"}}>Ruby</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                    <img className="shadow p-3 mb-5 bg-body rounded" style={{width:'80px'}} src="AppIphone\java_mmq165.svg"></img>
                    </div>
                    <div className="col" style={{}}>
                        <h4 className="" style={{padding:"20px 0"}}>Java</h4>
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

export default Fs;