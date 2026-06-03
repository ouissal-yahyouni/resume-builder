import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer py-4 text-center text-muted">
      <p>
        © {new Date().getFullYear()} ResumeBuilder | Built with ❤️ by{" "}
        <strong>Ouissal Yahyouni</strong>
      </p>
      <div className="social-icons mt-2">
        <a href="#">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#">
          <i className="fab fa-github"></i>
        </a>
        <a href="#">
          <i className="fab fa-facebook"></i>
        </a>
      </div>
    </footer>
  );
}
