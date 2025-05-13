import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import useTheme from "../hooks/useTheme.jsx";

const Footer = () => {
    const {isDarkMode} = useTheme();

    return (
        <footer className={`${isDarkMode ? "bg-dark-secondary":"bg-light-secondary"} text-seco pt-24 py-5`}>
            <div className="container mx-auto px-6">
                {/* Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
                    {/* Logo and Website Name */}
                    <div className="flex flex-col items-center md:items-start">
                        <h1 className="text-2xl font-bold">CineHub</h1>
                        <p className="text-sm mt-2">
                            Your ultimate destination for exploring and managing movies.
                        </p>
                    </div>
                    {/* Contact Information */}
                    <div className="text-center md:text-left">
                        <h2 className="text-lg font-semibold">Contact Us</h2>
                        <p className="text-sm mt-2">Email: support@cinehub.com</p>
                        <p className="text-sm">Phone: +1 (123) 456-7890</p>
                        <p className="text-sm">Address: 123 Movie Lane, Film City</p>
                    </div>
                    {/* Social Media Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="text-lg font-semibold">Follow Us</h2>
                        <div className="flex space-x-4 mt-2">
                            <a href="#" className="hover:text-primary">
                                <FaFacebook size={24} />
                            </a>
                            <a href="#" className="hover:text-primary">
                                <FaTwitter size={24} />
                            </a>
                            <a href="#" className="hover:text-primary">
                                <FaInstagram size={24} />
                            </a>
                            <a href="#" className="hover:text-primary">
                                <FaYoutube size={24} />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Copyright */}
                <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
                    © {new Date().getFullYear()} CineHub. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
