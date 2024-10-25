import React from "react";
import Image from "../../assets/n5CMRIjw.png";
import Man from "../../assets/4Ki-rMg-.png";
import Port from "../../assets/0UhsUDSS.png";

const GymData =[
    {
        image:Image,
        name:"Weight Lifting",
       
   
        desc:"Weightlifting is a form of strength training that involves lifting heavy weights to build muscle strength, endurance.",
    },
    {
        image:Man,
        name:"Specific Muscle",
       
        desc:"A specific muscle machine, like the leg press, isolates and targets the quadriceps, hamstrings, and glutes, enhancing muscle strength .",
    },
    {
        image:Port,
        name:"Flex Your Muscle",
        
        desc:"The Flex Your Muscle machine is designed to target and strengthen specific muscle groups, particularly focusing on the arms and upper body,enhance muscle, improve strength.",
    },
];



const TopList = () => {
  return (
    <div className="container py-14">
      {/* Header section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-red-800 text-nowrap mb-3">Features</h1>
        <p className="text-white/75 ">Fitness typically feature a range of equipment, group classes, personal training, locker rooms, and wellness services to provide a comprehensive fitness experience.



</p>
      </div>

      {/* Card section */}
      <div className="flex justify-between items-center space-x-4 gap-1">

      {GymData.map((item,index) => (
            <div key={index} className="bg-white/0 p-3 rounded-3xl hover:scale-110 transition duration-300">
                <img src={item.image} alt="" className="w-30 h-30 mx-auto object-cover rounded-2xl" />

                <div className="space-y-2">
                    <p className="text-lg font-semibold text-white text-center ">{item.name}</p>
                   
                    
                    <p className="text-white/75 text-center ">{item.desc}</p>
                    
                </div>
            </div>        
            
           
         ))}
        
        
      </div>
    </div>
  );
};

export default TopList;
