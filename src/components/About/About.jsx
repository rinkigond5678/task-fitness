import React from "react";
import Image from "../../assets/ll.jpg";

const GymData = [
 
 
  // Add gym data here if needed
];

const TopList = () => {
  return (
    <div className="container py-14">
      {/* Header section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-red-800">About</h1>
        <p className="text-white/75">Fitness is the journey of becoming stronger, healthier, and more confident every day.</p>
      </div>

      {/* About section */}
      <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
        <div className="flex-1 mb-6 lg:mb-0 lg:mr-4">
          <img src={Image} alt="Gym" className="rounded-lg shadow-lg w-full h-auto" />
        </div>
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-red-800 mb-2">Our Mission</h2>
          <p className="text-white/75 mb-3">A fitness program is a structured plan designed to improve an individual’s overall health, strength, endurance, and flexibility. It typically involves a combination of different types of exercises, tailored to meet specific goals such as weight loss, muscle building, cardiovascular health, or overall fitness.</p>
          <p className="text-white/75 mb-2">

            At our gym, we believe in fostering a community where everyone can achieve their fitness goals. Our mission is to provide a supportive and motivating environment that caters to individuals of all fitness levels. Whether you're a beginner or a seasoned athlete, we have something for you!
          </p>
          
        </div>
      </div>

      {/* Read More Button Below the Mission Paragraph */}
      <div className="text-center mb-12">
        <a href="/about" className="inline-block bg-red-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-500 transition duration-300">
          Read More
        </a>
      </div>

      {/* Card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {GymData.map((item, index) => (
          <div key={index} className="bg-white/10 p-3 rounded-3xl hover:scale-110 transition duration-300">
            <img src={item.image} alt="" className="w-40 h-40 object-cover rounded-2xl" />
            <div className="space-y-2">
              <p className="text-lg font-semibold text-white">{item.name}</p>
              <p className="text-white/75">{item.price}</p>
              <p className="text-red-800">{item.rating}</p>
              <p className="text-white/75">{item.desc}</p>
              <p className="text-white/70 text-lg font-semibold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopList;    