import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export const Header = () => {
    const backgroundImages = [
        '/Header.jpg', 
        '/Header1.jpg', 
        '/Header2.jpg', 
        '/Header3.jpg', 
        '/Header4.jpg', 
        '/Header5.jpg', 
        '/Header6.jpg', 
        '/Header7.jpg', 
        '/Header8.jpg',
        '/Header9.jpg',
        '/Header10.jpg'
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % backgroundImages.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleSearchClick = () => {
        navigate("/buy");
    };

    return (
        <div 
            className="background-carousel min-h-screen bg-cover bg-center flex flex-col items-center justify-center w-full text-center relative"
            style={{ 
                backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
                transition: 'background-image 1s ease-in-out'
            }}
        >
            <Navbar />
            <header>
                <div className="header-content">
                    <p>It's great to be home!</p>
                    <h1>Find Your Perfect Home</h1>
                </div>
                <div className="search-bar">
                    <select name="type">
                        <option value="">Property Type</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="villa">Villa</option>
                        <option value="shop">Shop</option>
                    </select>
                    <select name="location">
                        <option value="">Location</option>
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
                    <input
                        name="maxPrice"
                        placeholder="Maximum Budget"
                        type="text"
                    />
                    <button onClick={handleSearchClick}>
                        <FontAwesomeIcon icon={faSearch} style={{ marginRight: "5px" }} />
                        Search
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;