import React from "react";
import ServiceComponent from "./ServiceComponent";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      imgSrc: "/Rectangle 137.png",
      title: "Create Own Characters",
      sub_title: "You can create your own customized Animated characters",
    },
    {
      id: 2,
      imgSrc: "/animation.png",
      title: "Text to Animation",
      sub_title: "You can make your own animations at your fingertips",
    },
    {
      id: 3,
      imgSrc: "/Rectangle 6.png",
      title: "Text to AI image",
      sub_title: "You can easily Generate AI powered images",
    },
  ];
  return (
    <div className="bg-[#060622] py-12 md:py-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-6 md:gap-12 lg:grid-cols-3">
          {servicesData.map((item) => (
            <div key={item.id} className="flex justify-center">
              <ServiceComponent
                image={item.imgSrc}
                title={item.title}
                subTitle={item.sub_title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;