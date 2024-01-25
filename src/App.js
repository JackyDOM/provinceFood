import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import HomePage from "./Components/Home/HomePage";
import AboutUs from "./Components/AboutUs/AboutUs";
import Allinfo from "./Components/Home/Allinfo";
import BodyPage from "./Components/Home/BodyPage";
import Datainfo from "./Components/Home/Datainfo";
import Information from "./Components/Home/Information";
import CafePage from "./Components/Home/CafePage";
import CafeAllinfo from "./Components/Home/CafeAllinfo";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/aboutUs" element={<AboutUs />}/>
        <Route path="/allInfo" element={<Allinfo />}/>
        <Route path="/body" element={<BodyPage />}/>
        <Route path="/data" element={<Datainfo />}/>
        <Route path="/info" element={<Information />}/>
        <Route path='/cafe' element={<CafePage />}/>
        <Route path="/cafeAllinfo" element={<CafeAllinfo />}/>
      </Routes>
    </Router>
  );
}

export default App;
