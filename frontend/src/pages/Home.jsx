// Home.jsx
import React from "react";
import ButtonUiverse from "../components/ButtonUiverse";
import "../App.css";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="container position-relative">
          <h1 className="creative-title">
            The <span>Resume</span> to Get Your Dream Job
          </h1>

          <p className="lead mt-3">
            Create an impressive resume in minutes. Free to download and easy to
            customize.
          </p>

          <div className="mt-4 d-flex justify-content-center">
            {/* ✅ Replace old button with ButtonUiverse */}
            <ButtonUiverse text1="Create Resume" text2="Start Now" />
          </div>

          <p className="text-muted mt-4">
            <i className="fas fa-star text-warning"></i> Trusted by 1.5M+ job
            seekers worldwide
          </p>

          {/* CV Preview Images */}
          <div className="cv-images">
            <img src="/images/cv1.jpg" alt="CV Template 1" />
            <img src="/images/cv2.jpg" alt="CV Template 2" />
            <img src="/images/cv3.jpg" alt="CV Template 3" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="custom-card p-4 h-100">
                <div className="feature-icon mb-3">
                  <i
                    className="fas fa-check-circle"
                    style={{ fontSize: "2rem" }}
                  ></i>
                </div>
                <h4 className="feature-title">Recruiter-Approved Resume</h4>
                <p className="feature-text">
                  Designed with HR professionals to help you stand out from the
                  competition.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="custom-card p-4 h-100">
                <div className="feature-icon mb-3">
                  <i className="fas fa-clock" style={{ fontSize: "2rem" }}></i>
                </div>
                <h4 className="feature-title">Build in 10 Minutes</h4>
                <p className="feature-text">
                  Our smart builder helps you fill out your resume step by step
                  with AI suggestions.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="custom-card p-4 h-100">
                <div className="feature-icon mb-3">
                  <i
                    className="fas fa-briefcase"
                    style={{ fontSize: "2rem" }}
                  ></i>
                </div>
                <h4 className="feature-title">Get More Interviews</h4>
                <p className="feature-text">
                  Professional design that captures attention and increases your
                  job opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 💡 How It Works Section */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="mb-5">How It Works</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="step">
                <span className="step-number">1</span>
                <h5>Choose a Template</h5>
                <p>Select from modern, professional, and creative designs.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="step">
                <span className="step-number">2</span>
                <h5>Fill In Your Details</h5>
                <p>Add your experience, education, and skills quickly.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="step">
                <span className="step-number">3</span>
                <h5>Download & Apply</h5>
                <p>Get a polished PDF version ready to send to employers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
