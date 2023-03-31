import { Route,Routes } from "react-router-dom";
import About from "../Presentation/About";
import Accueil from "../Presentation/Accueil";
import Contacts from "../Presentation/Contacts";
import FooterBlack from "../Footer/FooterBlack";

function AppFooter() {
  return (
    <>
      <Routes>
        <Route path="/appfooter/accueil" element={<Accueil/>}></Route>
        <Route path="/appfooter/contacts" element={<Contacts/>}></Route>
        <Route path="/appfooter/about" element={<About/>}></Route>
      </Routes>
      <FooterBlack/>
    </>
  );
}

export default AppFooter;
