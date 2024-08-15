import React from "react";
import SubmitButton from "./submitButton";
import UserStore from "../../store/userStore";
import ValidationHelper from "./../../utility/validationHelper";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  let nevigate = useNavigate();
  const { LoginFormValue, LoginFormOnChange, OtpRequest } = UserStore();

  const onFormSubmit = async () => {
    if (!ValidationHelper.IsEmail(LoginFormValue.email)) {
      toast.error("Valid Email Address Required");
    } else {
      let res = await OtpRequest(LoginFormValue.email);
      res ? nevigate("/verify-otp") : toast.error("Something Went Wrong");
    }
  };

  return (
    <div className="container section ">
      <div className="row d-flex justify-content-center ">
        <div className="col-md-5 ">
          <div className="card p-5">
            <h4>Enter Your Email</h4>
            <p>
              A verification code will be sent to the email address you provide
            </p>
            <input
              value={LoginFormValue.email}
              onChange={(e) => {
                LoginFormOnChange("email", e.target.value);
              }}
              type="email"
              placeholder="Email Address"
              className="form-control"
            />
            <SubmitButton
              onClick={onFormSubmit}
              className="btn btn-success mt-3"
              text="Next"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
