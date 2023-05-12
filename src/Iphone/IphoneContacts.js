import { Link } from "react-router-dom";
import IphoneFooterCon from "./IphoneFooterCon";

function IphoneContacts(){

    return(
        <div className="" style={{}}>
            <div style={{}} className="container justify-content-center text-center">
                <img style={{width:'80px', height:'80px', marginTop:'30px'}} className='rounded-circle' src="contactimg\Z__szk1bmm0_lmznxs.jpg"></img>
                <br/>
                <h5 style={{marginTop:'10px'}}>Karim O.</h5>
                <br/>
                <div className="" style={{backgroundColor:'white', borderRadius:'12px',position:'relative', height:'50px'}}>
                    <p style={{position:'absolute', marginLeft:'20px', fontSize:'10px'}}><strong>phone</strong></p>
                    <br/>
                    <p style={{position:'absolute', marginLeft:'20px', fontSize:'10px'}}><strong><Link className="text-decoration-none" to='tel:+12082025937'>+1 (208) 202-59-37</Link></strong></p>
                </div>
                <br/>
                <div className="" style={{backgroundColor:'white', borderRadius:'12px',position:'relative', height:'50px'}}>
                    <p style={{position:'absolute', marginLeft:'20px', fontSize:'10px'}}><strong>email</strong></p>
                    <br/>
                    <p style={{position:'absolute', marginLeft:'20px', fontSize:'10px'}}><strong><Link className="text-decoration-none" to='mailto:contact@dup.company'>contact@dup.company</Link></strong></p>
                </div>
                <br/>
                <div className="" style={{backgroundColor:'white', borderRadius:'12px',position:'relative', height:'100px'}}>
                    <div className="row">
                        <div className="col-6" style={{position:'relative'}}>
                            <p style={{position:'absolute', marginLeft:'20px', fontSize:'10px'}}><strong>address</strong></p>
                            <br/>
                            <p style={{position:'absolute', marginLeft:'20px', fontSize:'10px', left:'0px'}}><strong>Middletown Delaware 651 N Broad St, Suite 201, 19709</strong></p>
                        </div>
                        <div className="col-6">
                            <img style={{width:'80px', height:'80px', marginTop:'10px', borderRadius:'12px'}} src="contactimg\Screen_Shot_2023-02-27_at_8.01.40_PM_n44q2s.png"/>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{transform:'translate(0.0%,-38%)'}}>
                <IphoneFooterCon/>
            </div>
        </div>
    )
}

export default IphoneContacts;