import home1 from "../assets/home-1.png";

const ProtectSection = () => (
  <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-[155px] pt-10 md:pt-[50px] gap-10 border-b border-[#cccccc5c]">
    <div className="w-full md:w-1/2 text-left text-center md:text-left">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black leading-snug md:leading-tight">
        PROTECT YOUR HOME,
        <br />
        YOUR BUSINESS,
        <br />
        YOUR PEACE OF MIND
      </h2>
      <p className="text-[#646464] mt-4 text-base sm:text-lg md:text-2xl leading-relaxed">
        We’ve all seen how fast monsoon floods can strike, streets turn to rivers, shops go underwater, and
        homes are wrecked in minutes.
      </p>
      <p className="text-lg sm:text-3xl md:text-[40px] text-black mt-6 w-full md:w-[850px]">
        {"Don't wait for disaster to remind you. "}
        <br />
        Protect what matters today.
      </p>
    </div>
    <div className="w-full md:w-1/2 -z-20 flex justify-center md:justify-end">
      <img src={home1} alt="Protect your home" className="w-full max-w-[500px] md:max-w-screen-lg h-auto" />
    </div>
  </section>
);

export default ProtectSection;
