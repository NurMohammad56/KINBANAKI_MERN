import create from "zustand";
import axios from "axios";

const UserStore = create((set) => ({
  OtpRequest: async (email) => {
    let res = await axios.get(`/api/v1/userOtp/${email}`);
    return res.data["status"] === "Success";
  },
}));

export default UserStore;
