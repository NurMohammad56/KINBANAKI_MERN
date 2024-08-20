import React, { useEffect } from "react";
import ProfileSkeleton from "./../../skeleton/profile-skeleton";
import UserStore from "../../store/userStore";
import toast from "react-hot-toast";

const ProfileForm = () => {
  let {
    ProfileFormm,
    ProfileFromChange,
    ProfileDetails,
    ProfileDetailsRequest,
    ProfileSaveRequest,
  } = UserStore();

  useEffect(() => {
    (async () => {
      await ProfileDetailsRequest();
    })();
  }, []);

  const Save = async () => {
    let res = await ProfileSaveRequest(ProfileFormm);
    if (res) {
      toast.success("Update Success");
      await ProfileDetailsRequest();
    }
  };

  if (ProfileDetails === null) {
    return <ProfileSkeleton />;
  } else {
    return (
      <div>
        <div className="container mt-5">
          <div className="card p-5 rounded-3">
            <h6>Customer Details</h6>
            <hr />
            <div className="row mb-4">
              <div className="col-md-3 p-2">
                <label className="form-label">Customer Name </label>
                <input
                  value={ProfileFormm.cus_name}
                  onChange={(e) => {
                    ProfileFromChange("cus_name", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Customer Phone </label>
                <input
                  value={ProfileFormm.cus_phone}
                  onChange={(e) => {
                    ProfileFromChange("cus_phone", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Customer Fax </label>
                <input
                  value={ProfileFormm.cus_fax}
                  onChange={(e) => {
                    ProfileFromChange("cus_fax", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Customer Country </label>
                <input
                  value={ProfileFormm.ship_country}
                  onChange={(e) => {
                    ProfileFromChange("ship_country", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Customer City </label>
                <input
                  value={ProfileFormm.cus_city}
                  onChange={(e) => {
                    ProfileFromChange("cus_city", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Customer State </label>
                <input
                  value={ProfileFormm.cus_state}
                  onChange={(e) => {
                    ProfileFromChange("cus_state", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Customer Post Code </label>
                <input
                  value={ProfileFormm.cus_postcode}
                  onChange={(e) => {
                    ProfileFromChange("cus_postcode", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Customer Address</label>
                <input
                  value={ProfileFormm.cus_add}
                  onChange={(e) => {
                    ProfileFromChange("cus_add", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
            </div>
            <h6>Shipping Details</h6>
            <hr />
            <div className="row">
              <div className="col-md-3 p-2">
                <label className="form-label">Shipping Name </label>
                <input
                  value={ProfileFormm.ship_name}
                  onChange={(e) => {
                    ProfileFromChange("ship_name", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Shipping Phone </label>
                <input
                  value={ProfileFormm.ship_phone}
                  onChange={(e) => {
                    ProfileFromChange("ship_phone", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Shipping Country </label>
                <input
                  value={ProfileFormm.ship_country}
                  onChange={(e) => {
                    ProfileFromChange("ship_country", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Shipping City </label>
                <input
                  value={ProfileFormm.ship_city}
                  onChange={(e) => {
                    ProfileFromChange("ship_city", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Shipping State </label>
                <input
                  value={ProfileFormm.ship_state}
                  onChange={(e) => {
                    ProfileFromChange("ship_state", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Shipping Post Code </label>
                <input
                  value={ProfileFormm.ship_postcode}
                  onChange={(e) => {
                    ProfileFromChange("ship_postcode", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Shipping Address</label>
                <input
                  value={ProfileFormm.ship_add}
                  onChange={(e) => {
                    ProfileFromChange("ship_add ", e.target.value);
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-3 p-2">
                <button onClick={Save} className="btn btn-success">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProfileForm;
