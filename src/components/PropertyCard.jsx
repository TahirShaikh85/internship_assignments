import React from "react";

const PropertyCard = ({ property }) => {
  return (
      <div class="box" key={property.id}>
        <div class="top">
          <img src={property.imageUrl} alt={property.street} />
          <span>
            <i class="fa fa-heart-o"></i>
          </span>
        </div>
        <div class="bottom">
          <h6>
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            {property.street}
          </h6>
          <h3>{property.address}</h3>
          <p>
            Enchanting three bedrooms, three bath home with spacious one
            bedroom, one bath...
          </p>
          <div class="advants">
            {property.features.map((feature, index) => {
              <div key={index}>
                <div>
                  <i class={`fa fa-${feature.key}`}></i>
                </div>
                <span>{feature.value}{feature.key}</span>
              </div>
            })}
            {/* <div>
              <div>
                <i class="fa fa-building"></i>
              </div>
              <span>3 Rooms</span>
            </div>
            <div>
              <div>
                <i class="fa fa-bed"></i>
              </div>
              <span>4 Bed</span>
            </div>
            <div>
              <div>
                <i class="fa fa-bath"></i>
              </div>
              <span>1 Bath</span>
            </div>
            <div>
              <div>
                <i class="fa fa-arrows-alt"></i>
              </div>
              <span>732 sft</span>
            </div> */}
          </div>
          <div class="price">
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
