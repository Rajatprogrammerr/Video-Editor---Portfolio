import pic from "../assets/pic.png";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const paragraphs = gsap.utils.toArray(".anim-text");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000",
          scrub: 1,
          pin: true,
          // markers: true,
        },
      });

      tl.fromTo(
        "img",
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 }
      );

      paragraphs.forEach((p) => {
        tl.fromTo(
          p,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "+=0.5"
        );
      });
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
      <div className="text-white text-xl sm:text-2xl md:text-4xl w-full md:w-auto mt-10 md:mt-0 space-y-10 limelight-regular tracking-wider flex flex-col justify-center items-center md:items-start">
        <p className="anim-text text-blue-200">After Effects</p>
        <p className="anim-text text-blue-200">Premiere Pro</p>
        <p className="anim-text text-blue-200">Video Enhancement</p>
        <p className="anim-text text-blue-200">Image UpScaling</p>
      </div>
    </div>
  );
};

export default Hero;
