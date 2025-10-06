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
            The <span>Resume</span> to get your Dream job
          </h1>

          <p className="lead mt-3">
            Create an impressive resume in minutes. Free to Download
          </p>

          <div className="mt-4">
            <button className="hero-btn">Create My Resume</button>
          </div>

          <p className="text-muted mt-4">
            <i className="fas fa-star text-warning"></i> Trusted by 1.5M+ job finder worldwide
          </p>

          {/* CV Preview Images */}
          <div className="cv-images">
            <img src="/images/cv1.jpg" alt="CV Template 1" />
            <img src="/images/cv2.jpg" alt="CV Template 2" />
            <img src="/images/cv3.jpg" alt="CV Template 3" />
          </div>

          {/* Decorative Wave */}
          <img src="/images/wave.svg" alt="wave decoration" className="hero-wave" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="custom-card p-4 h-100">
                <div className="feature-icon mb-3">
                  <i className="fas fa-check-circle" style={{ fontSize: "2rem" }}></i>
                </div>
                <h4 className="feature-title">Recruiter-Approved Resume</h4>
                <p className="feature-text">
                  We work with recruiters to design resume templates that format automatically.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="custom-card p-4 h-100">
                <div className="feature-icon mb-3">
                  <i className="fas fa-clock" style={{ fontSize: "2rem" }}></i>
                </div>
                <h4 className="feature-title">Finish Your Resume in 15 min</h4>
                <p className="feature-text">
                  Resume-Now helps you write your resume with recommended phrases and skills for your job title.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="custom-card p-4 h-100">
                <div className="feature-icon mb-3">
                  <i className="fas fa-briefcase" style={{ fontSize: "2rem" }}></i>
                </div>
                <h4 className="feature-title">Land an Interview</h4>
                <p className="feature-text">
                  Get matched to jobs that match your experience. Better jobs mean more interviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
