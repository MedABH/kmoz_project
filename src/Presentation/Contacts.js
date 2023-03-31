import FooterBlack from "../Footer/FooterBlack";
import IphoneContacts from "../Iphone/IphoneContacts";
import IphoneTime from "../Iphone/IphoneTime";

function Contacts() {
    return(
        <>
            <br/>
            <div className="container">
                <div className="container text-center">
                    <img style={{width:'300px',transform:'translate(0%, -0%)'}} src="test.svg" alt="Iphone"></img>
                    <div style={{ transform:'translate(-19%, -2650%)'}}>
                        <IphoneTime/>
                    </div>
                    <div style={{position:'absolute', textAlign:'center', backgroundColor:'#FAFAFA', margin:'0 auto', left:'2.6px', right:'0', top:'14.8%', width:'266.8px', height:'557.5px', borderRadius:'50px'}}>
                        <IphoneContacts/>
                    </div>
                </div>
            </div>
            <br/>
                <FooterBlack/>
        </>
    )
}

export default Contacts;