import { useState } from "react";
import { Stepper, Step } from "react-form-stepper";

import StepPersonalInfo from "./StepPersonalInfo";
import StepEducation from "./StepEducation";
import StepExperience from "./StepExperience";
import StepSkills from "./StepSkills";

export default function ResumeWizard() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="container py-5">
      <div
        className="card shadow-lg p-4 mx-auto"
        style={{ maxWidth: "700px", borderRadius: "14px" }}
      >
        {/* --- Stepper Header --- */}
        <Stepper
          activeStep={step - 1}
          styleConfig={{
            activeBgColor: "#d62828",
            completedBgColor: "#b11212",
            inactiveBgColor: "#e8e8e8",
            activeTextColor: "#fff",
            completedTextColor: "#fff",
            inactiveTextColor: "#757575",
            size: "2.5em",
            circleFontSize: "1rem",
            labelFontSize: "0.9rem",
            borderRadius: "50%",
          }}
          connectorStyleConfig={{
            activeColor: "#d62828",
            completedColor: "#b11212",
            disabledColor: "#d0d0d0",
            size: 2,
            style: "solid",
          }}
        >
          <Step label="Personal Info" />
          <Step label="Experience" />
          <Step label="Education" />
          <Step label="Skills" />
        </Stepper>

        {/* --- Step Components --- */}
        {step === 1 && <StepPersonalInfo />}
        {step === 2 && <StepExperience />}
        {step === 3 && <StepEducation />}
        {step === 4 && <StepSkills />}

        {/* --- Navigation Buttons --- */}
        <div className="d-flex justify-content-between mt-4">
          {step > 1 ? (
            <button className="btn btn-danger px-4" onClick={prevStep}>
              Previous
            </button>
          ) : (
            <div></div>
          )}

          {step < totalSteps ? (
            <button className="btn btn-danger px-4" onClick={nextStep}>
              Next
            </button>
          ) : (
            <button className="btn btn-danger px-4">Finish</button>
          )}
        </div>
      </div>
    </div>
  );
}
