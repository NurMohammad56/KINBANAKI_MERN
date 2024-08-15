import React from "react";
import SubmitButton from "./submitButton";

const OtpForm = () => {
  return (
    <div className="container section">
      <div className="row d-flex justify-content-center">
        <div className="col-md-5">
          <div className="card p-5">
            <h4>Enter Verification Code</h4>
            <p>
              A verification code will be sent the email address you provide
            </p>
            <input
              type="text"
              placeholder="Verification code"
              className="form-control"
            />
            <SubmitButton className="btn btn-success mt-3" text="Submit" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default OtpForm;
