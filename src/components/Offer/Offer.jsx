import React from "react";
import Image from "../../assets/O5i5I5pg.png";

const GymData = [
  {
    image: Image,
    desc: "Ready to jumpstart your fitness journey? We’ve got amazing offers just for you!",
  },
];

const TopList = () => {
  return (
    <div className="container py-1">
      {/* Header section */}
      <div className="text-center mb-1">
        
      </div>

      {/* Card section */}
      <div className="flex justify-between items-center space-x-4 gap-1">
        {GymData.map((item, index) => (
          <div
            key={index}
            className="relative bg-white/0 p-3 rounded-3xl ">
          
            {/* Image with text overlay */}
            <div className="relative">
              <img
                src={item.image}
                alt=""
                className="w-30 h-30 mx-auto object-cover rounded-2xl"
              />
             
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <h3 className="text-4xl font-semibold text-white text-nowrap">A Big<span className="text-red-500 text-nowrap"> OFFER </span></h3>
                
                <h2 className="text-4xl font-semibold text-white text-nowrap">ON THIS DIWALI</h2>
                <h3 className="text-white/75 text-center">{item.desc}</h3>
                <div className="flex gap-4 items-center justify-center md:justify-start">
                <button className="bg-red-700 text-white py-2 px-4 rounded-full ">JOIN NOW</button>
               
                </div>
              
                </div>
                </div>


                
           
            
            <div className="space-y-2 mt-4">
              <p className="text-lg font-semibold text-white">{item.name}</p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopList;
