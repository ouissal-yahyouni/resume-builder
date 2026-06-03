import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePersonalInfo } from "../features/resume/resumeSlice";

export default function StepPersonalInfo() {
  const dispatch = useDispatch();
  const personalInfo = useSelector((state) => state.resume.personalInfo);

  const handleChange = (e) => {
    dispatch(updatePersonalInfo({ [e.target.name]: e.target.value }));
  };

  return (
    <form className="row g-4 p-4 bg-white rounded-4 shadow-sm">
      <h5 className="fw-semibold mb-3">Personal Information</h5>

      {/* First and Last Name */}
      <div className="col-md-6">
        <label className="form-label">First Name *</label>
        <input
          type="text"
          name="firstName"
          value={personalInfo.firstName}
          onChange={handleChange}
          className="form-control "
          required
        />
      </div>

      <div className="col-md-6">
        <label className="form-label">Last Name *</label>
        <input
          type="text"
          name="lastName"
          value={personalInfo.lastName}
          onChange={handleChange}
          className="form-control "
          required
        />
      </div>

      {/* Email and Phone */}
      <div className="col-md-6">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          value={personalInfo.email}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="col-md-6">
        <label className="form-label">Phone</label>
        <input
          type="tel"
          name="phone"
          value={personalInfo.phone}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      {/* Address and Photo */}
      <div className="col-md-6">
        <label className="form-label">Address</label>
        <input
          type="text"
          name="address"
          value={personalInfo.address}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="col-md-6">
        <label className="form-label">Photo URL</label>
        <input
          type="text"
          name="photo"
          value={personalInfo.photo}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      {/* Summary full width */}
      <div className="col-12">
        <label className="form-label">Summary</label>
        <textarea
          name="summary"
          value={personalInfo.summary || ""}
          onChange={handleChange}
          rows="3"
          className="form-control"
        ></textarea>
      </div>
    </form>
  );
}
