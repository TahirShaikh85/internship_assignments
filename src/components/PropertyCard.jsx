import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div className="box" key={property.id}>
      <div className="top">
        <img src={property.imageUrl} alt={property.street} height="229px" />
        <span>
          <i className="fa fa-heart-o"></i>
        </span>
      </div>
      <div className="bottom">
        <div className="location">
          <h6>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            {property.street}
          </h6>
          <span>{property.city}</span>
        </div>

        <h3>{property.address.slice(0, 65)}</h3>
        <div className="advants">
          <div>
            <div>
              <i className="fa fa-building"></i>
            </div>
            <span>{property.features[0].value} Room</span>
          </div>
          <div>
            <div>
              <i className="fa fa-building"></i>
            </div>
            <span>{property.features[1].value} Bed</span>
          </div>
          <div>
            <div>
              <i className="fa fa-bed"></i>
            </div>
            <span>{property.features[2].value} Bath</span>
          </div>
          <div>
            <div>
              <i className="fa fa-bath"></i>
            </div>
            <span>{property.features[3].value} sft</span>
          </div>
          <div>
            <div>
              <i className="fa fa-arrows-alt"></i>
            </div>
            <span>732 sft</span>
          </div>
        </div>
        <div className="price">
          <div className="price-rent">
            <span className="rent">${property.rent}</span>
            <span className="permonth">/month</span>
          </div>
          <span className="read-more-btn">Read More</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
