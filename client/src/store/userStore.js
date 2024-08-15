import create from "zustand";
import axios from "axios";
import { getEmail, setEmail } from "../utility/utility";

const UserStore = create((set) => ({
  OtpRequest: async (email) => {
    let res = await axios.get(`/api/v1/userOtp/${email}`);
    setEmail(email);
    return res.data["status"] === "Success";
  },

  VerifyLoginRequest: async (otp) => {
    let email = getEmail();
    let res = await axios.get(`/api/v1/verifyLogin/${email}/${otp}`);
    return res.data["status"] === "Success";
  },
}));

export default UserStore;
