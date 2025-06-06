import React from "react";
import LOGO from '../assets/logo.png'
const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 px-4">
      <div className="w-full max-w-6xl max-h-screen flex flex-col md:flex-row bg-white shadow-2xl overflow-hidden">
        {/* Left Side - Image */}
        <div className="md:w-1/2 h-64 md:h-auto">
          <img
            src="https://plus.unsplash.com/premium_photo-1686244744952-57dbec909773?q=80&w=1080&auto=format&fit=crop"
            alt="Team working"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-3/5 p-8 md:p-12 bg-gradient-to-b from-[#c5d4e3] to-[#9aaebf]">
          {/* Logo and Header */}
          <div className="text-center mb-2">
            <div className="bg-white p-3 rounded-md inline-block shadow">
              <img src={LOGO} className="w-24" alt="" />
              <p className="text-sm text-gray-600">Welcome to Gigfloww</p>
            </div>
            <h2 className="text-3xl font-bold mt-6 text-gray-800">Register</h2>
            <p className="text-gray-700 mt-1 text-sm">
              Seamless HR operations start now!<br />Sign up
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1 block">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-full border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1 block">Email Address</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-full border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1 block">Password</label>
              <input
                type="password"
                placeholder="Your password"
                className="w-full px-4 py-2 rounded-full border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1 block">Confirm Password</label>
              <input
                type="password"
                placeholder="Re confirm your password"
                className="w-full px-4 py-2 rounded-full border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-md hover:from-cyan-600 hover:to-blue-700 transition"
            >
              Register
            </button>
          </form>

          {/* Already have account */}
          <p className="text-center text-sm text-gray-800 mt-4">
            Already on Gigfloww?{" "}
            <a href="#" className="text-blue-700 font-medium hover:underline">
              Log in
            </a>
          </p>

          {/* Social Buttons */}
          <div className="mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
            <button className="flex items-center justify-center gap-2 px-4 py-2 border rounded-full bg-white text-gray-800 hover:bg-gray-100 transition">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-5 w-5"
              />
              <span>Register with Google</span>
            </button>

            <button className="flex items-center justify-center gap-2 px-4 py-2 border rounded-full bg-white text-black hover:bg-gray-900 transition">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLijaPszr2xuNXoK23blRKlGr_eV7C762Bew&s"
                alt="Apple"
                className="h-5 w-5 invert"
              />
              <span>Register with Apple</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
