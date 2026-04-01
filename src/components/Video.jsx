import React from 'react';

const Video = () => {
  // ✅ Replace these placeholder URLs with your actual Cloudinary video links
  const sofiaUrl = "https://res.cloudinary.com/dwvkomwia/video/upload/q_auto/f_auto/v1775069084/Video1_1_e9slkt.mp4";
  const karanUrl = "https://res.cloudinary.com/dwvkomwia/video/upload/q_auto/f_auto/v1775069073/Karan_wskrxs.mp4";

  return (
    <div className="flex flex-col justify-center items-center px-4 md:px-10 lg:px-20 space-y-8">
      
      {/* Heading */}
      <div className="font-bold text-white text-xl sm:text-2xl flex flex-wrap justify-center gap-2">
        <span>Creativity is</span>
        <span className="text-red-600 pinyon-script-regular text-2xl sm:text-3xl">
          Endless
        </span>
      </div>

      {/* First Video */}
      <div className="flex justify-center items-center w-full">
        <video
          muted
          autoPlay
          loop
          controls
          playsInline
          className="rounded-3xl w-[90vw] sm:w-[70vw] md:w-[50vw]"
        >
          {/* Source points to the Cloudinary variable */}
          <source src={sofiaUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Second Video */}
      <div className="flex flex-col items-center justify-center w-full">
        <video
          muted
          autoPlay
          loop
          controls
          playsInline
          className="rounded-3xl w-[90vw] sm:w-[70vw] md:w-[50vw]"
        >
          {/* Source points to the Cloudinary variable */}
          <source src={karanUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;