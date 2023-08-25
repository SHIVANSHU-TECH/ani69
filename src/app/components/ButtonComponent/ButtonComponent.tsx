import React from "react";

type ButtonType = {
  title: string;
  textColor: string;
  bgColor: string;
  paddingLeftRight: string;
  paddingTopBottom: string;
  borderRadius: string;
  border: string;
  fontSize: string;
  onHover: string;
};

const ButtonComponent = ({
  title,
  textColor,
  bgColor,
  paddingLeftRight,
  paddingTopBottom,
  borderRadius,
  border,
  fontSize,
  onHover,
}: ButtonType) => {
  return (
    <div>
      <button
        className={`${textColor} ${bgColor} ${paddingLeftRight} ${paddingTopBottom} ${borderRadius} ${border} ${fontSize} ${onHover}`}
      >
        {title}
      </button>
    </div>
  );
};

export default ButtonComponent;
