import "./App.css";
import { Routes, Route } from "react-router-dom";
import PropertyLists from "./pages/PropertyLists";
import PropertyDetail from "./pages/PropertyDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PropertyLists />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
      </Routes>
    </>
  );
}

export default App;
