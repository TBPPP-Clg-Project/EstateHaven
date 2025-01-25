import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

export const Header = () => {
    const [activeOption, setActiveOption] = useState("");

    const handleOptionClick = (option) => {
        setActiveOption(option);
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center w-full text-center relative"
            style={{ backgroundImage: "url('/header_img.png')" }}
        >
            {/* Navbar Section */}
            <Navbar />

            {/* FindHome Content */}
            <header>
                <div className="header-content">
                    <p>It's great to be home!</p>
                    <h1>Find Your Perfect Home</h1>
                </div>
                <div className="search-bar">
                    <select>
                        <option>Property Type</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="villa">Villa</option>
                        <option value="shop">Shop</option>
                    </select>
                    <select>
                        <option>Location</option>
                        {/* Cities from India */}
                        <option value="delhi">Delhi</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="bangalore">Bangalore</option>
                        <option value="chennai">Chennai</option>
                        <option value="kolkata">Kolkata</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="pune">Pune</option>
                        <option value="gurgaon">Gurgaon</option>
                        <option value="noida">Noida</option>
                        <option value="chandigarh">Chandigarh</option>
                    </select>
                    <input placeholder="Maximum Budget" type="text" />
                    <button>
                        <FontAwesomeIcon icon={faSearch} style={{ marginRight: "5px" }} />
                        Search
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;
