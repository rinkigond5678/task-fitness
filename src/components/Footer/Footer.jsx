import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-10">
      <div className="container mx-auto flex justify-between">
        {/* Column 1: About */}
        <div className="footer-column hover:text-red-400 transition duration-200">
          <h5 className="font-semibold text-2xl">About</h5>
          <p className="text-gray-400">Learn more about our mission and values.</p>
        </div>

        {/* Column 2: Experts */}
        <div className="footer-column hover:text-red-400 transition duration-200">
          <h5 className="font-semibold text-2xl">Experts</h5>
          <p className="text-gray-400">Meet our team of professionals committed to your success.</p>
        </div>

        {/* Column 3: Contact Us */}
        <div className="footer-column hover:text-red-400 transition duration-200 ">
          <h5 className="font-semibold text-2xl">Contact Us</h5>
          <p className="text-gray-400">Have questions? Reach out to us at:</p>
          <p className="text-gray-400">Email: info@example.com</p>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
        </div>

        {/* Column 4: Services */}
        <div className="footer-column hover:text-red-400 transition duration-200">
          <h5 className="font-semibold text-2xl">Services</h5>
          <ul className="text-gray-400 list-disc ml-5">
            <li>Personal Training</li>
            <li>Group Classes</li>
            <li>Nutritional Coaching</li>
            <li>Online Workouts</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="text-gray-400">© 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
