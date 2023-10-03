import React from "react";

export const Tab = ({tabs,activeTab,onTabClick}) => {
 
  return (
    <div className="tabs">
      {tabs?.map((city, index) => (
        <div
          key={index}
          className={`tab ${city === activeTab ? "active-tab" : ""}`}
          onClick={() => onTabClick(city)}
        >
          {city}
        </div>
      ))}
    </div>
  );
};

export default Tab;
