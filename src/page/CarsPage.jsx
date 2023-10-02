import React, { useState, useEffect } from "react";
import carsData from "../assets/carData.json";
import CardList from "../components/CarList";
import Pagination from "../components/Pagination";
import { useParams } from 'react-router-dom';

const CarsPage = () => {
    const { page } = useParams();
  const [currentPage, setCurrentPage] = useState(Number(page) || 1);
  const totalPages = 10;
  const carsPerPage = 6;

  useEffect(() => {
    setCurrentPage(Number(page) || 1);
  }, [page]);

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = carsData.slice(indexOfFirstCar, indexOfLastCar);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <CardList cars={currentCars} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default CarsPage;
