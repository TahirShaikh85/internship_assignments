import React from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery, filterCars } from "../app/carSlice";

export default function Navbar() {

    const dispatch = useDispatch();

    const handleSearchQuery = (event)=>{
        // if(event.key === 'Enter'){
            dispatch(setSearchQuery(event.target.value));
            dispatch(filterCars());
        // }
    }
    return (
        <>
            <nav className="relative mt-3 mb-6 flex flex-wrap items-center justify-start px-2 py-3 gap-x-4 shadow-md border-none rounded-xl">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-start gap-x-8 ">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <div className="relative mx-auto text-gray-600">
                            <input className="border-2 border-gray-200 bg-white h-10 px-8 pr-20 rounded-2xl text-sm focus:outline-none"
                                type="search" name="search" placeholder="Search..." onChange={handleSearchQuery} />
                            <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>

                            </button>
                        </div>
                    </div>
                    <div className="select-boxes flex gap-x-8">
                        <select name="releavance" className="bg-transparent text-gray-700" id="releavance">
                            <option value="releavance">Releavance</option>
                            <option value="option2">option2</option>
                            <option value="option3">option3</option>
                            <option value="option4">option4</option>
                        </select>

                        <select name="brands" className="bg-transparent text-gray-700" id="brands">
                            <option value="brands">All brands</option>
                            <option value="Audi">Audi</option>
                            <option value="BMW">BMW</option>
                            <option value="Mercedes">Mercedes</option>
                            <option value="Lamborghini">Lamborghini</option>
                            <option value="Porshe">Porshe</option>
                        </select>
                    </div>
                </div>
            </nav>
        </>
    );
}