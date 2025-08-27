import Asidebar from "../components/Asidebar"
import edit from '../assets/edit.svg'
import swap from '../assets/swap.svg'
import share from '../assets/share.svg'
import WhiteButton from "../components/buttons/WhiteButton"
import dummyProfile from "../assets/dummy-profile.svg"
import { useState } from "react"
import { AlignLeft, AlignCenter, AlignRight, Info } from "lucide-react";


const Dashboard = () => {

    const [selectedFont, setSelectedFont] = useState("Inter");
    const [alignment, setAlignment] = useState("left");
    const [fullScreen, setFullScreen] = useState(false);
    const [selected, setSelected] = useState("solid");
    const [autoDownload, setAutoDownload] = useState(false);
    const [floatingSave, setFloatingSave] = useState(false);
    const [enabled, setEnabled] = useState(false);

    const options = [
        { id: "left", icon: <AlignLeft size={20} /> },
        { id: "center", icon: <AlignCenter size={20} /> },
        { id: "right", icon: <AlignRight size={20} /> },
    ];

    const fonts = [
        { name: "Inter", className: "font-[Inter]" },
        { name: "Roboto", className: "font-[Roboto]" },
        { name: "Montserrat", className: "font-[Montserrat]" },
        { name: "Merriweather", className: "font-[Merriweather]" },
        { name: "Caveat", className: "font-[Caveat]" },
        { name: "Gloria Hallelujah", className: "font-[Gloria_Hallelujah]" },
    ];

    const screenOptions = [
        {
            id: "solid",
            label: "Solid Color",
            preview: "bg-gray-700",
        },
        {
            id: "gradient",
            label: "Gradient",
            preview: "bg-gradient-to-b from-gray-400 to-gray-700",
        },
    ];

    const [selectedColor, setSelectedColor] = useState({
        cardBg: "#000000",
        buttonColor: "#000000",
        cardText: "#ffffff",
        buttonText: "#000000",
    });

    const colorOptions = [
        "#000000", "#ef4444", "#ec4899", "#f97316", "#facc15",
        "#22c55e", "#06b6d4", "#3b82f6", "#8b5cf6"
    ];

    const sections = [
        { key: "cardBg", label: "Card Background" },
        { key: "buttonColor", label: "Button Color" },
        { key: "cardText", label: "Card Text" },
        { key: "buttonText", label: "Button Text" },
    ];

    return (
        <div className='w-[100vw] min-h-screen flex bg-[background: #FCFDFD4D;]'>
            <Asidebar />
            <div className="w-[70vw] h-[100vh] bg-lightGray">hello</div>
            <div className="w-[37vw] flex flex-col  justify-center text-3xl rounded-lg font-inter text-semiLightBlack">
                <div className="m-4 h-fit flex space-x-4">
                    <WhiteButton icon={edit} text="Create" />
                    <WhiteButton icon={swap} text="QR Code" />
                    <WhiteButton icon={share} text="Share" />
                </div>
                <div className="m-4 h-fit flex flex-col space-y-3">
                    <h1 className="text-xl text-black font-semibold">Create Your Digital NFC Card</h1>
                    <p className="text-xs text-semiDarkBlack font-normal">
                        This digital business card shares your main contact information only.
                    </p>
                    <p className="text-sm text-semiBlack font-semibold">Card Name</p>
                    <input
                        type="text"
                        placeholder="Shubham Pandey's Contact Card"
                        className="w-[483px] text-sm  text-darkBlack rounded-lg p-3 border border-gray-300 outline-none"
                    />

                    <p className="text-sm text-semiBlack font-semibold">Card Layout</p>

                    <div className="w-fit h-fit flex items-center justify-center gap-12">
                        <div className="flex flex-col items-center justify-center space-y-2">
                            <div className="text-white w-32 h-32 bg-offWhite rounded-lg">

                            </div>
                            <p className="text-xs text-black font-medium">Profile Picture</p>
                        </div>

                        <div className="flex flex-col items-center justify-center space-y-2">
                            <div className="text-white w-32 h-32 bg-offWhite rounded-lg">

                            </div>
                            <p className="text-xs text-black font-medium">Small Profile Picture</p>
                        </div>

                        <div className="flex flex-col items-center justify-center space-y-2">
                            <div className="text-white w-32 h-32 bg-offWhite rounded-lg">

                            </div>
                            <p className="text-xs text-black font-medium">Cover + Profile Picture</p>
                        </div>

                    </div>

                    <div className="w-full flex h-fit mt-6">
                        <div className="w-36">
                            <p className="text-sm text-semiBlack font-semibold mb-4">Profile Photo</p>
                            <img src={dummyProfile} alt="profile" className="w-24 h-24 mt-2 rounded-lg" />
                        </div>
                        <div className="flex-grow ">
                            <p className="text-sm text-semiBlack font-semibold mb-4">Cover Background</p>
                            <div
                                className={`w-full max-w-md p-6 border-2  border-dashed rounded-lg text-center transition 
                                 ${true ? "border-gray-300" : "border-gray-300 bg-gradient-to-r from-white to-gray-50"}`}
                            >
                                <input
                                    type="file"
                                    id="file-upload"
                                    className="hidden"

                                />
                                <p className="text-gray-500 text-sm">
                                    Drag file here for upload or
                                </p>
                                <label
                                    htmlFor="file-upload"
                                    className="mt-2 inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md cursor-pointer text-sm shadow"
                                >
                                    Select Files
                                </label>


                            </div>
                        </div>
                    </div>


                </div>

                <div className="m-4 h-fit">
                    <div className="max-w-2xl mx-auto p-6">
                        {/* Name & Company */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    placeholder="Shubham Pandey"
                                    className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* Job Title & Industry */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Job Title or Role</label>
                                <input
                                    type="text"
                                    placeholder="Job role"
                                    className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                                <input
                                    type="text"
                                    placeholder="Industry"
                                    className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* Bio */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                            <textarea
                                rows="4"
                                placeholder="Write something..."
                                className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Add Sections */}
                        <div>
                            <h2 className="text-sm font-semibold text-gray-800 mb-2">Add Sections to Your Card</h2>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                <p className="text-sm font-semibold text-gray-700 mb-1">
                                    Customize Your Card With Sections
                                </p>
                                <p className="text-xs text-gray-500 mb-3">
                                    Click "+ Add Section" to add contact details, social media, and more.
                                </p>
                                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm shadow">
                                    Add Section
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-lg mx-auto p-6">
                    <h2 className="text-sm font-semibold text-gray-800 mb-3">
                        Choose a Font
                    </h2>

                    <div className="grid grid-cols-2 gap-4">
                        {fonts.map((font) => (
                            <button
                                key={font.name}
                                onClick={() => setSelectedFont(font.name)}
                                className={`min-w-56 border text-sm rounded-lg py-3 px-4 text-center text-gray-600 transition 
              ${selectedFont === font.name
                                        ? "border-blue-500 bg-blue-50 text-blue-600"
                                        : "border-gray-300 hover:border-gray-400"
                                    } ${font.className}`}
                            >
                                {font.name}
                            </button>
                        ))}
                    </div>

                    {/* <p className="mt-4 text-sm text-gray-500">
                        Selected Font: <span className="font-semibold">{selectedFont}</span>
                    </p> */}
                </div>

                <div className="max-w-lg mx-auto p-6">
                    {/* Label with info icon */}
                    <div className="flex gap-2 mb-3">
                        <h2 className="text-sm font-semibold text-gray-800">
                            Card Layout Alignment
                        </h2>
                        <Info size={14} className="text-gray-400" />
                    </div>

                    {/* Options */}
                    <div className="grid grid-cols-3 gap-4">
                        {options.map((opt) => (
                            <button
                                key={opt.id}
                                onClick={() => setAlignment(opt.id)}
                                className={`w-36 border rounded-lg py-3 flex items-center justify-center transition 
              ${alignment === opt.id
                                        ? "border-blue-500 bg-blue-50 text-blue-600"
                                        : "border-gray-300 hover:border-gray-400"
                                    }`}
                            >
                                {opt.icon}
                            </button>
                        ))}
                    </div>

                    {/* Preview */}
                    {/* <p className="mt-4 text-sm text-gray-500">
                        Selected alignment:{" "}
                        <span className="font-semibold">{alignment}</span>
                    </p> */}
                </div>

                <div className="max-w-lg mx-auto p-6">
                    {/* Title + description */}
                    <h2 className="text-sm font-semibold text-gray-800 mb-1">
                        Choose Your Background Style
                    </h2>
                    <p className="text-xs text-gray-500 mb-3">
                        Personalize your card’s background with a solid color, gradient, image, or even video.
                    </p>

                    {/* Toggle */}
                    <div className="flex items-center gap-2 mb-5">
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={fullScreen}
                                onChange={() => setFullScreen(!fullScreen)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 transition"></div>
                            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
                        </label>
                        <span className="text-sm font-medium text-gray-700">Full-Screen Background</span>
                    </div>

                    {/* Options */}
                    <div className="grid grid-cols-2 gap-6">
                        {screenOptions.map((opt) => (
                            <div key={opt.id} className="flex flex-col items-center">
                                <button
                                    key={opt.id}
                                    onClick={() => setSelected(opt.id)}
                                    className={`w-44 rounded-xl p-2 flex flex-col items-center border transition ${selected === opt.id
                                        ? "border-black shadow-md"
                                        : "border-gray-300 hover:border-gray-400"
                                        }`}
                                >
                                    <div
                                        className={`w-36 h-52 rounded-lg ${opt.preview}`}
                                    ></div>

                                </button>
                                <span className="mt-2 text-sm text-gray-700">{opt.label}</span>
                            </div>

                        ))}
                    </div>

                    {/* Preview */}
                    {/* <p className="mt-4 text-sm text-gray-500">
                        Selected: <span className="font-semibold">{selected}</span> | Full-Screen:{" "}
                        <span className="font-semibold">{fullScreen ? "Yes" : "No"}</span>
                    </p> */}
                </div>

                <div className="max-w-lg mx-auto p-6 space-y-6">
                    {sections.map((section) => (
                        <div key={section.key}>
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-sm font-semibold text-gray-800">
                                    {section.label}
                                </h3>
                                <span className="text-gray-400 text-xs cursor-pointer">ⓘ</span>
                            </div>

                            {/* Colors */}
                            <div className="flex flex-wrap gap-3">
                                {colorOptions.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() =>
                                            setSelectedColor((prev) => ({ ...prev, [section.key]: color }))
                                        }
                                        className={`w-8 h-8 rounded-full transition ${selectedColor[section.key] === color
                                            ? "border-black scale-110"
                                            : "border-gray-300"
                                            }`}
                                        style={{ backgroundColor: color }}
                                    />
                                ))}

                                {/* Custom Color Picker */}
                                <label
                                    className={`w-8 h-8 rounded-full cursor-pointer flex items-center justify-center text-xs ${!colorOptions.includes(selectedColor[section.key])
                                        ? "border-black"
                                        : "border-gray-300"
                                        }`}
                                >
                                    🎨
                                    <input
                                        type="color"
                                        value={selectedColor[section.key]}
                                        onChange={(e) =>
                                            setSelectedColor((prev) => ({
                                                ...prev,
                                                [section.key]: e.target.value,
                                            }))
                                        }
                                        className="hidden"
                                    />
                                </label>
                            </div>
                        </div>
                    ))}

                    {/* Preview */}
                    {/* <div className="mt-6 p-4 rounded-lg shadow-md text-center"
                        style={{ backgroundColor: selectedColor.cardBg, color: selectedColor.cardText }}
                    >
                        <p className="mb-4">Card Preview</p>
                        <button
                            className="px-4 py-2 rounded-lg font-medium"
                            style={{
                                backgroundColor: selectedColor.buttonColor,
                                color: selectedColor.buttonText,
                            }}
                        >
                            Button
                        </button>
                    </div> */}
                </div>

                <div className="space-y-4 p-4 bg-white rounded-xl shadow-sm">
                    {/* Automatic Download */}
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                            <h2 className="text-base font-semibold text-black">Automatic Download</h2>
                            <p className="text-sm text-gray-500">
                                Turn this on to let your card download instantly without showing a preview.
                            </p>
                        </div>
                        <button
                            onClick={() => setAutoDownload(!autoDownload)}
                            className={`relative w-11 h-6 flex items-center rounded-full transition ${autoDownload ? "bg-blue-500" : "bg-gray-300"
                                }`}
                        >
                            <span
                                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition ${autoDownload ? "translate-x-6" : "translate-x-1"
                                    }`}
                            />
                        </button>
                    </div>

                    {/* Floating Save Button */}
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                            <h2 className="text-base font-semibold text-black">Floating Save Button</h2>
                            <p className="text-sm text-gray-500">
                                Add a floating button to your card so visitors can save your details.
                            </p>
                        </div>
                        <button
                            onClick={() => setFloatingSave(!floatingSave)}
                            className={`relative w-11 h-6 flex items-center rounded-full transition ${floatingSave ? "bg-blue-500" : "bg-gray-300"
                                }`}
                        >
                            <span
                                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition ${floatingSave ? "translate-x-6" : "translate-x-1"
                                    }`}
                            />
                        </button>
                    </div>
                </div>

                <div className="max-w-lg p-6 ">
                    {/* Header */}
                    <h2 className="text-lg font-semibold text-black">Lead Capture</h2>
                    <p className="text-sm text-gray-500">
                        Collect contact details and automate follow-ups.
                    </p>

                    {/* Preview Card */}
                    <div className="mt-4 w-60 border rounded-xl bg-white shadow-sm flex flex-col items-center p-4">
                        <div className="w-full h-28 bg-gray-100 rounded-lg flex items-center justify-center">
                            {/* Placeholder preview image */}
                            <span className="text-xs text-gray-400">[ Preview Image ]</span>
                        </div>

                        <h3 className="mt-3 text-base font-semibold text-black">Lead Form</h3>
                        <p className="text-sm text-gray-500 text-center">
                            Show a form when someone opens your card to collect their contact details.
                        </p>

                        {/* Toggle */}
                        <button
                            onClick={() => setEnabled(!enabled)}
                            className={`mt-4 relative w-12 h-6 flex items-center rounded-full transition ${enabled ? "bg-blue-500" : "bg-gray-300"
                                }`}
                        >
                            <span
                                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition ${enabled ? "translate-x-6" : "translate-x-1"
                                    }`}
                            />
                        </button>

                        <span className="mt-1 text-sm font-medium text-gray-600">
                            {enabled ? "On" : "Off"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard