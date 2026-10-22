import check from "../assets/check.png";
import arrowWorks from "../assets/arrow-works.png";
import floodBarrierCloseup from "../assets/flood-barrier-closeup.png";

const points = [
  "Anti-slip foam seals the bottom",
  "Book-fold structure auto-balances",
  "Buckle-connect each piece in seconds",
  "Curve walls using adjustable end-links",
  "Stack and store flat after use",
];

const HowItWorks = () => (
  <section className="bg-[#f9f9f9] py-12 md:py-28 px-4 sm:px-8 md:px-16 font-sans">
    <div className="flex justify-center relative">
      <div className="text-center">
        <h3 className="text-xl sm:text-2xl md:text-4xl font-extrabold uppercase tracking-wider text-black">
          How It
        </h3>
        <h2 className="text-5xl sm:text-7xl md:text-9xl font-extrabold text-black mt-2 mb-4">WORKS</h2>
        <div className="relative">
          <img
            src={arrowWorks}
            alt="Arrow"
            className="absolute top-[-85px] right-0 sm:right-[-80px] w-8 sm:w-20 hidden sm:block"
          />
        </div>
      </div>
    </div>
    <div className="max-w-5xl mt-0 md:mt-24 mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
      <div className="text-center md:text-left">
        <h4 className="text-xl sm:text-3xl md:text-4xl font-[400] text-gray-800 mb-4 sm:mb-5" data-aos="fade-right">
          Self-Locking, Pressure-Sealing Technology
        </h4>
        <p
          className="text-gray-500 text-sm sm:text-base md:text-2xl mb-6 max-w-md mx-auto md:mx-0"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          Storm Water Barrier uses a unique L-type design that tightens its grip as water rises, thanks to
          Pressure-Lock Engineering.
        </p>
        <ul className="space-y-5 w-full max-w-[700px] mx-auto md:mx-0">
          {points.map((point, i) => (
            <li
              data-aos="fade-right"
              data-aos-delay={200 + i * 100}
              className="flex items-start bg-white rounded-full shadow-md px-4 py-4 sm:px-6 sm:py-6 space-x-3"
              key={i}
            >
              <img src={check} alt="Tick" className="w-4 h-4 sm:w-6 sm:h-6 mt-2" />
              <span className="text-gray-800 text-sm sm:text-2xl font-medium">{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center md:items-end pt-12 md:pt-0">
        <div data-aos="zoom-in" data-aos-delay="300">
          <img
            src={floodBarrierCloseup}
            alt="How it works"
            className="w-[250px] sm:w-[300px] md:w-[390px] max-w-full transform transition duration-700 ease-in-out hover:scale-105"
          />
        </div>
        <p
          className="text-center md:text-left text-base sm:text-xl md:text-2xl text-black-500 mt-4 max-w-sm sm:max-w-sm"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {"The higher the floodwater, the stronger the seal. "}
          <br />
          <span className="text-red-500 font-bold">No tools. No confusion. No delays.</span>
        </p>
      </div>
    </div>
  </section>
);

export default HowItWorks;
