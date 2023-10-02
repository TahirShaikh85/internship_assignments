import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import CarsPage from "./page/CarsPage";

function App() {
 
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/page/:page" element={<CarsPage/>} />
        <Route path="/" element={<CarsPage/>} />
      </Routes>
    </>
  );
}

export default App;
