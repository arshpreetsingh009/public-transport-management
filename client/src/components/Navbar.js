// import { FiShoppingCart } from "react-icons/fi";
import NavButton from "./NavButton";
import NavLinks from "./NavLinks";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" border-b-[1px] border-gray-200 w-full bg-white">
      <nav className=" flex justify-between items-center mx-20 py-2  ">
        <div className="block md:hidden absolute aspect-square  z-100 left-2 top-2">
          <NavButton />
        </div>
        <div className="text-xl font-semibold">Green Bus</div>
        <NavLinks />

        <NavLink to="/cart">
          {/* <FiShoppingCart
            className="text-gray-700 hover:text-black"
            size={22}
          /> */}
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
