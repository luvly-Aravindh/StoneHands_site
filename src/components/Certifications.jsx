import iconTensile from "../assets/icon-tensile.png";
import iconWater from "../assets/icon-water.png";
import iconLab from "../assets/icon-lab.png";

const Certifications = () => (
  <section className="bg-[#E31C1C] text-white py-24 px-4">
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-5xl font-bold tracking-wide uppercase">CERTIFIED. RELIABLE. READY.</h2>
    </div>
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 mt-16 gap-10 text-center">
      <div>
        <img
          src={iconTensile}
          alt="Tensile Strength Icon"
          className="mx-auto mb-5 w-[60px] h-[60px] sm:w-[84px] sm:h-[84px]"
          data-aos="zoom-in"
          data-aos-delay="100"
        />
        <p className="text-2xl sm:text-3xl font-semibold">Tensile Strength</p>
        <p className="text-1xl sm:text-2xl mt-1">{">45 MPa"}</p>
      </div>
      <div>
        <img
          src={iconWater}
          alt="Tensile Strength Icon"
          className="mx-auto mb-5 w-[60px] h-[60px] sm:w-[84px] sm:h-[84px]"
          data-aos="zoom-in"
          data-aos-delay="100"
        />
        <p className="text-2xl sm:text-3xl font-semibold">Water Resistance</p>
        <p className="text-1xl sm:text-2xl mt-1">MA Certified</p>
      </div>
      <div>
        <img
          src={iconLab}
          alt="Tensile Strength Icon"
          className="mx-auto mb-5 w-[60px] h-[60px] sm:w-[84px] sm:h-[84px]"
          data-aos="zoom-in"
          data-aos-delay="100"
        />
        <p className="text-2xl sm:text-3xl font-semibold">Lab-Tested by</p>
        <p className="text-1xl sm:text-2xl mt-1">ILAC-MRA & CNAS</p>
      </div>
    </div>
  </section>
);

export default Certifications;
