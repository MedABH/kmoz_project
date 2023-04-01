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
        <Route path="/kmoz_project/public" element={<Accueil/>}></Route>
        <Route path="/kmoz_project/contacts/public" element={<Contacts/>}></Route>
        <Route path="/kmoz_project/public/calculation" element={<Calculator/>}></Route>
        <Route path="/kmoz_project/public/about" element={<About/>}></Route>
        <Route path="/kmoz_project/public/pims" element={<Pims/>}></Route>
        <Route path="/kmoz_project/public/woodcoin" element={<Woodcoin/>}></Route>
        <Route path="/kmoz_project/public/vpn" element={<Vpn/>}></Route>
        <Route path="/kmoz_project/public/fs" element={<Fs/>}></Route>
      </Routes>
      </div>
  );
}

export default App;
