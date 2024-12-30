import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#002147] text-white py-8 px-4 w-full">
      <div className="container mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold">BU-CS Nexus</h3>
          <ul className="mt-4 text-sm">
            <li>
              <Link to="/support" className="hover:underline">
                Support
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-right">
          <a href="https://www.google.com/maps/place/Berhampur+University/@19.3016953,84.8804445,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3d59ddebcbc259:0x6af8cd6267c5cc11!8m2!3d19.3016903!4d84.8830194!16s%2Fm%2F0271g5x?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            <img
              src="src/components/Footer/map.png"
              alt="Map Location"
              className="w-full h-40 object-cover rounded"
            />
          </a>
        </div>
      </div>
      <div className="text-center mt-4 text-xs">
        © 2024 Alumni Collaboration Portal. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;