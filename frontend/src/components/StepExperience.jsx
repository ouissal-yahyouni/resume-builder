import React from "react";

export default function StepExperience() {
  return (
    <div>
      <h5 className="fw-semibold mb-3">Work Experience</h5>

      <div className="mb-3">
        <label className="form-label">Company</label>
        <input type="text" className="form-control" placeholder="Company name" />
      </div>

      <div className="mb-3">
        <label className="form-label">Position</label>
        <input type="text" className="form-control" placeholder="Your role" />
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Start Date</label>
          <input type="date" className="form-control" />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">End Date</label>
          <input type="date" className="form-control" />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea className="form-control" rows="3" placeholder="Describe your work"></textarea>
      </div>

      <button className="btn btn-outline-primary mt-2">
        + Add Another Experience
      </button>
    </div>
  );
}
