import React from "react";
import TeamMember from "./TeamMember";

const Team = () => {
  const teamInfo = [
    {
      id: 1,
      src: "/vishwajeet.jpeg",
      name: "VISHWAJEET SINGH",
      designation: "Founder",
    },
    {
      id: 2,
      src: "/shivanshu.jpeg",
      name: "Shivanshu shukla",
      designation: "CO-Founder",
    },
    {
      id: 3,
      src: "/ritwik.jpeg",
      name: "Ritwik",
      designation: "Co-founder",
    },
    {
      id: 4,
      src: "/vinny.jpeg",
      name: "VINNY",
      designation: "Full stack Developer",
    },
  ];

  return (
    <div className="bg-[#D9D9D9] relative py-12 md:py-20">
      <h1 className=" text-xl md:text-4xl font-semibold leading-8 absolute top-12 left-4 md:left-20">
        Team Members
      </h1>
      <div className=" mt-7 w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] m-auto flex flex-col md:flex-row items-center justify-between md:py-20">
        {teamInfo.map((member) => (
          <TeamMember
            key={member.id}
            imgSrc={member.src}
            memberName={member.name}
            memberDesignation={member.designation}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;