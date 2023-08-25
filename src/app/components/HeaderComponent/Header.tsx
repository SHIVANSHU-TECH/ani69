import React from "react";
import HeaderMenu from "./HeaderMenu";
import Headeruser from "./HeaderUser";

const Header = () => {
  return (
    <div className="w-full  h-auto fixed top-0 z-[999] border bg-white">
      <div className="mx-1 md:mx-4 lg:mx-14 w-auto py-3 md:py-4 lg:py-6 flex flex-col md:flex-row items-center justify-between">
        <HeaderMenu />
        <Headeruser />
      </div>
    </div>
  );
};

export default Header;
