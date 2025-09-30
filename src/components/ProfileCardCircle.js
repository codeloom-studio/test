import React from "react";
import profileOne from "../assets/profile-one.jpeg";

export default function ProfileCardCircle() {
    return (
        <div className="w-full h-full bg-white rounded-xl shadow-md flex flex-col items-center justify-end">
            {/* Circular Profile Image */}
            <div className="w-fit h-fit rounded-full overflow-hidden">
                <img
                    src={profileOne}
                    alt="Profile"
                    className="w-10 h-10 object-cover object-top rounded-full mb-6"
                    style={{ objectPosition: "top" }}
                />
            </div>

            {/* Placeholder lines */}
            <div className="px-2 pb-2 -mt-4 relative z-10 flex flex-col items-center">
                <div className="h-3 bg-gray-200 rounded w-20 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-12"></div>
            </div>
        </div>
    );
}
