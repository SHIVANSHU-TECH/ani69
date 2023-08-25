import Image from "next/image";
import React from "react";

type TeamType = {
  imgSrc: string;
  memberName: string;
  memberDesignation: string;
};

const TeamMember = ({ imgSrc, memberName, memberDesignation }: TeamType) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <Image
        src={imgSrc}
        alt="user1"
        width={150}
        height={150}
        style={{
          width: "150px",
          height: "150px",
          objectFit: "cover",
          border: "4px solid #060622",
          borderRadius: "50%",
        }}
      />
      <h1 className="text-xl font-medium leading-6 text-[#1E1E1E] text-center">
        {memberName}
      </h1>
      <h2 className="text-base font-normal leading-5 text-[#1E1E1E] text-center">
        {memberDesignation}
      </h2>
    </div>
  );
};
export default TeamMember;