import React from "react";
import Image from "../../assets/tr.jpg";
import Man from "../../assets/food.jpg";
import Port from "../../assets/hehe.jpg";

const GymData =[
    {
        image:Image,
        rating:"⭐⭐⭐⭐⭐",
        price:"$10.99",
        name:" Trainer",
        desc:"We provide expert trainer who guides individuals in their exercise routines, providing personalized training, motivation, and nutritional advice to help them achieve their fitness goals.",
    },
    {
        image:Man,
        rating:"⭐⭐⭐⭐⭐",
        price:"$10.99",
        name:"Healthy Diet",
        desc:"We provides a balanced deit of variety of foods, including fruits, vegetables, whole grains, and healthy fats, to support overall health and well-being.",
    },
    {
        image:Port,
        rating:"⭐⭐⭐⭐",
        price:"$10.99",
        name:"Meditation", 
        desc:"Enhance mental clarity and focus, allowing individuals to connect deeply with their bodies during workouts. By reducing stress and promoting relaxation, .",

    },
];



const TopList = () => {
  return (
    <div className="container py-14">
      {/* Header section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-red-800 text-nowrap mb-3">Services</h1>
        <p className="text-white/75 ">
        We provided many services include personal training, group classes, nutrition counseling, fitness assessments, and wellness programs to support overall health and fitness goals.</p>
      </div>

      {/* Card section */}
      <div className="flex justify-between items-center space-x-4 gap-1">

      {GymData.map((item,index) => (
            <div key={index} className="bg-white/10 p-3 rounded-3xl hover:scale-110 transition duration-300">
                <img src={item.image} alt="" className="w-33 h-44 mx-auto object-cover rounded-2xl img-shadow" />

                <div className="space-y-2">
                    <p className="text-lg font-semibold text-white ">{item.name}</p>
                    <p className="text-white/75 ">{item.price}</p>
                    <p className="text-red-800 ">{item.rating}</p>
                    <p className="text-white/75 ">{item.desc}</p>
                 
                </div>
            </div>        
            
           
         ))}
        
        
      </div>
    </div>
  );
};

export default TopList;
