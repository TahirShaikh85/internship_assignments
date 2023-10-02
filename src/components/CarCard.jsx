import React from 'react'

const CarCard = ({car}) => {
    return (
            // {/* <!-- card 1 --> */}
            <div className="py-4 max-w-sm">
                <div className="max-w-sm bg-transparent border-2 border-white rounded-2xl shadow-md dark:bg-gray-800 dark:border-gray-700">
                    {/* image */}
                    <div className='car-image p-2'>
                        <img className="rounded-2xl object-fill border h-48 w-full" loading='lazy' src={car.imageUrl} alt={car.carName} />
                    </div>
                    {/* heading */}
                    <div className="flex justify-between m-4">
                        <h3 className='font-bold text-lg'>{car.carName}</h3>
                        <div className="flex justify-center items-center m-1 px-3 py-1 border-2 border-dotted border-blue-400 rounded-full  text-base text-gray-700 font-medium">
                            <div className="flex-initial max-w-full leading-none text-xs font-normal">{car.year}</div>
                        </div>
                    </div>

                    {/* icons */}
                    <div className="grid grid-cols-2 gap-y-4 justify-start m-4 pb-8 border-b-2">
                        <div className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#60A5FA" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>
                            <span className='ml-3'>{car.passengerCapacity} People</span>
                        </div>
                        <div className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#60A5FA" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                            </svg>
                            <span className='ml-3'>{car.engineType}</span>
                        </div>
                        <div className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#60A5FA" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className='ml-3'>{car.costPerKilometer} Km / 1-litre</span>
                        </div>
                        <div className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#60A5FA" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
                            </svg>
                            <span className='ml-3'>{car.transmissionType}</span>
                        </div>
                    </div>

                    {/* call to action */}
                    <div className="flex items-baseline justify-between m-4 pb-4">
                        <p className="flex items-baseline mt-6 text-dark-600">
                            <span className="text-2xl tracking-tight">${car.rentPerMonth}</span>
                            <span className="ml-1 text-sm font-semibold text-neutral-600">/month</span>
                        </p>
                        <div className='flex'>

                            <button href="#" className="text-white bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-lg text-sm px-3 py-2 mr-4 text-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#60A5FA" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            </button>
                            <button href="#" className="text-white bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-lg text-sm px-5 py-2.5 text-center">Rent Now</button>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default CarCard