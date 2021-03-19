import React from "react";
import { useParams } from "react-router";
import vehiclesData from "../../FakeData/vehicleData.json";
import GoogleMap from "../GoogleMap/GoogleMap";
import SearchDestination from "../SearchDestination/SearchDestination";
import "./Destination.css";

const Destination = () => {
  const { vehicleName } = useParams();
  const vehicle = vehiclesData.find(
    (vehicleFullInfo) => vehicleFullInfo.vehicleName === vehicleName
  );
  return (
    <div>
      <h1>Destination</h1>
      <div className="col destination-area">
        <div className="search-destination">
          <SearchDestination selectedVehicleInfo={vehicle}></SearchDestination>
        </div>
        <div className="col google-map">
          <GoogleMap></GoogleMap>
        </div>
      </div>
    </div>
  );
};

export default Destination;
