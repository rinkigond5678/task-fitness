import React, { useState, useEffect } from "react";
import Image from "../../assets/headerimg.webp";
import www from "../../assets/yoga2.jpg";
import stres from "../../assets/fitness.jpg";
import full from "../../assets/he.jpg";

const GymData = [
  {
    image: Image,
    desc: "Work hard, sweat it out,Strengthen your body no doubt.",
  },
  {
    image: stres,
    desc: "Work hard, sweat it out,Strengthen your body no doubt.",
  },
  {
    image: www,
    desc: "Work hard, sweat it out,Strengthen your body no doubt.",
  },
  {
    image: full,
    desc: "Work hard, sweat it out,Strengthen your body no doubt.",
  },
];

const TopList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === GymData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const currentItem = GymData[currentIndex];

  return (
    <div className="container py-1">
      <div className="relative bg-white/0 p-3 rounded-3xl">
        {/* Image with text overlay */}
        <div className="relative mb-6">
          <img
            src={currentItem.image}
            alt=""
            className="w-full h-auto mx-auto object-contain rounded-2xl"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h6 className="text-3xl font-semibold text-white mb-1">
              STEP UP YOUR
            </h6>
            <h2 className="text-4xl font-semibold text-white">
              <span className="text-red-700">FITNESS</span> WITH US
            </h2>
            <h3 className="text-white/75">{currentItem.desc}</h3>
            <div className="flex gap-4 items-center mt-4">
              <button className="bg-red-700 text-white py-2 px-4 rounded-full">
                Join Us
              </button>
              <button className="bg-gray-300 text-black py-2 px-4 rounded-full">
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopList;
