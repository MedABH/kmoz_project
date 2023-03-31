import FooterBlack from "../Footer/FooterBlack";
import Iphone from "../Iphone/Iphone";
import IphoneAccueil from "../Iphone/IphoneAccueil";

function Accueil() {
    return(
        <>
            <br/>
            <div className="container row">
                <div className="col-8">
                    <div>
                        <br/>
                        <br/>
                        <br/>
                        <div style={{margin:'0 auto',padding:'15px',width:'60%'}} className="container text-center">
                            <h1>A digital solution for your business</h1>
                            <h1>Full development cycle</h1>
                            <h1>Unique solutions</h1>
                            <h1>Our projects</h1>
                            <img src="acceuil_logo/Arrow.svg"  alt="test"/>
                        </div>
                    </div>
                </div>
                <div style={{display:'inline-block', position:'relative'}} className="col-4">
                    <div style={{}}>
                        <Iphone/>
                    </div>
                    <div style={{position:'absolute', textAlign:'center', backgroundColor:'#FAFAFA', margin:'0 auto', left:'0px', right:'46px', top:'9.9%', width:'266.8px', height:'557.8px', borderRadius:'37px'}}>
                        <IphoneAccueil/>
                    </div>
                </div>
            </div>
            <br/>
            <footer>
                <FooterBlack/>
            </footer>
        </>
    )
}

export default Accueil;