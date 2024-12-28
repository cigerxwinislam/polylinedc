// Bismillahirrahmanirrahim

// Elhamdullilahirabbul'alemin

// Es-selatu ve es-selamu ala Rasulina Muhammedin ve ala alihi ve sahbihi ecmain

import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4 w-full">
            <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-xl">Polyline DC</div>
            <div className="block lg:hidden">
            <button className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
            </button>
            </div>
            <ul className="hidden lg:flex space-x-4">
            <li><a className="text-white hover:text-gray-400" href="#home">Home</a></li>
            <li><a className="text-white hover:text-gray-400" href="#about">About</a></li>
            <li><a className="text-white hover:text-gray-400" href="#services">Services</a></li>
            <li><a className="text-white hover:text-gray-400" href="#contact">Contact</a></li>
            </ul>
            </div>
        </nav>
    );
};

export default Navbar;