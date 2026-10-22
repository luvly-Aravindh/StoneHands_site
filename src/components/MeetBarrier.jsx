import barrier from "../assets/barrier.png";
import arrowBarrier from "../assets/arrow-barrier.png";
import arrowPlace from "../assets/arrow-place.png";
import defend from "../assets/defend.png";
import lock from "../assets/lock.png";

const MeetBarrier = () => (
  <section className="w-full bg-white px-4 sm:px-8 lg:px-[72px] py-12 lg:py-16">
    <div className="text-center w-full">
      <h1 className="text-xl sm:text-2xl lg:text-4xl font-extrabold tracking-wider text-black">MEET</h1>
      <h1 className="text-4xl sm:text-6xl lg:text-9xl font-extrabold mt-2 leading-tight sm:leading-tight lg:leading-[105px]">
        {"STORM WATER "}
        <br /> <span className="text-[#ed1c24]">BARRIER</span>
      </h1>
    </div>
    <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-center">
      <div className="w-full lg:w-1/2">
        <div className="flex items-center justify-center lg:justify-end gap-2 mt-8 sm:mt-[100px] lg:mt-[162px] lg:pr-[95px]">
          <span className="text-base sm:text-3xl font-medium">Just place.</span>
          <img src={arrowPlace} alt="Arrow" className="w-5 h-5 sm:w-12 sm:h-12" />
        </div>
        <div className="flex justify-center gap-3 sm:gap-4 mt-8 sm:mt-[80px] lg:mt-[60px] flex-wrap">
          <div className="flex items-center gap-2 px-8 py-2 sm:px-7 sm:py-5 bg-white shadow-md rounded-full">
            <img src={defend} alt="Defend" className="w-4 h-4 sm:w-8 sm:h-8" />
            <span className="text-gray-800 text-sm sm:text-2xl font-medium">Defend.</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-3 bg-white shadow-md rounded-full">
            <img src={lock} alt="Lock" className="w-4 h-4 sm:w-8 sm:h-8" />
            <span className="text-gray-800 text-sm sm:text-2xl font-medium">Lock.</span>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0">
        <img
          src={barrier}
          alt="Barrier"
          className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[610px] mx-auto lg:ml-[-78px] mt-[-10px] lg:mt-[-15px] relative z-10"
        />
        <img
          src={arrowBarrier}
          alt="Red Arrow"
          className="hidden sm:block absolute top-[10px] left-4 sm:left-4 w-20 sm:w-32 md:w-[14rem] lg:top-[57px] lg:left-[-115px] z-20"
        />
      </div>
    </div>
  </section>
);

export default MeetBarrier;
