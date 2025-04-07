
// import { features } from "../constant"
// import ReactPlayer from "react-player"
// import vid from "../assets/AB.mp4"
// import vid2 from "../assets/X.mp4"

// const Inview = () => {
//     return (
//         <>
//             <div className="h-screen">


//                 <div className="mt-24 text-orange-700 text-lg text-center">
//                     Paid Work
//                 </div>
//                 <div className="mt-12 text-white text-6xl text-center">
//                     Easy Services Available
//                 </div>
//                 <div className="h-full p-10 flex gap-10 flex-col justify-center items-center">
//                     <ReactPlayer url="https://youtu.be/jxl1GJ14OKc?si=0DzWgGOCAXazsP7L" width="100%" height="100%" controls={true} className="rounded-lg " />
//                     <ReactPlayer url="https://youtu.be/eWMBy5Sm318?si=EgYfO14-lMBJlN9p" width="100%" height="100%" controls={true} className="rounded-lg " />
//                     <ReactPlayer url="https://youtu.be/iqgj21YYXJU?si=djorJMG8srCQIg21" width="100%" height="100%" controls={true} className="rounded-lg " />
//                     <ReactPlayer url="https://youtu.be/n7eXBBdlrCo?si=EOe7nYXUT1TceTH2" width="100%" height="100%" controls={true} className="rounded-lg " />
//                     <ReactPlayer url="https://youtu.be/jjky_o8BPMI?si=6ognMMyQ10a5jVqN" width="100%" height="100%" controls={true} className="rounded-lg " />

//                 </div>
//                 <div className="flex gap-10 justify-around">
//                     <video muted autoPlay loop className='rounded-3xl h-[400px] mt-8 cursor-grab'>
//                         <source src={vid} type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                     <video muted autoPlay loop className='rounded-3xl h-[400px] mt-8 cursor-grab'>
//                         <source src={vid2} type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                 </div>
//             </div>
//             {/* <div className='text-white my-16 flex gap-6 flex-wrap w-full justify-center items-center'>
//                 {features.map((item, index) => (
//                     <div key={index} className='flex gap-8 border-1  border-orange-700 w-[400px] min-h-[200px] p-4'>
//                         <div className='text-orange-600 mt-2'>{item.icon}</div>
//                         <div className="content flex flex-col gap-10">
//                             <div className='text-xl font-bold'>{item.text}</div>
//                             <div className='text-slate-500'>{item.description}</div>
//                         </div>
//                     </div>
//                 ))}
//             </div> */}
//         </>
//     )
// }

// export default Inview


import React from "react";
import ReactPlayer from "react-player";
import vid from "../assets/AB_1.mp4";
import vid2 from "../assets/X.mp4";
import "../components/style.css";

const Inview = () => {
    return (
        <div className="h-screen">
            <div className="mt-24 text-white bungee-shade-regular text-6xl  text-center">
                Paid Work
            </div>
            
            <div className="w-full px-4 sm:px-6 md:px-12 lg:px-24 py-8 flex flex-col gap-10 justify-center items-center">
                {[
                    "https://youtu.be/jxl1GJ14OKc?si=0DzWgGOCAXazsP7L",
                    "https://youtu.be/eWMBy5Sm318?si=EgYfO14-lMBJlN9p",
                    "https://youtu.be/iqgj21YYXJU?si=djorJMG8srCQIg21",
                    "https://youtu.be/n7eXBBdlrCo?si=EOe7nYXUT1TceTH2",
                    "https://youtu.be/jjky_o8BPMI?si=6ognMMyQ10a5jVqN"
                ].map((url, index) => (
                    <div key={index} className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden">
                        <ReactPlayer
                            url={url}
                            width="100%"
                            height="100%"
                            controls
                            className="rounded-lg"
                        />
                    </div>
                ))}
            </div>

            <div className="flex md:flex-row flex-col md:justify-around items-center md:p-0 p-4">
                <video
                    muted
                    autoPlay
                    loop
                    className="rounded-2xl h-[400px] md:mb-8 mb-0 "
                >
                    <source src={vid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video
                    muted
                    autoPlay
                    loop
                    className="rounded-2xl h-[400px] md:mb-8 mb-4 "
                >
                    <source src={vid2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default Inview;
