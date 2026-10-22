import barrierProduct from "../assets/barrier-product.png";

const useCases = [
  "Residential buildings & gates",
  "Shops & showrooms",
  "Hospitals & medical units",
  "Schools & institutions",
  "Industrial sites",
  "Warehouses",
  "Basement parkings",
  "Government and public buildings",
];

const IdealForProtection = () => (
  <section className="py-12 md:py-28 px-4 sm:px-6 md:px-12">
    <div className="text-center mb-10 sm:mb-12">
      <h3 className="text-2xl sm:text-3xl md:text-5xl font-[800] tracking-wide">IDEAL FOR</h3>
      <h2 className="text-5xl sm:text-6xl md:text-9xl font-extrabold tracking-tight">PROTECTION</h2>
    </div>
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto text-center md:text-left">
      <div className="w-full md:w-[40%] space-y-3 sm:space-y-4">
        {useCases.map((item, i) => (
          <div
            className="border-b border-gray-300 pb-2 sm:pb-3 text-left text-base sm:text-2xl text-black-900"
            key={i}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
          <img src={barrierProduct} alt="Barrier Product" className="w-[250px] sm:w-[300px] md:w-full object-contain" />
        </div>
      </div>
    </div>
  </section>
);

export default IdealForProtection;
