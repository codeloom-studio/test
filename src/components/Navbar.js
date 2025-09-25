// Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import BlueButton from "./buttons/BlueButton";
import BlueTransparentButton from "./buttons/BlueTransparentButton";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            try {
                const decoded = jwtDecode(token);
                const currentTime = Date.now() / 1000; // in seconds

                if (decoded.exp && decoded.exp > currentTime) {
                    setIsLoggedIn(true);
                } else {
                    // token expired
                    localStorage.removeItem("token");
                    setIsLoggedIn(false);
                }
            } catch (err) {
                console.error("Invalid token:", err);
                setIsLoggedIn(false);
            }
        }
    }, []);

    const handleLogout = () => {
        console.log("Logging out...");
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate("/login");
    };

    return (
        <nav className="w-[100vw] h-24 bg-white flex items-center justify-center gap-14 px-4 shadow-sm">
            <div className="flex items-center gap-4">
                <img src={logo} className="h-7 w-54" alt="logo" onClick={() => navigate("/")} />
                <hr className="border-collapse h-7 w-[1px] bg-black" />
                <p className="font-normal font-inter text-xs text-grey">
                    Your digital business
                    <br /> card platform.
                </p>
            </div>

            <div className="flex items-center gap-8 font-inter">
                <p className="font-medium text-sm text-lightGrey">Why digital card?</p>
                <p className="font-medium text-sm text-lightGrey">Process</p>
                <p className="font-medium text-sm text-lightGrey">Review</p>
                <p className="font-medium text-sm text-lightGrey">Paper Vs Digital</p>
            </div>

            <div className="flex items-center gap-4">
                {isLoggedIn ? (
                    <BlueTransparentButton label="Logout" onClick={handleLogout} />
                ) : (
                    <>
                        <Link to="/login">
                            <BlueTransparentButton label="Login" />
                        </Link>
                        <Link to="/register">
                            <BlueButton label="Get Yours Now" />
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
