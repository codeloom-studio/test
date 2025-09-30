import React from "react";
import profileOne from "../assets/profile-one.jpeg";

export default function ProfileCard() {
    return (
        <div className="w-full h-full bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center">
            {/* Image with gradient fade */}
            <div className="relative w-full h-28 overflow-hidden">
                <img
                    src={profileOne}
                    alt="Profile"
                    className="w-full h-full object-cover object-top rounded-t-xl"
                    style={{ objectPosition: "top" }} // keeps top visible
                />
                {/* Gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
            </div>

            {/* Placeholder lines */}
            <div className="px-2 pb-2 -mt-4 relative z-10 flex flex-col items-center">
                <div className="h-3 bg-gray-200 rounded w-20 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-12"></div>
            </div>
        </div>
    );
}
