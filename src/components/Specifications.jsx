const specs = [
  { label: "NAME", value: "WZ75 STORM WATER BARRIER" },
  { label: "SIZE", value: "85CM*100CM*75CM, ±5%" },
  { label: "THICKNESS", value: "5MM±5%" },
  { label: "TEXTURE OF MATERIAL", value: "REDABS, SURFACE UV RESISTANT COATING" },
  { label: "WEIGHT", value: "9.6KG±2%/PCS" },
  { label: "USEFUL HEIGHT", value: "75CM" },
  { label: "MOLECULAR COMPOSITION", value: "ABS" },
  { label: "DENSITY (G/CM³)", value: "1.041" },
  { label: "TENSILE STRENGTH", value: "≥70MPA" },
  { label: "BENDING STRENGTH", value: "≥45MPA" },
  { label: "TEMPERATURE RESISTANCE", value: "-10〜+80°C" },
  { label: "40HQ", value: "BULK ABOUT 1300PCS" },
];

const Specifications = () => (
  <section className="max-w-6xl mx-auto px-0 py-28">
    <div className="overflow-hidden border border-gray-300 rounded-2xl">
      <div className="bg-white text-center py-5 border-b border-gray-200">
        <h2 className="text-4xl font-bold tracking-wide">SPECIFICATIONS</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {specs.map((spec, i) => (
          <div
            className="grid grid-cols-2 items-center text-sm md:text-2xl transition duration-300 hover:bg-[#fdf4f4]"
            data-aos="fade-up"
            data-aos-delay={i * 100}
            key={i}
          >
            <div className="px-6 py-4 text-left text-gray-700 font-medium hover:text-[#ed1c24] transition-colors duration-300">
              {spec.label}
            </div>
            <div className="px-6 py-4 text-left text-gray-900 border-l border-gray-200 hover:text-[#ed1c24] transition-colors duration-300">
              {spec.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Specifications;
