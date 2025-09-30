import React from "react";
import profileOne from "../assets/profile-one.jpeg";

export default function ProfileCardWithCover() {
    return (
        <div className="w-full h-full bg-white rounded-xl shadow-md flex flex-col items-center justify-end relative">
            {/* Circular Profile Image */}
            <div className="absolute top-0 left-0 m-2 rounded-t-xl w-28 h-[45%] -z-1 bg-blue-300">

            </div>
            <div className="absolute center bottom-5 w-fit h-fit rounded-full overflow-hidden">
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
