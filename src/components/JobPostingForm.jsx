import React from "react";
import LOGO from '../assets/logo.png'
import img from '../assets/image555.png'
const JobPostingForm = () => {
  return (
   <div className="flex justify-center items-center">
     <div className="min-h-screen bg-white p-2 md:p-12 w-7xl text-gray-800">
  
 {/* Header */}
         <div className=" flex justify-center items-center">
 <header className="bg-gradient-to-b from-blue-500/50 via-blue-500/30 to-blue-500/10 shadow-md px-6 py-4 mt-4 mx-6 w-7xl rounded-4xl flex items-center justify-between mb-2">
  <div className="flex items-center space-x-4">
    <img
      src={LOGO}
      alt="Logo"
      className="w-32"
    />
   
    <nav className="ml-6 hidden md:flex space-x-4">
      {["Dashboard", "People", "Hiring", "Salary", "Reviews"].map((item, i) => (
        <a
          key={i}
          href="#"
          className={`px-3 py-1 rounded-full ${
            item === "Hiring" ? "bg-white text-blue-700 font-semibold" : "text-gray-600 hover:text-blue-600"
          }`}
        >
          {item}
        </a>
      ))}
    </nav>
  </div>

  {/* Right Icons Section */}
  <div className="flex items-center gap-4">
    {/* Settings Icon */}
    <button>
     <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6 text-gray-600 hover:text-blue-600"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={2}
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 15.25A3.25 3.25 0 1 0 12 8.75a3.25 3.25 0 0 0 0 6.5z"
  />
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M19.5 12a7.5 7.5 0 0 0-.2-1.75l1.5-1.17a.75.75 0 0 0 .18-.97l-1.5-2.6a.75.75 0 0 0-.95-.33l-1.76.7a7.5 7.5 0 0 0-1.5-.87l-.25-1.87A.75.75 0 0 0 14.5 3h-5a.75.75 0 0 0-.75.64l-.25 1.87a7.5 7.5 0 0 0-1.5.87l-1.76-.7a.75.75 0 0 0-.95.33l-1.5 2.6a.75.75 0 0 0 .18.97l1.5 1.17a7.5 7.5 0 0 0 0 3.5l-1.5 1.17a.75.75 0 0 0-.18.97l1.5 2.6a.75.75 0 0 0 .95.33l1.76-.7a7.5 7.5 0 0 0 1.5.87l.25 1.87a.75.75 0 0 0 .75.64h5a.75.75 0 0 0 .75-.64l.25-1.87a7.5 7.5 0 0 0 1.5-.87l1.76.7a.75.75 0 0 0 .95-.33l1.5-2.6a.75.75 0 0 0-.18-.97l-1.5-1.17c.13-.57.2-1.16.2-1.75z"
  />
</svg>

    </button>

    {/* Notification Icon with Badge */}
    <button className="relative">
      {/* Red Badge with Count */}
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
        4
      </span>
      <svg
        className="w-6 h-6 text-gray-600 hover:text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M15 17h5l-1.405-1.405C18.21 14.79 18 14.397 18 14V11c0-3.31-2.69-6-6-6S6 7.69 6 11v3c0 .397-.21.79-.595 1.595L4 17h5m6 0v1a3 3 0 01-6 0v-1m6 0H9" />
      </svg>
    </button>

    {/* User Avatar */}
    <img src="https://i.pravatar.cc/36" alt="User" className="rounded-full w-8 h-8" />
  </div>
</header>


     </div>


      <div className=" mb-6">
        <h1 className="text-2xl font-semibold">Job Posting</h1>
        <p className="text-sm ">
          Post Job for Free. Add details for your job post
        </p>
      </div>

     {/* Form */}
<div className="grid md:grid-cols-3 gap-6">
  {/* Left Side Form */}
  <div className="md:col-span-2 space-y-4">
    <h2 className="text-xl font-semibold mb-4 underline">Fill in Job Details</h2>

    <div>
      <label htmlFor="jobTitle" className="block mb-1 font-medium">Role</label>
      <input id="jobTitle" type="text" placeholder="e.g UI/UX Designer" className="w-full border rounded-lg p-3" />
    </div>

    <div>
      <label htmlFor="skills" className="block mb-1 font-medium">Skill Required</label>
      <input id="skills" type="text" placeholder="Enter required skill(s)" className="w-full border rounded-lg p-3" />
    </div>

    <div>
      <label htmlFor="experience" className="block mb-1 font-medium">Year's of Experience/Experiance Level</label>
      <select id="experience" className="w-full border rounded-lg p-3">
        <option value="">e.g 0-2 years</option>
      </select>
    </div>

    <div>
      <label htmlFor="jobType" className="block mb-1 font-medium">Employment Type</label>
      <select id="jobType" className="w-full border rounded-lg p-3">
        <option value="">e.g Full time</option>
      </select>
    </div>

    <div>
      <label htmlFor="workMode" className="block mb-1 font-medium">Workplace Type</label>
      <select id="workMode" className="w-full border rounded-lg p-3">
        <option value="">e.g Hybrid</option>
      </select>
    </div>

    <div>
      <label htmlFor="payment" className="block mb-1 font-medium">Stipend</label>
      <input id="payment" type="text" placeholder="Enter the payment per month" className="w-full border rounded-lg p-3" />
    </div>

    <div>
      <label htmlFor="openings" className="block mb-1 font-medium">No of Openings</label>
      <select id="openings" className="w-full border rounded-lg p-3">
        <option value="">e.g 2</option>
      </select>
    </div>

    <div>
      <label htmlFor="description" className="block mb-1 font-medium">Job Description</label>
      <textarea id="description" placeholder="Job Description" className="w-full border rounded-lg p-3 h-32"></textarea>
    </div>

    <div>
      <label htmlFor="applicationLink" className="block mb-1 font-medium">Relevant Link's</label>
      <input id="applicationLink" type="text" placeholder="Enter link" className="w-full border rounded-lg p-3" />
    </div>
  </div>

  {/* Right Sidebar */}
  <div className="space-y-6">
    {/* Manage Posting */}
    <div className="border rounded-lg p-4 shadow-sm">
  <h3 className="font-semibold text-lg mb-2">Manage Posting</h3>
  <div className="space-y-4">
    {[1, 2].map((id) => (
      <div
        key={id}
        className="border p-3 rounded-lg bg-gray-50 text-sm text-gray-700"
      >
        {/* Top: Logo + Info */}
        <div className="flex items-start gap-3">
          {/* Company Logo */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn8VhHDLTc0gd6ZogdamS6_kUy4DbWipHoD_kxsdZ4_MtF32DtQul7IrOBumzwfstZnWQ&usqp=CAU"
            alt="Company Logo"
            className="w-18 rounded-full object-cover"
          />

          {/* Job Info */}
          <div>
            <p className="font-semibold">UI Designer Intern (Remote)</p>
            <p>Artistic.studio</p>
            <p>Bangalore, India</p>
          </div>
        </div>

        {/* Bottom: Views & Applicants */}
        <div className="text-xs flex justify-around mt-4 pl-5">
          {/* Views */}
          <div className="flex flex-col items-start font-bold text-xl">
            <span className="font-semibold">320</span>
            <span className="text-gray-500 text-sm">Views</span>
          </div>

          {/* Applicants */}
          <div className="flex flex-col items-end font-bold text-xl">
            <span className="font-semibold">10+</span>
            <span className="text-gray-500 text-sm">Total Applicants</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


    {/* AI Writing Suggestion */}
    <div className="border rounded-lg p-4 text-sm shadow-sm flex flex-col gap-3">
      <img src={img} alt="" />
      <div className="flex items-center gap-3">
       
        <p >
          
          <span className="text-2xl text-black/80 font-bold">Use AI to write</span>
          <br />
          <br />
          <span className="text-xs text-gray-500">
            Write perfectly crafted roles with AI. If you want help with job descriptions and other fields, AI will suggest for you.
          </span>
        </p>
      </div>
      <button className="bg-gradient-to-r from-[#2784B8] to-[#113B52]  text-white rounded-md px-4 py-2 hover:bg-blue-700">
        Write with AI
      </button>
    </div>
  </div>
</div>

    </div>
   </div>
  );
};

export default JobPostingForm;
