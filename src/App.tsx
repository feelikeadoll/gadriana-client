import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import ContactSection from "./components/ContactSection";
import Info from "./pages/Info/Info";

function App() {
  return (
    <div className="font-spartan tracking-wide bg-white text-black w-full">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>

      <BackToTopButton />
      <div id="contact">
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
