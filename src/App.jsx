import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Employers from "./pages/Employers";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <ScrollToTop/>
      <Routes>

        {/* Main Pages */}

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/industries" element={<Industries />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/employers" element={<Employers />} />

        <Route path="/careers" element={<Careers />} />


      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      <Footer />

    </BrowserRouter>
  );
}

export default App;