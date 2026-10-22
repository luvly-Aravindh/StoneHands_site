import logo from "../assets/logo.svg";
import cart from "../assets/cart.png";

const Header = () => (
  <header className="w-full">
    <div className="bg-[#FFE3E3] font-bold text-black text-sm sm:text-base text-center py-2 px-4 sm:px-0 font-medium leading-tight">
      Refer a friend to Storm Water Barrier and you'll both get $10 credit. Woohoo!
    </div>
    <div className="bg-[#ed1c20] flex flex-col sm:flex-row justify-between items-center px-4 sm:px-[72px] py-[16px] sm:py-[20px] border-b-[1px] border-[#ffffff4d] gap-3 sm:gap-0">
      <img src={logo} alt="Storm Water Barrier Logo" className="w-200 h-47 sm:h-full" />
      <div className="flex items-center gap-2 text-white cursor-pointer">
        <span className="text-sm sm:text-base font-medium">Shop Now</span>
        <img src={cart} alt="Shopping Bag Icon" className="h-5 sm:h-8" />
      </div>
    </div>
  </header>
);

export default Header;
