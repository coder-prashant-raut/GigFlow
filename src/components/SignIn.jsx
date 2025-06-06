import React from "react";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
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
        <div className="w-full md:w-3/5 p-8 md:p-12  ">
          {/* Logo and Header */}
          <div className="text-center mb-2">
            <div className="bg-white p-3 rounded-md inline-block shadow">
              <h1 className="text-xl font-bold text-blue-600">GIGFLOWW</h1>
              <p className="text-sm text-gray-600">Welcome to Gigfloww</p>
            </div>
            <h2 className="text-3xl font-bold mt-6 text-gray-800">Register</h2>
            <p className="text-gray-700 mt-1 text-sm">
              Seamless HR operations start now!<br />Sign up
            </p>
          </div>

          {/* Form */}
          <div className="w-full flex justify-center items-center">
<form className="space-y-4 w-4/5">
            <div>
              <label className="text-xl font-semibold text-gray-700 mb-1 block">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-xl border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div>
              <label className="text-xl font-semibold text-gray-700 mb-1 block">Work Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-xl border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div>
              <label className="text-xl font-semibold text-gray-700 mb-1 block">Password</label>
              <input
                type="password"
                placeholder="Your password"
                className="w-full px-4 py-2 rounded-xl border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            

            <button
              type="submit"
              className="w-full py-2 mt-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-md hover:from-cyan-600 hover:to-blue-700 transition"
            >
              Sign up for free
            </button>

            <p className="text-sm px-2">By Clicking On Sign Up, you agree to our  <a href="#" className="text-blue-600 font-semibold underline">Terms and Conditions</a> </p>
          </form>
          </div>

          

        <div className="w-full h-full flex justify-end pt-25">
        <p>
            Already on GigFlow ? <span className="text-blue-500 font-semibold">Log In</span>
        </p>
      </div>
        </div>
        
      </div>

     
    </div>
  );
};

export default SignIn;
