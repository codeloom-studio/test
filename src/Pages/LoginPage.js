import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import email from "../assets/email.svg"
import lock from "../assets/lock.svg"
import BlueButton from "../components/buttons/BlueButton"

const LoginPage = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "user@test.com",
        password: "user123",
    })
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    // Static credentials (you can add more if needed)
    const staticUsers = [
        { email: "superadmin@test.com", password: "superadmin123", role: "superadmin" },
        { email: "user@test.com", password: "user123", role: "user" },
    ]

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")
        setLoading(true)

        setTimeout(() => {
            const foundUser = staticUsers.find(
                (u) => u.email === formData.email && u.password === formData.password
            )

            if (foundUser) {
                localStorage.setItem("token", "static-demo-token")
                localStorage.setItem("user", JSON.stringify(foundUser))

                if (foundUser.role === "superadmin") {
                    navigate("/admin-dashboard")
                } else {
                    navigate("/plans")
                }
            } else {
                setError("Invalid email or password. Please try again.")
            }

            setLoading(false)
        }, 1000) // just to simulate a delay
    }

    return (
        <div className="w-100 flex items-center min-h-screen flex-col gap-4 bg-darkGrey pt-14">
            <h1 className="text-4xl font-semibold text-black font-inter">Login</h1>
            <p className="font-normal text-base text-lightGrey">
                Save your digital card so you can share it, edit it, and access it anytime
            </p>

            <form
                onSubmit={handleSubmit}
                className="flex justify-center flex-col items-center bg-white shadow-[0px_0px_8px_0px_#1D1D1F08] mt-10 p-12 rounded-2xl"
            >
                {/* Google button - static for now */}
                <button
                    type="button"
                    className="w-[32vw] flex items-center justify-center border border-gray-300 rounded-lg py-4 hover:bg-gray-50 transition"
                >
                    <img
                        src="https://www.svgrepo.com/show/355037/google.svg"
                        alt="Google"
                        className="w-5 h-5 mr-2"
                    />
                    Google
                </button>

                <div className="flex items-center my-6">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-4 text-gray-400 text-sm">Or</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-xs leading-4 text-lightBlack font-medium mb-1">
                        Email
                    </label>
                    <div className="flex items-center border rounded-lg py-2">
                        <img src={email} className="mx-3" alt="email" />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@email.com"
                            className="w-[28vw] outline-none text-gray-700"
                            required
                        />
                    </div>
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label className="block text-xs leading-4 text-lightBlack font-medium mb-1">
                        Password
                    </label>
                    <div className="flex items-center border rounded-lg py-2">
                        <img src={lock} className="mx-3" alt="lock" />
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Min. 8 characters"
                            className="w-[28vw] outline-none text-gray-700"
                            required
                        />
                    </div>
                </div>

                {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                {loading && <p className="text-gray-500 text-sm mb-2">Signing in...</p>}

                <BlueButton label="Sign in" width="w-[28vw]" type="submit" disabled={loading} />

                <p className="block text-xs leading-4 text-lightBlack font-medium mt-4">
                    Don't have an account?
                    <Link to="/register" className="text-lightBlue hover:underline ml-1">
                        Sign up
                    </Link>
                    {" | "}
                    <Link to="/forgot-password" className="text-lightBlue hover:underline ml-1">
                        Forgot Password?
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default LoginPage


//backend


// import { useState } from "react"
// import { Link, useNavigate } from "react-router-dom"
// import email from "../assets/email.svg"
// import lock from "../assets/lock.svg"
// import BlueButton from "../components/buttons/BlueButton"
// import axiosInstance from "../api/axiosInstance"

// const LoginPage = () => {
//     const navigate = useNavigate()

//     const [formData, setFormData] = useState({
//         email: "",
//         password: "",
//     })
//     const [error, setError] = useState("")
//     const [loading, setLoading] = useState(false)

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value })
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         setError("")
//         setLoading(true)

//         try {
//             const response = await axiosInstance.post("/auth/login", {
//                 email: formData.email,
//                 password: formData.password,
//             })

//             const { token, user } = response?.data?.data
//             // Save token to localStorage for future API calls
//             localStorage.setItem("token", token)
//             // localStorage.setItem("user", JSON.stringify(user))

//             if (user?.roles?.includes("superadmin")) {
//                 navigate("/admin-dashboard")
//             } else {
//                 navigate("/plans")
//             }
//         } catch (err) {
//             setError(
//                 err.response?.data?.message || "Invalid email or password. Please try again."
//             )
//         } finally {
//             setLoading(false)
//         }
//     }

//     return (
//         <div className="w-100 flex items-center min-h-screen flex-col gap-4 bg-darkGrey pt-14">
//             <h1 className="text-4xl font-semibold text-black font-inter">Login</h1>
//             <p className="font-normal text-base text-lightGrey">
//                 Save your digital card so you can share it, edit it, and access it anytime
//             </p>

//             <form
//                 onSubmit={handleSubmit}
//                 className="flex justify-center flex-col items-center bg-white shadow-[0px_0px_8px_0px_#1D1D1F08] mt-10 p-12 rounded-2xl"
//             >
//                 <button
//                     type="button"
//                     className="w-[32vw] flex items-center justify-center border border-gray-300 rounded-lg py-4 hover:bg-gray-50 transition"
//                 >
//                     <img
//                         src="https://www.svgrepo.com/show/355037/google.svg"
//                         alt="Google"
//                         className="w-5 h-5 mr-2"
//                     />
//                     Google
//                 </button>

//                 <div className="flex items-center my-6">
//                     <div className="flex-grow border-t border-gray-300"></div>
//                     <span className="mx-4 text-gray-400 text-sm">Or</span>
//                     <div className="flex-grow border-t border-gray-300"></div>
//                 </div>

//                 {/* Email */}
//                 <div className="mb-4">
//                     <label className="block text-xs leading-4 text-lightBlack font-medium mb-1">
//                         Email
//                     </label>
//                     <div className="flex items-center border rounded-lg py-2">
//                         <img src={email} className="mx-3" alt="email" />
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             placeholder="name@email.com"
//                             className="w-[28vw] outline-none text-gray-700"
//                             required
//                         />
//                     </div>
//                 </div>

//                 {/* Password */}
//                 <div className="mb-4">
//                     <label className="block text-xs leading-4 text-lightBlack font-medium mb-1">
//                         Password
//                     </label>
//                     <div className="flex items-center border rounded-lg py-2">
//                         <img src={lock} className="mx-3" alt="lock" />
//                         <input
//                             type="password"
//                             name="password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             placeholder="Min. 8 characters"
//                             className="w-[28vw] outline-none text-gray-700"
//                             required
//                         />
//                     </div>
//                 </div>

//                 {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
//                 {loading && <p className="text-gray-500 text-sm mb-2">Signing in...</p>}

//                 <BlueButton label="Sign in" width="w-[28vw]" type="submit" disabled={loading} />

//                 <p className="block text-xs leading-4 text-lightBlack font-medium mt-4">
//                     Don't have an account?
//                     <Link to="/register" className="text-lightBlue hover:underline ml-1">
//                         Sign up
//                     </Link>
//                     {" | "}
//                     <Link to="/forgot-password" className="text-lightBlue hover:underline ml-1">
//                         Forgot Password?
//                     </Link>
//                 </p>

//             </form>
//         </div>
//     )
// }

// export default LoginPage
