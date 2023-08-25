import React from "react";
import Image from "next/image";

const MenuData = [
  { id: "1", data: "About" },
  { id: "2", data: "Contact Us" },
  { id: "3", data: "Blog" },
];

const HeaderMenu = () => {
  return (
    <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-8 text-xs md:text-base font-medium">
      <Image src="/logo.png" alt="logo" width={66} height={23} />
      {MenuData.map((item) => (
        <h2 key={item.id}>{item.data}</h2>
      ))}
    </div>
  );
};

export default HeaderMenu;
