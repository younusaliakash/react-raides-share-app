import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./SearchDestination.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SearchDestination = (props) => {
    const {fareDetails} = props.selectedVehicleInfo || {};
    console.log(fareDetails)
    const [data,setData] = useState({})
    useEffect(() =>{
        setData(fareDetails)
    },[])
  const [search, setSearch] = useState({
    isSearch: false,
  });
  return (
    <div className="col search-form">
      <Form className="search-fields">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Pick From</Form.Label>
          <Form.Control type="text" placeholder="Mirpur 1" />
        </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Pick To</Form.Label>
            <Form.Control type="text" placeholder="Mohakhali" />
          </Form.Group>
        <Link
          className=" search-btn btn btn-primary  btn-lg btn-block"
          onClick={() => setSearch({ isSearch: true })}
        >
          Search
        </Link>
        {
            search.isSearch && data?.map(details => <div className="fare-card">
            <div className="row fare-details">
              <div className="col-3 vehicle-logo">
                <img
                  className="logo"
                  src={details.vehicleIcon}
                  alt=""
                />
              </div>
              <div className="col-6 vehicle-type">
                <p>
                  {details.rideVehicle} <FontAwesomeIcon icon={faUsers} /> {details.seat}
                </p>
              </div>
              <div className="col-3 seat">
                <p>${details.fare}</p>
              </div>
            </div>
          </div>)
        }
      </Form>
    </div>
  );
};

export default SearchDestination;
