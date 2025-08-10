import sofia from "../assets/Video1_1.mp4";
import karan from "../assets/Karan.mp4";

const Video = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 md:px-10 lg:px-20 space-y-8">
      
      {/* Heading */}
      <div className="font-bold text-white text-xl sm:text-2xl flex flex-wrap justify-center gap-2">
        <span>Creativity is</span>
        <span className="hover:text-red-600 pinyon-script-regular text-2xl sm:text-3xl">
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
          <source src={sofia} type="video/mp4" />
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
          <source src={karan} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
