import React from "react";
import SubmitButton from "./submitButton";
import UserStore from "../../store/userStore";
import ValidationHelper from "../../utility/validationHelper";
import { useNavigate } from "react-router-dom";

const OtpForm = () => {
  const { OTPFormValue, OTPOnChange, VerifyLoginRequest } = UserStore();
  let nevigate = useNavigate();

  const OTPFormSubmit = async () => {
    if (ValidationHelper.IsEmpty(OTPFormValue.otp)) {
      toast.error("Valid Otp Required");
    } else {
      let res = await VerifyLoginRequest(OTPFormValue.otp);
      res ? nevigate("/") : toast.error("Something Went Wrong");
    }
  };
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
              value={OTPFormValue.otp}
              onChange={(e) => {
                OTPOnChange("otp", e.target.value);
              }}
              type="text"
              placeholder="Verification code"
              className="form-control"
            />
            <SubmitButton
              onClick={OTPFormSubmit}
              className="btn btn-success mt-3"
              text="Submit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default OtpForm;
