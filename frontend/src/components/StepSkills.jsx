import React from "react";

export default function StepSkills() {
  return (
    <div>
      <h5 className="fw-semibold mb-3">Skills, Languages & Interests</h5>

      <div className="mb-3">
        <label className="form-label">Skills (comma separated)</label>
        <input type="text" className="form-control" placeholder="e.g. React, Node.js, MongoDB" />
      </div>

      <div className="mb-3">
        <label className="form-label">Languages</label>
        <input type="text" className="form-control" placeholder="e.g. English, French, Arabic" />
      </div>

      <div className="mb-3">
        <label className="form-label">Interests</label>
        <input type="text" className="form-control" placeholder="e.g. Reading, Travel, Coding" />
      </div>
    </div>
  );
}
