import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import vehiclesData from "../../FakeData/vehicleData.json";
import Vehicles from "../Vehicles/Vehicles";
import "./Home.css";

const Home = () => {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    setVehicles(vehiclesData);
  }, []);

  const history = useHistory()

  const handleVehicleClick = (vehicleName) =>{
    let pageUrl = `destination/${vehicleName}`;
    history.push(pageUrl)
  }
  return (
    <div className="home">
      <h1 className="home-title">Rides Now And Explore The World!</h1>
      <div className="vehicles">
        {vehicles.map((vehicle) => (
          <Vehicles key={vehicle.id} vehicleInfo={vehicle} handleVehicleClick={handleVehicleClick}></Vehicles>
        ))}
      </div>
    </div>
  );
};

export default Home;
