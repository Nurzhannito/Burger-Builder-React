import { BrowserRouter, Route, Routes } from "react-router-dom";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import CheckOut from "./containers/CheckOut/CheckOut";
import ContactData from "./containers/CheckOut/ContactData/ContactData";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<BurgerBuilder />} />

      <Route path="/checkout" element={<CheckOut/>}>
        <Route path="contact-data" element={<ContactData/>}/>
      </Route>

    </Routes>
  </BrowserRouter>
);

export default App;
