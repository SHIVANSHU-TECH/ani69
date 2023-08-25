import Image from "next/image";
import React from "react";

const ServiceComponent = ({ image, title, subTitle }: any) => {
  return (
    <div className="bg-[#4DADAD] w-[290px] flex items-center justify-center rounded-xl">
      <div className="max-w-[250px] mt-8 mb-16 space-y-5">
        <Image src={image} alt="Rectangle" width={250} height={175} />
        <h1 className="text-xl font-semibold leading-6">{title}</h1>
        <h2 className="text-sm font-medium leading-4">{subTitle}</h2>
      </div>
    </div>
  );
};

export default ServiceComponent;
