import React from 'react'

const WhiteButton = ({ icon, text }) => {
    return (
        <button className="group bg-offWhite p-3 w-40 h-11 rounded-lg shadow-custom flex items-center justify-center space-x-3 text-sm hover:bg-black transition">
            <img src={icon} alt="" className="w-5 h-5 group-hover:invert group-hover:brightness-0" />
            <span className="group-hover:text-white">{text}</span>
        </button>

    )
}

export default WhiteButton