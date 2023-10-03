import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import properties from "../assets/data.json";

function PropertyLists() {
  const [visibleProperties, setVisibleProperties] = useState(3);

  const loadMoreProperties = () => {
    setVisibleProperties((prevVisible) => prevVisible + 3);
  };

  return (
    <div className="property-list">
      <div class="property-card-container">
        {properties.slice(0, visibleProperties).map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      {visibleProperties < properties.length && (
        <button onClick={loadMoreProperties}>Show More</button>
      )}
    </div>
  );
}

export default PropertyLists;
