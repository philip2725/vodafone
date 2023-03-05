import logo from "../assets/vodafone-logo-vector.png";
import user from "../assets/user.png";
import React from "react";
import GoogleMapReact from "google-map-react";

import "./Map.css";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map() {
  const defaultProps = {
    center: {
      lat: 51.235691,
      lng: 6.73257,
    },
    zoom: 15,
  };

  return (
    // Important! Always set the container height explicitly

    <GoogleMapReact
      bootstrapURLKeys={{
        key: "AIzaSyCkIf-g5ADGEh-xWwNDZjes0hLwrhNA1C4",
        language: "de",
      }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      {/* <AnyReactComponent lat={51.235691} lng={6.73257} text="My Marker" /> */}
      <SupplierMarker lat={51.235691} lng={6.73257} />
      <CustomerMarker lat={51.2328} lng={6.73957} />
    </GoogleMapReact>
  );
}

function SupplierMarker() {
  return (
    <div className="marker-container supplier-container">
      <img src={logo} alt={"Vodafone Logo"} width={50} height={50} />
    </div>
  );
}

function CustomerMarker() {
  return (
    <div className="marker-container customer-container">
      <img src={user} alt={"User icon"} width={25} height={25} />
    </div>
  );
}
