import { Route,Routes } from "react-router-dom";
import MenuBar from "./menu/MenuBar";
import About from "./Presentation/About";
import Accueil from "./Presentation/Accueil";
import Calculator from "./Presentation/Calculator";
import Contacts from "./Presentation/Contacts";
import Pims from "./Iphone/IphoneApp/Pims";
import Woodcoin from "./Iphone/IphoneApp/Woodcoin";
import Vpn from "./Iphone/IphoneApp/Vpn";
import Fs from "./Iphone/IphoneApp/Fs";

function App() {
  return (
    <div style={{backgroundColor:'#FAFAFA'}}>
      <MenuBar/>
      <br/>
      <Routes>
        <Route path="/" element={<Accueil/>}></Route>
        <Route path="/contacts" element={<Contacts/>}></Route>
        <Route path="/calculation" element={<Calculator/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/pims" element={<Pims/>}></Route>
        <Route path="/woodcoin" element={<Woodcoin/>}></Route>
        <Route path="/vpn" element={<Vpn/>}></Route>
        <Route path="/fs" element={<Fs/>}></Route>
      </Routes>
      </div>
  );
}

export default App;
