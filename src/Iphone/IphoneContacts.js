import IphoneFooter from "./IphoneFooter";
import IphoneTime from "./IphoneTime";

function IphoneContacts(){

    return(
        <div className="">
            <div style={{marginLeft:''}} className="container justify-content-center text-center">
                <img style={{width:'120px', height:'120px', marginTop:'60px'}} className='rounded-circle' src="imageTest\Screenshot.png"></img>
                <br/>
                <br/>
                <div style={{marginLeft:'1px'}} className="container row">
                <hr/>
                    <div className="col-6">
                        info contacts 1
                    </div>
                    <div className="col-6">
                        info contacts 2
                    </div>
                </div>
            </div>
            <div style={{marginTop:'230px'}}>
                <IphoneFooter/>
            </div>
        </div>
    )
}

export default IphoneContacts;