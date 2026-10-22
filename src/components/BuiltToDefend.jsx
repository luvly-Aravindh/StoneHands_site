import barrier1 from "../assets/barrier1.png";
import barrier2 from "../assets/barrier2.png";
import barrier3 from "../assets/barrier3.png";

const BuiltToDefend = () => (
  <section className="pt-12 md:pt-28 px-6 md:px-20 bg-white text-center">
    <h2 className="text-2xl md:text-4xl font-bold mb-4">BUILT TO DEFEND. TESTED TO LAST.</h2>
    <p className="text-[#646464] text-base md:text-2xl max-w-5xl mx-auto mb-10 leading-relaxed">
      {"While cheap barriers crack or shift under pressure, "}
      <span className="font-semibold text-black">Storm Water Barrier</span>
      {" stands firm. "}
      <br />
      {"Made with "}
      <span className="font-semibold text-black">UV-Stabilized Red ABS Plastic</span>
      {" and certified in international labs, it’s engineered to perform even in extreme environments."}
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-center">
      <div className="overflow-hidden">
        <img src={barrier1} alt="Barrier Measurement" className="w-[400px] h-auto" />
      </div>
      <div className="overflow-hidden">
        <img src={barrier3} alt="Barrier in Snow" className="w-[400px] h-auto" />
      </div>
      <div className="overflow-hidden">
        <img src={barrier2} alt="Barrier Blocking Water" className="w-[400px] h-auto" />
      </div>
    </div>
  </section>
);

export default BuiltToDefend;
