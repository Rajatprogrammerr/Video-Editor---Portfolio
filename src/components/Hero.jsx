
import Img from "../assets/FINAL_1.mp4"
import Imag from "../assets/Love.mp4"
import gsap from "gsap"



import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);


const Hero =()=>{
   



    return (
        <>
            <div className="flex flex-col justify-center items-center md:mt-0 mt-8">
                <div className=' font-bold bg-gradient-to-r from-white to-slate-900 text-transparent bg-clip-text md:text-7xl text-4xl relative z-10 '>
                    NIZAMI NOOR


                </div>
                <div className="bio font-bold text-xl text-slate-400 relative z-10" >
                     VIDEO EDITOR
                </div>
                <div className="img flex md:flex-row flex-col gap-20 md:mt-16 mt-8 ">
                    <video muted autoPlay loop playsInline className='rounded-3xl w-[300px]  cursor-grab'>
                        <source src={Img} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <video muted autoPlay loop playsInline className='rounded-3xl w-[300px]  cursor-grab'>
                        <source src={Imag} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                </div>
            </div >
        </>
    )
}

export default Hero
