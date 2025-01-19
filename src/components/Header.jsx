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
                    <div className="options">
                        <a
                            href="#"
                            className={`option-link ${activeOption === "Buy" ? "active" : ""}`}
                            onClick={() => handleOptionClick("Buy")}
                        >
                            Buy
                        </a>
                        <a
                            href="#"
                            className={`option-link ${activeOption === "Rent" ? "active" : ""}`}
                            onClick={() => handleOptionClick("Rent")}
                        >
                            Rent
                        </a>
                        <a
                            href="#"
                            className={`option-link ${activeOption === "Sold" ? "active" : ""}`}
                            onClick={() => handleOptionClick("Sold")}
                        >
                            Sold
                        </a>
                    </div>
                </div>
                <div className="search-bar">
                    <select>
                        <option>Type</option>
                    </select>
                    <select>
                        <option>Location</option>
                    </select>
                    <input placeholder=" Price Range" type="text" />
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
