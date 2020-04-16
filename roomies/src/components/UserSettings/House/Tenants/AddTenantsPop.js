import React, { useState, useContext } from "react";
import useInputState from "../../../../hooks/useInputState";
import "../../../auth/auth.scss";
import PopUpCard from "../../../GenericComponents/PopUpCard";
import { HouseContext } from "../HouseContext";
import uuid from "uuid";
import Notifications, { notify } from "../../../Notification/notification";

function AddTenantsPop() {
  const { toggleAddTenants, handleNewTenant } = useContext(HouseContext);

  const [name, handleNameChange] = useInputState("");
  const [email, handleEmailChange, validateEmail] = useInputState("");

  const handleAddTenant = () => {
    console.log("saving tenant");
    //TODO: handle add tenants
    let tenant = {
      _id: uuid(),
      invited: new Date(), //do that on server
      added: null, //do this on server. changes when invitation is approved
      name: name,
      email: email,
      admin: false //do that on server
    };

    handleNewTenant(tenant);
    toggleAddTenants();
  };

  //   Validate name exist and not empty
  function validate() {
    let validated = true;

    if (name === undefined || name.trim() === "" || name.length < 2) {
      validated = false;
    }

    if (validated) {
      validated = validated = validateEmail("EMAIL");
    }

    return validated;
  }

  const doSubmit = event => {
    event.preventDefault();
    notify("Registration Confirmation Sent");

    if (validate()) {
      handleAddTenant();
      toggleAddTenants();
    }
  };

  return (
   <div>
     <Notifications/>
  
    <PopUpCard togglePop={toggleAddTenants}>
      <div>
        <p className="form-text">
          To invite a tenant, please enter their name and email.
        </p>
        <small className="form-text">
          Please note - temaporarily only registered Roomies will be able to
          recieve an invitation.
        </small>
        <hr></hr>

        <form className="userDataItem houseForm">
          <div className="flex-container flex-between align-base form-group">
            <label htmlFor="name">Tenant Name</label>
            <input
              id="name"
              type="text"
              name="hNnameame"
              placeholder="Chuck Norris"
              className="form-control"
              value={name}
              onChange={handleNameChange}
            />
          </div>
         

          <div className="flex-container flex-between align-base form-group">
            <label htmlFor="email">Tenant Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="gmail@allmighty.com"
              className="form-control"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-grad-pressed"
              onClick={e => doSubmit(e)}
            >
              Invite Tenant
            </button>
          </div>
        </form>

       
      </div>
    </PopUpCard>
    </div>
  );
}

export default AddTenantsPop;
