import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div>
            {/* Top Bar */}
            <div className="bg-gray-800 text-white flex justify-between items-center p-4">
                <div className="flex items-center gap-2">
                    <img
                        src="/path/to/logo.png"
                        alt="Logo"
                        className="w-10 h-10 rounded-full"
                    />
                    <span className="text-sm uppercase">BU-CS|Alumni NEXUS, BERHAMPUR</span>
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-4">
                    <FaFacebook className="cursor-pointer hover:text-blue-400" size={20} />
                    <FaTwitter className="cursor-pointer hover:text-blue-400" size={20} />
                    <FaYoutube className="cursor-pointer hover:text-red-400" size={20} />
                    <FaInstagram className="cursor-pointer hover:text-pink-400" size={20} />
                </div>

                {/* Sign Up/Login */}
                <Link to="/login">
                    <button className="bg-blue-600 px-4 py-2 text-sm rounded hover:bg-blue-800">
                        Sign Up/Login
                    </button>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="bg-[#003366]">
                <div className="container mx-auto px-4">
                    <ul className="flex gap-6 py-4 text-sm text-white">
                        <li className="hover:text-blue-300">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="hover:text-blue-300">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="hover:text-blue-300">
                            <Link to="/alumni-directory">Alumni Directory</Link>
                        </li>
                        <li className="hover:text-blue-300">
                            <Link to="/memories">Memories</Link>
                        </li>
                       
                        <li className="hover:text-blue-300">
                            <Link to="/events">Events</Link>
                        </li>
                        <li className="hover:text-blue-300">
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li className="hover:text-blue-300">
                            <Link to="/alumni-stories">Alumni Stories</Link> {/* Added link */}
                        </li>
                        <li className="hover:text-blue-300">
                            <Link to="/submitted-projects">Submitted Projects</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;