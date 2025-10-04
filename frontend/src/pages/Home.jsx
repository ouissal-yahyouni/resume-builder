import React from "react";
import ButtonUiverse from "../components/ButtonUiverse";
import "../App.css";

export default function Home() { // ← export default direct
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-5 bg-light">
        <div className="container">
          {/* Titre */}
          <h1 className="creative-title">The Resume to get your Dream job</h1>

          <p className="lead text-muted mt-3">
            Create an impressive resume in minutes. Free to Download
          </p>

          {/* Bouton CTA */}
          <ButtonUiverse text1="Create" text2="My Resume" />

          {/* Confiance */}
          <p className="text-muted mt-4">
            <i className="fas fa-star text-warning"></i> Trusted by 1.5M+ job finder
            worldwide
          </p>

          {/* Images de CV */}
          <div className="row justify-content-center mt-5">
            <div className="col-md-3">
              <img
                src="/images/cv1.jpg"
                alt="CV template 1"
                className="img-fluid shadow rounded-3"
              />
            </div>
            <div className="col-md-3">
              <img
                src="/images/cv2.jpg"
                alt="CV template 2"
                className="img-fluid shadow rounded-3"
              />
            </div>
            <div className="col-md-3">
              <img
                src="/images/cv3.jpg"
                alt="CV template 3"
                className="img-fluid shadow rounded-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center">
            {/* Main Card - Create a resume That gets results */}
           

            {/* Feature 1 */}
            <div className="col-md-4 mb-4">
              <div className="custom-card p-4 h-100">
                <div className="feature-icon mb-3">
                  <i className="fas fa-check-circle text-primary" style={{fontSize: '2rem'}}></i>
                </div>
                <h4 className="feature-title">Recruiter-Approved Resume</h4>
                <p className="feature-text">
                  We work with recruiters to design resume templates that format automatically.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-md-4 mb-4">
              <div className="custom-card p-4 h-100">
                <div className="feature-icon mb-3">
                  <i className="fas fa-clock text-primary" style={{fontSize: '2rem'}}></i>
                </div>
                <h4 className="feature-title">Finish Your Resume in 15 min</h4>
                <p className="feature-text">
                  Resume-Now helps you write your resume with recommended phrases and skills for your job title.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-md-4 mb-4">
              <div className="custom-card p-4 h-100">
                <div className="feature-icon mb-3">
                  <i className="fas fa-briefcase text-primary" style={{fontSize: '2rem'}}></i>
                </div>
                <h4 className="feature-title">Land an Interview</h4>
                <p className="feature-text">
                  Get matched to jobs that match your experience. Better jobs mean you land more interviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}