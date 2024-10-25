import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TopList from "./components/TopList/TopList";
import BgImage from "./assets/images.jpeg";


import Feature from "./components/Feature/Feature";
import Offer from "./components/Offer/Offer";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";





const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition:"center",
};

const App = () => {
  return (
    <div style={bgStyle}className="overflow-x-hidden">
      <div className="min-h-screen bg-black/40 backdrop-blur-3xl">
      <Navbar />
      <Hero />
      <About />
      <TopList />
      <Feature />
      <Offer />
      <Contact />

      <Footer />
      
     
      </div>
    </div>
  
  );
    
  
};

export default App;