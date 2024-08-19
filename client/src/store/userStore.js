import create from "zustand";
import axios from "axios";
import { getEmail, setEmail, unauthorized } from "../utility/utility";
import Cookies from "js-cookie";

const UserStore = create((set) => ({
  ProfileFormm: {
    cus_add: "",
    cus_city: "",
    cus_country: "",
    cus_fax: "",
    cus_name: "",
    cus_phone: "",
    cus_postcode: "",
    cus_state: "",
    ship_add: "",
    ship_city: "",
    ship_country: "",
    ship_name: "",
    ship_phone: "",
    ship_postcode: "",
    ship_state: "",
  },
  ProfileFromChange: (name, value) => {
    set((state) => ({
      ProfileFormm: {
        ...state.ProfileFormm,
        [name]: value,
      },
    }));
  },

  isLogin: () => {
    return !!Cookies.get("token");
  },

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

  UserLogoutRequest: async () => {
    set({ isFormSubmit: true });
    let res = await axios.get(`/api/v1/userLogout`);
    set({ isFormSubmit: false });
    return res.data["status"] === "Success";
  },
}));

export default UserStore;
