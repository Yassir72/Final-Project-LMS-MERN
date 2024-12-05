import React from "react";

const Card3 = ({ className, heading, description, thumbnailSrc }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${className}`}>
      <img src={thumbnailSrc} alt="Thumbnail" className="w-full h-48 object-cover rounded-t-lg" />
      <div className="flex flex-col items-center justify-center h-32 p-4">
        <h2 className="text-xl font-bold text-center">{heading}</h2>
        <p className="text-center mt-2 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Card3;
