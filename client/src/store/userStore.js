import create from "zustand";
import axios from "axios";
import { getEmail, setEmail } from "../utility/utility";

const UserStore = create((set) => ({
  LoginFormValue: { email: "" },
  LoginFormOnChange: (name, value) => {
    set((state) => ({
      LoginFormValue: {
        ...state.LoginFormValue,
        [name]: value,
      },
    }));
  },

  OTPFormValue: { otp: "" },
  OTPOnChange: (name, value) => {
    set((state) => ({
      OTPFormValue: {
        ...state.OTPFormValue,
        [name]: value,
      },
    }));
  },

  isFormSubmit: false,
  OtpRequest: async (email) => {
    set({ isFormSubmit: true });
    let res = await axios.get(`/api/v1/userOtp/${email}`);
    setEmail(email);
    set({ isFormSubmit: false });
    return res.data["status"] === "Success";
  },

  VerifyLoginRequest: async (otp) => {
    set({ isFormSubmit: true });
    let email = getEmail();
    let res = await axios.get(`/api/v1/verifyLogin/${email}/${otp}`);
    set({ isFormSubmit: false });
    return res.data["status"] === "Success";
  },
}));

export default UserStore;
