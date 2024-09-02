import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import BackToTopButton from "./components/BackToTopButton";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="font-avenir bg-white text-black">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <BackToTopButton />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
