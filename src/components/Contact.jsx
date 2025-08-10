import React from "react";

const Contact = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center min-h-screen px-4 text-center">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
        Let’s Connect on Instagram
      </h1>

      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/_____noor._______/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 bg-white hover:bg-pink-500 text-black font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition duration-200 text-sm sm:text-base md:text-lg"
      >
        Visit My Instagram
      </a>
    </div>
  );
};

export default Contact;
