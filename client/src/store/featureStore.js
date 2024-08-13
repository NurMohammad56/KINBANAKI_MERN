import create from "zustand";
import axios from "axios";

const FeatureStore = create((set) => ({
  FeatureList: null,
  FeatureListRequest: async () => {
    let res = await axios.get(`/api/v1/featuresList`);
    if (res.data["status"] === "success") {
      set({ FeatureList: res.data["data"] });
    }
  },
  LegalDetails: null,
  LegalDetailsRequest: async (type) => {
    set({ LegalDetails: null });
    let res = await axios.get(`/api/v1/legalDetails/${type}`);
    if (res.data["status"] === "Success") {
      set({ LegalDetails: res.data["data"] });
    }
  },
}));

export default FeatureStore;
