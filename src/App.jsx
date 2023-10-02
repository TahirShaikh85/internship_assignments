import "./App.css";
import { useState } from "react";
import CardList from "./components/CarList";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import carsData from "./assets/carData.json";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;
  const totalPages = 10;

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = carsData.slice(indexOfFirstCar, indexOfLastCar);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar />
      <CardList cars={currentCars} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default App;
