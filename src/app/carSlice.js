import { createSlice } from "@reduxjs/toolkit";
import carsData from "../assets/carData.json";

const initialState = {
  carsData: carsData,
  searchQuery: "",
  filteredCars: [],
  currentPage: 1,
};

export const counterSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    filterCars: (state) => {
      state.filteredCars = state.carsData.filter((car) => {
        if (car && car.carName) {
          return car.carName.toLowerCase().includes(state.searchQuery.toLowerCase());
        }
        return false;
      });
      state.currentPage = 1;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setSearchQuery, filterCars, setCurrentPage } = counterSlice.actions;

export const selectCarsData = (state) => state.cars.carData;
export const selectSearchQuery = (state) => state.cars.searchQuery;
export const selectFilteredCars = (state) => state.cars.filteredCars;
export const selectCurrentPage = (state) => state.cars.currentPage;

export default counterSlice.reducer;
