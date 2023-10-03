import React, { useState } from "react";

export const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    // setActiveCity(cities[index]);
  };
  const cities = ["Mumbai", "New York", "Paris", "London"];
  return (
    <div className="tabs">
      {cities.map((city, index) => (
        <div
          key={index}
          className={`tab ${index === activeTab ? "active-tab" : ""}`}
          onClick={() => handleTabClick(index)}
        >
          {city}
        </div>
      ))}
    </div>
  );
};
