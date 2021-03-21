import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import "./Vehicles.css";

const Vehicles = (props) => {
  const {vehicleType, vehiclePhoto, vehicleName } = props.vehicleInfo;
  const handleVehicleClick = props.handleVehicleClick;
  // console.log(props);
  return (
    <div>
      <CardDeck >
        <Card
          className="vehicle-card"
          onClick={() => handleVehicleClick(vehicleName)}
        >
          <Card.Img className="card-img" variant="top" src={vehiclePhoto} />
          <Card.Body className="vehicle-title">
            <Card.Title>
              <b>{vehicleType}</b>
            </Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Vehicles;
