import company from "../assets/company.svg"
import user from "../assets/user.svg"
import email from "../assets/email.svg"
import phone from "../assets/phone.svg"
import lock from "../assets/lock.svg"
import BlueButton from "../components/buttons/BlueButton"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const LoginPage = () => {
    return (
        <>
            <div className='w-100 flex items-center justify-center min-h-screen flex-col gap-4 bg-darkGrey pt-20'>
                <h1 className='text-4xl font-semibold text-black font-inter'>Create your account</h1>
                <p className='font-normal text-base text-lightGrey'>Save your digital card so you can share it, edit it, and access it anytime</p>

                <div className="flex justify-center flex-col items-center bg-white shadow-[0px_0px_8px_0px_#1D1D1F08] mt-10 p-12 rounded-lg">
                    <button className="w-[32vw] flex items-center justify-center border border-gray-300 rounded-lg py-4 hover:bg-gray-50 transition">
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

                    <div className="mb-4">
                        <label className="block text-xs leading-4 text-lightBlack font-medium  mb-1">
                            Company name (optional)
                        </label>
                        <div className="flex items-center border rounded-lg py-2">
                            <img src={company} className="mx-3" />
                            <input
                                type="text"
                                placeholder="Company name here"
                                className="w-[28vw]  outline-none text-gray-700"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-xs leading-4 text-lightBlack font-medium  mb-1">
                            Your Name
                        </label>
                        <div className="flex items-center border rounded-lg py-2">
                            <img src={user} className="mx-3" />
                            <input
                                type="text"
                                placeholder="Your name here"
                                className="w-[28vw]  outline-none text-gray-700"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-xs leading-4 text-lightBlack font-medium  mb-1">
                            Email
                        </label>
                        <div className="flex items-center border rounded-lg py-2">
                            <img src={email} className="mx-3" />
                            <input
                                type="text"
                                placeholder="name@email.com"
                                className="w-[28vw]  outline-none text-gray-700"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-xs leading-4 text-lightBlack font-medium  mb-1">
                            Phone
                        </label>
                        <div className="flex items-center border rounded-lg py-2">
                            <img src={phone} className="mx-3" />
                            <input
                                type="text"
                                placeholder="+9193445233"
                                className="w-[28vw]  outline-none text-gray-700"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-xs leading-4 text-lightBlack font-medium  mb-1">
                            Password
                        </label>
                        <div className="flex items-center border rounded-lg py-2">
                            <img src={lock} className="mx-3" />
                            <input
                                type="text"
                                placeholder="Min. 8 character"
                                className="w-[28vw]  outline-none text-gray-700"
                            />
                        </div>
                    </div>

                    <div className="flex items-center w-[28vw] mb-6">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-xs leading-4 text-lightBlack font-medium">
                            I agree to the{" "}
                            <a href="#" className="text-lightBlue hover:underline">
                                Terms and Privacy Policy
                            </a>
                        </span>
                    </div>


                    <BlueButton label="Sign up" width="w-[28vw]" />

                    <p className="block text-xs leading-4 text-lightBlack font-medium  mt-4">Already have an account? <a href="#" className="text-lightBlue hover:underline">Sign in</a></p>
                </div>
            </div>
        </>
    )
}

export default LoginPage
