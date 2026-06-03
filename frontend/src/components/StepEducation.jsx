import React from "react";

export default function StepEducation() {
  return (
    <div>
      <h5 className="fw-semibold mb-3">Education</h5>

      <div className="mb-3">
        <label className="form-label">School</label>
        <input type="text" className="form-control" placeholder="University or School" />
      </div>

      <div className="mb-3">
        <label className="form-label">Degree</label>
        <input type="text" className="form-control" placeholder="Bachelor, Master, etc." />
      </div>

      <div className="mb-3">
        <label className="form-label">Field of Study</label>
        <input type="text" className="form-control" placeholder="Computer Science, Business..." />
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
        <textarea className="form-control" rows="3" placeholder="Additional details..."></textarea>
      </div>
    </div>
  );
}
