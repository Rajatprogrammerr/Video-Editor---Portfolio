import pic from "../assets/pic.png";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a simple timeline without ScrollTrigger
      const tl = gsap.timeline();

      // 1. Animate the image in
      tl.fromTo(
        "img",
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
      );

      // 2. Animate the text items sequentially using 'stagger'
      tl.fromTo(
        ".anim-text",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" },
        "-=0.5" // This makes the text start animating just before the image finishes
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col md:flex-row justify-around items-center min-h-screen px-6 md:px-16"
    >
      {/* Left Side */}
      <div className="relative flex flex-col items-center md:items-start justify-center text-center md:text-left space-y-5">
        <div className="pinyon-script-regular text-white text-4xl md:text-7xl z-10">
          Noor
        </div>
        <img
          src={pic}
          alt="Nizami"
          className="w-64 h-64 md:w-[400px] md:h-[400px] object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Right Side */}
      <div className="text-white text-xl sm:text-2xl md:text-4xl w-full md:w-auto mt-10 md:mt-0 space-y-10  tracking-wider flex flex-col justify-center items-center md:items-start  ">
        <p className="anim-text text-white font-extrabold">After Effects</p>
        <p className="anim-text text-white font-extrabold">Premiere Pro</p>
        <p className="anim-text text-white font-extrabold">Video Enhancement</p>
        <p className="anim-text text-white font-extrabold">Image UpScaling</p>
      </div>
    </div>
  );
};

export default Hero;