import check from "../assets/check.png";
import arrowOrder from "../assets/arrow-order.png";

const perks = ["Modular Barrier Units", "Quick Buckles", "User Guide", "Free Shipping Across India"];

const OrderNow = () => (
  <section className="bg-[#F7F7F5] py-12 sm:py-32 px-4 text-center">
    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-16 leading-snug sm:leading-normal">
      ORDER YOUR STORM WATER BARRIER
      <br />
      NOW WITH FREE DELIVERY
    </h2>
    <p className="text-sm sm:text-base md:text-2xl text-[#646464] font-600 mb-8 sm:mb-16">
      Order today and get Storm Water Barrier shipped right to your door with:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto mb-8 sm:mb-12">
      {perks.map((perk, i) => (
        <div
          className="flex items-center gap-3 bg-white rounded-full py-4 sm:py-6 px-6 sm:px-8 text-base sm:text-2xl shadow text-left"
          key={i}
        >
          <img src={check} alt="tick" className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="text-gray-800 font-medium">{perk}</span>
        </div>
      ))}
    </div>
    <div className="relative inline-block mb-6 sm:mb-8">
      <button className="bg-[#E31C1C] animate-pulse hover:animate-none text-white font-semibold text-xl sm:text-[32px] px-10 sm:px-14 py-5 sm:py-6 rounded-2xl shadow hover:bg-[#c41616] transition">
        ORDER NOW
      </button>
      <img src={arrowOrder} alt="arrow" className="hidden sm:block absolute bottom-[20px] -right-28 w-24" />
    </div>
    <p className="text-sm sm:text-base md:text-2xl text-gray-800 px-2 sm:px-0">
      {"GET "}
      <span className="text-red-600 font-semibold">30% OFF!</span>
      {" OFFER VALID FOR THE "}
      <span className="text-red-600 font-semibold">FIRST 100 ORDERS</span>
      {" ONLY."}
    </p>
    <h3 className="mt-4 text-lg sm:text-xl md:text-4xl font-bold text-gray-900 leading-snug sm:leading-tight px-2 sm:px-0">
      DON’T WAIT FOR WATER TO RISE.
      <br />
      BE FLOOD SAFE. BE FUTURE READY.
    </h3>
  </section>
);

export default OrderNow;
