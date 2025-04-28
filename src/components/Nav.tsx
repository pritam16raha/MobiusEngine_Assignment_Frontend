 // 👈 Correct import path

import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6">
      <div className="container flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src="/logo/sidewhite.svg" alt="MobiusEngine" className="h-8" />
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex items-center gap-10">
          {["Home", "About Us", "Plans", "Testimonials", "Privacy Policy"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-white font-dmSans text-[18px] hover:text-lightGray transition"
              >
                {item}
              </a>
            )
          )}
          <a
            href="#"
            className="text-white font-dmSans text-[18px] hover:text-lightGray flex items-center gap-1 transition"
          >
            More
            <span className="text-xs">▼</span>
          </a>
        </div>

        {/* Get Started Button using Button component */}
        <div className="hidden md:flex">
          <Button text="Get Started" />
          {/* 👈 Using your Button component */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
