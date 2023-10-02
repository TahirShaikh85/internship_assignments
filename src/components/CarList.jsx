import React from "react";
import CarCard from "./CarCard";

const CardList = ({ cars }) => {
  return (
    <div className="grid grid-cols-3 justify-center gap-x-6">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CardList;
