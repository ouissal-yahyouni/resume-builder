import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePersonalInfo } from "../features/resume/resumeSlice";

export default function CVForm() {
  const dispatch = useDispatch();
  const personalInfo = useSelector((state) => state.resume.personalInfo);

  const handleChange = (e) => {
    dispatch(updatePersonalInfo({ [e.target.name]: e.target.value }));
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0 rounded-4 p-4 mx-auto" style={{ maxWidth: "600px" }}>
        <h2 className="text-center mb-4 fw-bold text-primary">
          Personal Information
        </h2>

        <form className="row g-3">
          {/* First & Last Name */}
          <div className="col-md-6">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="firstName"
              value={personalInfo.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              className="form-control form-control-lg"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={personalInfo.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              className="form-control form-control-lg"
            />
          </div>

          {/* Email */}
          <div className="col-12">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={personalInfo.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="form-control form-control-lg"
            />
          </div>

          {/* Phone */}
          <div className="col-12">
            <label className="form-label">Phone</label>
            <input
              type="tel"
              name="phone"
              value={personalInfo.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              className="form-control form-control-lg"
            />
          </div>

          {/* Address */}
          <div className="col-12">
            <label className="form-label">Address</label>
            <input
              type="text"
              name="address"
              value={personalInfo.address}
              onChange={handleChange}
              placeholder="Your address"
              className="form-control form-control-lg"
            />
          </div>

          {/* Photo */}
          <div className="col-12">
            <label className="form-label">Photo URL</label>
            <input
              type="text"
              name="photo"
              value={personalInfo.photo}
              onChange={handleChange}
              placeholder="Link to your photo"
              className="form-control form-control-lg"
            />
          </div>

          {/* Summary */}
          <div className="col-12">
            <label className="form-label">Professional Summary</label>
            <textarea
              name="summary"
              value={personalInfo.summary || ""}
              onChange={handleChange}
              placeholder="Write a short summary about yourself"
              rows="4"
              className="form-control form-control-lg"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-12 text-center mt-3">
            <button
              type="submit"
              className="btn btn-primary btn-lg px-5 shadow-sm"
            >
              Save Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
