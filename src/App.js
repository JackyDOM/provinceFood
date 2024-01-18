import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import HomePage from "./Components/Home/HomePage";
import AboutUs from "./Components/AboutUs/AboutUs";
import Allinfo from "./Components/Home/Allinfo";
import BodyPage from "./Components/Home/BodyPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/aboutUs" element={<AboutUs />}/>
        <Route path="/allInfo" element={<Allinfo />}/>
        <Route path="/body" element={BodyPage}/>
      </Routes>
    </Router>
  );
}

export default App;
