import React from "react";
import useInputState from "../../hooks/useInputState";
import "./auth.scss";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import Notifications, { notify } from "../Notification/notification";

function Registration() {
  const [email, handleEmailChange, resetEmail, validateEmail] = useInputState(
    ""
  );
  const [password, handlePassChange, resetPass, validatePass] = useInputState(
    ""
  );
  const [
    passConfirm,
    handlePassConfirmChange,
    resetPassConfirm
  ] = useInputState("");

  const handleRegistration = () => {
    console.log("Registered successfully");
    //TODO: handle registration

    // axios
    //   .post("http://localhost:3000/users/register", userObject)
    //   .then(res => {
    //     console.log("Registered successfully");
    //     //TODO: redirect to thank you page with second part of registration
    //   })
    //   .catch(error => {
    //     console.log("Registration Error");
    //   });
  };

  const validated = () => {
    let validated = true;
    /** TODO: Consider adding validation to input state hook */
    //TODO: validate data
    validated = validateEmail("EMAIL");
    if (!validated) {
      // TODO: dispaly email error
    } else {
      validated = validatePass("PASS");
      if (!validated) {
        // TODO: display password error
      } else if (password !== passConfirm) {
        validated = false;
        if (!validated) {
          // TODO: display pass confirm error
        }
      }
    }
    return validated;
  };

  const doSubmit = event => {
    //This will handle the form data
    console.log("register form submit");
    notify();
    event.preventDefault();

    /** TODO: Consider adding validation to input state hook */
    if (validated()) {
      handleRegistration();
      resetEmail();
      resetPass();
      resetPassConfirm();
    }
  };

  return (
    <div className="homeContainer guestBackground">
      <div className="from-container">
              <Notifications/>
        <Link className="secondary-link toLeft" to="/">
          <MdArrowBack className="back-icon" /> back
        </Link>
        <form className="card" onSubmit={ doSubmit }>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            className="form-control"
            value={email}
            onChange={handleEmailChange}
            required
          />

          <label htmlFor="pass">Password</label>
          <input
            id="pass"
            type="password"
            name="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={handlePassChange}
            required
          />

          <input
            type="password"
            name="password_confirm"
            placeholder="Confirm Password"
            className="form-control input-margin"
            value={passConfirm}
            onChange={handlePassConfirmChange}
            required
          />
          <button type="submit" className="btn btn-grad-pressed">
            Register
          </button>
        </form>
      </div>
      
    </div>
  );
}

export default Registration;
