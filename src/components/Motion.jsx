import React from 'react';
import motion1 from '../assets/AICerts.mp4';
import motion2 from '../assets/Master_Frame.mp4';

const MotionGraphics = () => {
  const videos = ["https://res.cloudinary.com/dwvkomwia/video/upload/q_auto/f_auto/v1775067600/AICerts_jxshfq.mp4", 
    "https://res.cloudinary.com/dwvkomwia/video/upload/q_auto/f_auto/v1775067615/Master_Frame_zsyzen.mp4"];

  return (
    <div className='flex flex-col items-center overflow-x-hidden w-full pb-16'>
      
      {/* 1. Responsive Title: text-4xl on mobile, 5xl on tablets, 6xl on desktop */}
      <h1 className="mt-16 md:mt-24 mb-8 md:mb-12 text-white bungee-shade-regular text-4xl sm:text-5xl md:text-6xl text-center px-4">
        Motion Graphics
      </h1>

      {/* 2. Container: Limits maximum width on giant screens and adds side padding */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3. The Grid: 1 column on mobile, 2 columns on tablets and up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 justify-items-center">
          {videos.map((videoSrc, index) => (
            <video
              key={index}
              muted
              autoPlay
              loop
              controls
              playsInline
              // 4. Video Sizing: Takes full width of its grid column and maintains 16:9 ratio
              className="w-full h-auto rounded-2xl md:rounded-3xl shadow-xl aspect-video bg-black/20"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default MotionGraphics;