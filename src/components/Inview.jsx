import React from "react";
import ReactPlayer from "react-player";
import "../components/style.css";

const Inview = () => {
    return (
        <div className="">
            <div className="mt-24 mb-10 text-white bungee-shade-regular text-6xl  text-center">
                Paid Work
            </div>
            
            <div className="w-full px-4 sm:px-6 md:px-12 lg:px-24 py-8 flex flex-wrap gap-10 justify-center items-center">
                {[
                    "https://youtu.be/jxl1GJ14OKc?si=0DzWgGOCAXazsP7L",
                    "https://youtu.be/eWMBy5Sm318?si=EgYfO14-lMBJlN9p",
                    "https://youtu.be/iqgj21YYXJU?si=djorJMG8srCQIg21",
                    "https://youtu.be/n7eXBBdlrCo?si=EOe7nYXUT1TceTH2",
                    "https://youtu.be/jjky_o8BPMI?si=6ognMMyQ10a5jVqN"
                ].map((url, index) => (
                    <div key={index} className=" w-[600px] aspect-video rounded-lg overflow-hidden">
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

        </div>
    );
};

export default Inview;
