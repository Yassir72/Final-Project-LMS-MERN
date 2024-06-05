import React from "react";

const Card3 = ({ className, heading, description, thumbnailSrc, videoSrc }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${className}`}>
      <div className="aspect-w-16 aspect-h-9">
        {videoSrc ? (
          <video controls className="w-full h-full object-cover rounded-lg">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={thumbnailSrc} alt={heading} className="w-full h-full object-cover rounded-lg" />
        )}
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-bold">{heading}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card3;
