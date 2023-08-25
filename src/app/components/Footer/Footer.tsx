import Image from "next/image";
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const FancyFooter: React.FC = () => {
  const title = [
    {
      id: 1,
      title: "Features",
      data: [
        { id: 1, value: "Text to Speech" },
        { id: 2, value: "Text to Image" },
        { id: 3, value: "Text to Animation" },
      ],
    },
    {
      id: 2,
      title: "Company",
      data: [
        { id: 1, value: "Contact Us" },
        { id: 2, value: "About" },
        { id: 3, value: "Blog" },
      ],
    },
    {
      id: 3,
      title: "Social",
      data: [
        { id: 1, value: "Twitter" },
        { id: 2, value: "LinkedIn" },
        { id: 3, value: "GitHub" },
        { id: 4, value: "FaceBook" },
      ],
    },
  ];
  const icons = [
    { id: 1, icon: <FaTwitter /> },
    { id: 2, icon: <FaLinkedin /> },
    { id: 3, icon: <FaGithub /> },
    { id: 4, icon: <FaFacebook /> },
  ];
   return (
    <footer>
      <div className="bg-gray-800 text-white py-10">
        <div className="w-[90%] mx-auto text-center">
          <Image src={"/logo.png"} alt="logo" width={100} height={55} />
        </div>
        <div className="w-[80%] py-16 mx-auto flex flex-col md:flex-row items-center justify-between">
          {title.map((item) => (
            <div key={item.id} className="text-[#C6C6C6] mb-8 md:mb-0">
              <h1 className="text-xl md:text-2xl font-semibold leading-6 md:leading-10 mb-5">
                {item.title}
              </h1>
              <div className="space-y-2">
                {item.data.map((val) => (
                  <p className="text-base font-normal leading-5" key={val.id}>
                    <a href="#">{val.value}</a>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#282d32] text-white">
        <div className="w-[80%] py-12 mx-auto flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-4xl font-medium leading-tight mb-5 md:mb-8">
            About Company
          </h1>
          <div className="w-[90%] mx-auto">
            <p className="text-sm md:text-base text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Beatae ad expedita eos id rerum veniam neque sed sequi laudantium
              repellendus in reprehenderit odit fugit, voluptates itaque!
              Excepturi provident amet distinctio iure quo dolorem commodi nulla
              quidem, enim inventore praesentium voluptas impedit illum debitis
              a id.
            </p>
          </div>
        </div>
        <div className="w-[60%] py-8 mx-auto flex items-center justify-between">
          {icons.map((icon) => (
            <div
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 flex items-center justify-center"
              key={icon.id}
            >
              <a href="#">{icon.icon}</a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FancyFooter;
