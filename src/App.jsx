import { Routes, Route } from "react-router-dom";
import { AboutPage, HomePage } from "./pages";
import { Footer, HeroSection, Navbar, Pricing } from "./components";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Partners from "./components/Partners";

function App() {
  return (
    <div className="font-inter ">
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes> */}
      <HeroSection />
      <Features />
      <Pricing />
      <Contact />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
