import React from "react";

type textType = {
  title: string;
  description: string;
  textColor: string;
  h1FontSize: string;
  h3FontSize: string;
  h1FontWeight: string;
  h3FontWeight: string;
  spaceBetween: string;
  maxWidth: string;
};

const BannerText = ({
  title,
  description,
  textColor,
  h1FontSize,
  h3FontSize,
  h1FontWeight,
  h3FontWeight,
  spaceBetween,
  maxWidth,
}: textType) => {
  return (
    <div className={`${spaceBetween} ${maxWidth}`}>
      <h1 className={`${textColor} ${h1FontSize} ${h1FontWeight}`}>{title}</h1>
      <h3 className={`${textColor} ${h3FontSize} ${h3FontWeight}`}>
        {description}
      </h3>
    </div>
  );
};

export default BannerText;
