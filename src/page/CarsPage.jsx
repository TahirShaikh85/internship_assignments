import React, { useEffect } from "react";
import CardList from "../components/CarList";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  filterCars,
  selectFilteredCars,
  selectCurrentPage,
  setCurrentPage,
  selectSearchQuery,
} from "../app/carSlice";

const CarsPage = () => {
  const { page } = useParams();

  const totalPages = 10;
  const carsPerPage = 6;

  const filteredCars = useSelector(selectFilteredCars);
  const currentPage = useSelector(selectCurrentPage);
  const searchQuery = useSelector(selectSearchQuery);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterCars());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCurrentPage(Number(page) || 1));
  }, [page]);

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const handlePageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  return (
    <>
      {searchQuery.length >= 3 && (
        <div>
          <span>
            <b className="mr-2">Showing results: </b>
            {searchQuery}
          </span>{" "}
          <br />
          <span>
            {filteredCars.length > 0
              ? filteredCars.length + " Found"
              : "No Cars Found"}
          </span>
        </div>
      )}
      <CardList cars={currentCars} />
      
      {filteredCars.length > 6 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default CarsPage;
