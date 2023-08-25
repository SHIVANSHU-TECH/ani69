import React from "react";
import BannerText from "../BannerText/BannerText";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="w-full bg-[#060622] pt-20">
      <div className="mx-4 md:mx-14 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-10 md:space-y-28 my-10 md:my-32">
          <BannerText
            title="Ani69"
            description="We present to you an innovative tool that combines artificial intelligence with human emotions."
            h1FontSize="text-3xl md:text-5xl"
            h1FontWeight="font-bold"
            h3FontSize="text-xl md:text-2xl"
            h3FontWeight="font-normal"
            textColor="text-white"
            spaceBetween="space-y-4 md:space-y-8"
            maxWidth="max-w-lg md:max-w-xl"
          />
          <ButtonComponent
            title="Try Now"
            bgColor="bg-gradient-to-l from-[#2200AC] to-[#6343E2]"
            textColor="text-white"
            paddingLeftRight="px-6 md:px-10"
            paddingTopBottom="py-2 md:py-3"
            borderRadius="rounded-3xl"
            border="border-none"
            fontSize="text-lg md:text-xl"
            onHover="hover:bg-gradient-to-r from-[#2200AC] to-[#6343E2]"
          />
        </div>
        <div className="md:w-1/2">
          <Image src={"/gifs.gif"} alt="gif" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;