import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./SearchDestination.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SearchDestination = (props) => {
  const { fareDetails } = props.selectedVehicleInfo || {};
  const [showSection, setShowSection] = useState({
    isFirstSectionShow: true,
  });
  const [location, setLocation] = useState({});

  const handleOnchange = (e) => {
    let isFormvalid = true;
    if (isFormvalid) {
      const newLocation = { ...location };
      newLocation[e.target.name] = e.target.value;
      setLocation(newLocation);
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleOnchange();
  };
  
  return (
    <div className="col search-form">
      {showSection.isFirstSectionShow ? (
        <Form className="search-fields" onSubmit={handleOnSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Pick From</Form.Label>
            <Form.Control
              name="pickFrom"
              type="text"
              onChange={handleOnchange}
              placeholder="Pick From Location"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Pick To</Form.Label>
            <Form.Control
              name="pickTo"
              type="text"
              onChange={handleOnchange}
              placeholder="Pick To Location"
            />
          </Form.Group>
          <Button
            className=" search-btn btn btn-primary  btn-lg btn-block"
            onClick={() => setShowSection({ isFirstSectionShow: false })}
          >
            Search
          </Button>
        </Form>
      ) : (
        <Form className="search-fields">
          <div className="fare-infomation">
            <div className="row fare-card">
              <div className="col-5">{location.pickFrom}</div>
              <div className="col-2">
                <FontAwesomeIcon icon={faExchangeAlt} />
              </div>
              <div className="col-5">{location.pickTo}</div>
            </div>
            {fareDetails?.map((details) => (
              <div className="fare-card">
                <div className="row fare-details">
                  <div className="col-3 vehicle-logo">
                    <img className="logo" src={details.vehicleIcon} alt="" />
                  </div>
                  <div className="col-6 vehicle-type">
                    <p>
                      {details.rideVehicle} <FontAwesomeIcon icon={faUsers} />{" "}
                      {details.seat}
                    </p>
                  </div>
                  <div className="col-3 seat">
                    <p>${details.fare}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Form>
      )}
    </div>
  );
};

export default SearchDestination;
