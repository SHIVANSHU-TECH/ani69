import Image from "next/image";
import React from "react";
import ButtonComponent from "../components/ButtonComponent/ButtonComponent";

const login = () => {
  return (
    <div className="w-full h-[100vh] bg-[#D9D9D9] pt-32">
      <div className="w-[340px] m-auto mt-10">
        <div className="flex flex-col items-center justify-center">
          <Image src={"/logo.png"} alt="logo" width={103} height={57} />
          <h1 className="text-3xl font-normal leading-9 text-[#3C3C3C] my-8">
            Sign in to your account
          </h1>
          <div className="space-y-5 text-center mb-5">
            <input
              className="py-2 px-4 bg-[inherit] border-[3px] border-[#4E4E4E] w-full"
              type="text"
              placeholder="Email or Phone Number"
            />
            <input
              className="py-2 px-4 bg-[inherit] border-[3px] border-[#4E4E4E] w-full"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-6">
            <ButtonComponent
              title="Sign in"
              bgColor="bg-[#4DADAD]"
              textColor="text-[#3C3C3C]"
              paddingLeftRight="px-32"
              paddingTopBottom="py-2"
              borderRadius="rounded-[10px]"
              border="border-[3px] border-[#3C3C3C]"
              fontSize="text-xl"
              onHover=""
            />
          </div>
        </div>
        <a className="underline" href="#">
          Forgot password?
        </a>
        <div className="flex items-center justify-between my-10">
          <div className="h-[2px] bg-[#3D3D3D] w-[45%]"></div>
          <h3>or</h3>
          <div className="h-[2px] bg-[#3D3D3D] w-[45%]"></div>
        </div>
        <div className="w-full bg-white flex items-center justify-center mb-6 py-2 rounded-[10px] space-x-2 cursor-pointer">
          <Image src={"/google.png"} alt="google logo" width={16} height={15} />
          <h1>Sign in with Google</h1>
        </div>
        <div className="w-full bg-white flex items-center justify-center mb-6 py-2 rounded-[10px] space-x-2 cursor-pointer">
          <Image
            src={"/LinkedIn.png"}
            alt="google logo"
            width={16}
            height={16}
          />
          <h1>Sign in with LinkedIn</h1>
        </div>
      </div>
    </div>
  );
};

export default login;
