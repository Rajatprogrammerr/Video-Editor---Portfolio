import React from 'react';

const Vertical = () => {
  const videos = [
    "https://res.cloudinary.com/dwvkomwia/video/upload/q_auto/f_auto/v1775067632/Edtech4_fjkftj.mp4",
    "https://res.cloudinary.com/dwvkomwia/video/upload/q_auto/f_auto/v1775067626/tech_sboivl.mp4",
    "https://res.cloudinary.com/dwvkomwia/video/upload/q_auto/f_auto/v1775067603/Edtech3_mbnxmr.mp4",
    "https://res.cloudinary.com/dwvkomwia/video/upload/q_auto/f_auto/v1775067625/Edtech1_gul3rv.mp4",
    "https://res.cloudinary.com/dwvkomwia/video/upload/q_auto/f_auto/v1775805760/Sample_glwadk.mp4",
    "https://res.cloudinary.com/dwvkomwia/video/upload/q_auto/f_auto/v1775805685/Gali_no_11_saweyy.mp4"
  ];

  return (
    <div className="flex flex-col items-center overflow-x-hidden min-h-screen p-4 sm:p-8">
      <h1 className="mt-24 mb-10 text-white bungee-shade-regular text-4xl sm:text-5xl md:text-6xl text-center">
        Vertical Edits
      </h1>

      {/* Changed lg:grid-cols-4 to lg:grid-cols-3. 
        Because you have 6 videos, this creates a perfectly balanced 
        grid (2 rows of 3) on large screens.
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {videos.map((videoSrc, index) => (
          <div key={index} className="w-full flex justify-center">
            <video
              muted
              autoPlay
              loop
              controls
              playsInline
              // Changed h-auto to h-full, and added a nice hover scale effect
              className="w-full h-full max-h-[80vh] rounded-3xl shadow-lg object-cover aspect-[9/16] transition-transform duration-300 hover:scale-[1.02]"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vertical;