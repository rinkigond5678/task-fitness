import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-16 sm:px-6 px-4 bg-black">
      <h1 className="text-4xl font-semibold text-red-600  text-center mb-2">Contact Us</h1>
      <p className="text-white/75 text-1xl mb-6 text-center">
      
Feel free to reach out to us for any questions, support, or personalized fitness guidance.
        
      </p>

      <form className="w-full max-w-md bg-red-500/35 p-6 rounded-3xl space-y-4 shadow-lg">
        {/* Name Input */}
        <div>
          <label className="block text-white text-lg mb-2" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-white text-lg mb-2" htmlFor="email">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Enter your email"
          />
        </div>

        {/* Message Input */}
        <div>
          <label className="block text-white text-lg mb-2" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full p-2 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Write your message"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-red-600 text-white py-2 px-4 rounded-2xl hover:bg-red-700 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
