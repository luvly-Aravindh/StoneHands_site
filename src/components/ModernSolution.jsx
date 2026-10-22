import check from "../assets/check.png";

const points = [
  "Deploy 10 meters in under 1 minute (solo)",
  "Blocks floodwater up to 75 cm",
  "Lab-certified. Storm-tested.",
  "Reusable. Stackable. Powerful.",
];

const ModernSolution = () => (
  <section className="flex flex-col md:flex-row items-center justify-center md:justify-around px-4 sm:px-8 md:px-[155px] py-10 md:py-[60px] gap-5 md:gap-8">
    <div className="w-full max-w-max text-center md:text-left">
      <h2 className="text-4xl sm:text-5xl md:text-[45px] pb-6 font-[300] text-black leading-[35px] sm:leading-[55px] md:leading-[50px]">
        The Modern Solution to Urban Flooding
      </h2>
      <p className="mt-4 text-[#646464] font-extralight text-base sm:text-lg md:text-[28px] leading-relaxed">
        Storm Water Barrier is a new-generation flood defense barrier designed to protect homes, buildings,
        hospitals, shops, and institutions quickly.
      </p>
    </div>
    <div className="w-full max-w-[550px] flex flex-col gap-4">
      {points.map((point, i) => (
        <div className="flex items-center bg-white rounded-full shadow-md px-5 py-5 sm:px-6 sm:py-7" key={i}>
          <img src={check} alt="Check Icon" className="w-4 h-4 sm:w-5 sm:h-5 mr-3" />
          <span className="text-black text-sm sm:text-2xl font-medium">{point}</span>
        </div>
      ))}
    </div>
  </section>
);

export default ModernSolution;
