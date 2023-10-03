import React, { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import properties from "../assets/data.json";
import Tab from "../components/Tab";
import Header from "../components/Header";

function PropertyLists() {
  const [visibleProperties, setVisibleProperties] = useState(3);
  const [activeTab, setActiveTab] = useState("Mumbai");

  const cities = ["Mumbai", "New York", "Paris", "London"];

  const loadMoreProperties = () => {
    setVisibleProperties((prevVisible) => prevVisible + 3);
  };

  const filterProperties = () => {
    return properties
      .filter((property) => property.city === activeTab)
      .slice(0, visibleProperties);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setVisibleProperties(3); // Reset visible properties when switching tabs
  };

  return (
    <>
    <Header/>
      <Tab tabs={cities} activeTab={activeTab} onTabClick={handleTabClick} />
      <div className="property-list">
        <div className="property-card-container">
          {filterProperties().map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        {visibleProperties < properties.length && (
          <button className="showMore-btn" onClick={loadMoreProperties}>
            <i className="fa fa-hourglass-end" aria-hidden="true"></i> Show More
          </button>
        )}
      </div>
    </>
  );
}

export default PropertyLists;
