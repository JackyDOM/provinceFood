import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import HomePage from "./Components/Home/HomePage";
import AboutUs from "./Components/AboutUs/AboutUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/aboutUs" element={<AboutUs />}/>
      </Routes>
    </Router>
  );
}

export default App;
