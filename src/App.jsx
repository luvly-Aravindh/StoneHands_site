import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import ProtectSection from "./components/ProtectSection";
import MeetBarrier from "./components/MeetBarrier";
import ModernSolution from "./components/ModernSolution";
import HowItWorks from "./components/HowItWorks";
import BuiltToDefend from "./components/BuiltToDefend";
import Specifications from "./components/Specifications";
import Certifications from "./components/Certifications";
import IdealForProtection from "./components/IdealForProtection";
import OrderNow from "./components/OrderNow";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Header />
      <HeroBanner />
      <ProtectSection />
      <MeetBarrier />
      <ModernSolution />
      <HowItWorks />
      <BuiltToDefend />
      <Specifications />
      <Certifications />
      <IdealForProtection />
      <OrderNow />
      <Footer />
    </>
  );
}

export default App;
