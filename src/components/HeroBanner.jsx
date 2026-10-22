import google from "../assets/google.png";
import stars from "../assets/stars.png";
import downArrow from "../assets/down-arrow.png";

const HeroBanner = () => (
  <section className="banner-wrapper px-4 sm:px-0 py-10 sm:py-0 text-center sm:text-left relative overflow-hidden">
    <div className="banner-overlay max-w-3xl mx-auto sm:mx-0 animate-fade-slide">
      <h1 className="text-3xl sm:text-[64px] font-extrabold leading-tight mb-4 sm:mb-0">
        Prepared
        <br />
        for the next
        <br />
        flood?
      </h1>
      <p className="text-base sm:text-xl text-gray-100 mb-6 sm:mb-4 leading-relaxed">
        {"Get India’s most advanced modular flood "}
        <br className="hidden sm:block" />
        {"barrier and stay protected no matter how "}
        <br className="hidden sm:block" />
        bad the downpour gets.
      </p>
      <button className="bg-[#ed1c20] text-white px-6 py-6 lg:py-10 rounded-full font-semibold text-sm sm:text-4xl mb-6 sm:mb-4 animate-pulse hover:animate-none">
        ORDER NOW
      </button>
      <div className="google-rating flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 text-sm text-white">
        <div className="flex items-center gap-2">
          <img src={google} alt="Google Icon" className="w-full sm:w-full h-auto sm:h-full" />
          <img src={stars} alt="Google Rating" className="h-5 sm:h-6" />
        </div>
        <span className="text-[13px] sm:text-xl text-gray-200">
          {"Based on "}
          <strong>4,932</strong>
          {" reviews"}
        </span>
      </div>
    </div>
    <div className="hidden sm:absolute sm:bottom-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:animate-bounce sm:block">
      <img src={downArrow} alt="Scroll down" className="w-6 h-6" />
    </div>
  </section>
);

export default HeroBanner;
