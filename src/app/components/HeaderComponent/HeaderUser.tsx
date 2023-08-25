import Image from "next/image";
import React from "react";
import Link from "next/link";
const Headeruser = () => {
  return (
    <div className="flex items-center space-x-1">
      <div>
        <select
          name="features"
          id="features"
          className="bg-transparent border py-1 px-2 text-xs md:text-base" >
          <option value="default">Features</option>
          <option value="animation">Text to Animation</option>
          <option value="image">Text to Image</option>
          <option value="speech">Text to Speech</option>
        </select>
      </div>
      <div className="flex items-center space-x-1">
        <Image src="/user.png" alt="user" width={25} height={25} />
        <Link href="/login" className="border py-1 px-2 md:text-base">Sign In/ up</Link>
      </div>
    </div>
  );
};

export default Headeruser;
