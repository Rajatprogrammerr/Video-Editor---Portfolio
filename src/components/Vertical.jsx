import React from 'react';
// import edtech1 from '../assets/Edtech1.mp4';
// import tech from "../assets/tech.mp4"
// import edtech3 from '../assets/Edtech3.mp4';
// import edtech4 from '../assets/Edtech4.mp4';

const Vertical = () => {
  // Store videos in an array for cleaner rendering
  const videos = ["https://res.cloudinary.com/dwvkomwia/video/upload/q_auto/f_auto/v1775067632/Edtech4_fjkftj.mp4",
    "https://res.cloudinary.com/dwvkomwia/video/upload/q_auto/f_auto/v1775067626/tech_sboivl.mp4",
    "https://res.cloudinary.com/dwvkomwia/video/upload/q_auto/f_auto/v1775067603/Edtech3_mbnxmr.mp4",
    "https://res.cloudinary.com/dwvkomwia/video/upload/q_auto/f_auto/v1775067625/Edtech1_gul3rv.mp4"];

  return (
    <div className="flex flex-col items-center overflow-x-hidden min-h-screen p-4 sm:p-8">
      {/* Responsive Text: Scales from 4xl (mobile) to 6xl (desktop) */}
      <h1 className="mt-24 mb-10 text-white bungee-shade-regular text-4xl sm:text-5xl md:text-6xl text-center">
        Vertical Edits
      </h1>

      {/* Responsive Grid: 
        1 column on mobile
        2 columns on tablets (sm)
        4 columns on large screens (lg) 
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {videos.map((videoSrc, index) => (
          <video
            key={index}
            muted
            autoPlay
            loop
            controls
            playsInline
            // w-full makes it fill the grid cell, aspect-[9/16] prevents layout shifts before load
            className="w-full h-auto rounded-3xl shadow-lg object-cover aspect-[9/16]"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
    </div>
  );
};

export default Vertical;