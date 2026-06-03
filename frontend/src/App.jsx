import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store"; // Adjust path if needed
import Home from "./pages/home";
import ResumeWizard from "./components/ResumeWizard";
import CVForm from "./pages/CVForm";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resumes" element={<ResumeWizard />} />
          <Route path="/prices" element={<CVForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
