import React from "react";
import LOGO from '../assets/logo.png'

const people = [
  {
    name: "Alicia Shankur",
    email: "alicia.shankur@gmail.com",
    title: "Software Engineer",
    department: "Engineering",
    salary: "$2,500",
    startDate: "Mar 16, 2023",
    lifeCycle: "Hired",
    status: "Active",
  },
  {
    name: "James Oyinkan",
    email: "james.oyinkan@gmail.com",
    title: "Visual Designer",
    department: "Design",
    salary: "$2,000",
    startDate: "Jan 16, 2023",
    lifeCycle: "Hired",
    status: "Active",
  },
  {
    name: "Priya Deshmukh",
    email: "priya.deshmukh@example.com",
    title: "Product Manager",
    department: "Product",
    salary: "$3,200",
    startDate: "Feb 10, 2023",
    lifeCycle: "Hired",
    status: "Inactive",
  },
  {
    name: "Carlos Ramirez",
    email: "carlos.ramirez@example.com",
    title: "DevOps Engineer",
    department: "Engineering",
    salary: "$2,800",
    startDate: "May 5, 2023",
    lifeCycle: "Hired",
    status: "Active",
  },
  {
    name: "Emily Chen",
    email: "emily.chen@example.com",
    title: "UX Researcher",
    department: "Design",
    salary: "$2,300",
    startDate: "Apr 21, 2023",
    lifeCycle: "Hired",
    status: "Active",
  },
  {
    name: "Mohammed Alvi",
    email: "mohammed.alvi@example.com",
    title: "Data Analyst",
    department: "Data",
    salary: "$2,600",
    startDate: "Jun 1, 2023",
    lifeCycle: "Hired",
    status: "Active",
  },
  {
    name: "Rachel Kim",
    email: "rachel.kim@example.com",
    title: "Frontend Developer",
    department: "Engineering",
    salary: "$2,700",
    startDate: "Jul 15, 2023",
    lifeCycle: "Hired",
    status: "Inactive",
  },
  {
    name: "Noah Becker",
    email: "noah.becker@example.com",
    title: "Marketing Specialist",
    department: "Marketing",
    salary: "$2,100",
    startDate: "Mar 3, 2023",
    lifeCycle: "Hired",
    status: "Inactive",
  }
];


const PeopleDashboard = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="bg-gray-100 min-h-screen pb-2 px-6 w-7xl ">
     <div className="mb-7 flex justify-center items-center">
 <header className="bg-gradient-to-b from-blue-500/50 via-blue-500/30 to-blue-500/10 shadow-md px-6 py-4 mt-4 mx-6 w-7xl rounded-4xl flex items-center justify-between">
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
            item === "People" ? "bg-white text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
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

      {/* Header */}
      <div className="flex justify-between items-center mb-4 px-4">
        <h2 className="text-xl font-bold">List of people</h2>
        <button className="bg-gradient-to-r from-[#2784B8] to-[#113B52] text-white px-4 py-1.5 rounded hover:bg-blue-700 text-sm">
          Add new member
        </button>
      </div>

      {/* Filter Section */}
      <div className="flex gap-2 justify-between mb-4 px-2">
      <div className=" flex gap-3 w-4/5">
          <input
          type="text"
          placeholder="Search"
          className="border px-3 py-1.5 rounded-md text-sm w-70"
        />
        <select className="border px-3 py-1.5 rounded-md text-sm text-gray-600 w-32">
          <option>Type</option>
        </select>
        <select className="border px-3 py-1.5 rounded-md text-sm text-gray-600 w-32">
          <option>Role</option>
        </select>
        <button className="border px-3 py-1.5 rounded-md text-sm text-gray-600 w-40">
          Advanced Filter
        </button>
      </div>
        <button className="text-blue-600 text-xl px-3 py-1.5">Export</button>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2"><input type="checkbox" /></th>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Job Title</th>
              <th className="px-3 py-2">Department</th>
              <th className="px-3 py-2">Salary</th>
              <th className="px-3 py-2">Start Date</th>
              <th className="px-3 py-2">Life Cycle</th>
              <th className="px-3 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {people.map((p, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                <td className="px-3 py-2"><input type="checkbox" /></td>
                <td className="px-3 py-2">
                  <div className="font-medium">{p.name}</div>
                  <div className="text-xs text-gray-500">{p.email}</div>
                </td>
                <td className="px-3 py-2">{p.title}</td>
                <td className="px-3 py-2">{p.department}</td>
                <td className="px-3 py-2">{p.salary}</td>
                <td className="px-3 py-2">{p.startDate}</td>
                <td className="px-3 py-2">{p.lifeCycle}</td>
                <td className="px-3 py-2">
                  <span
                    className={`px-2 py-1 text-xs rounded-full font-medium ${
                      p.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end mt-4 gap-2">
        {[1, 2, 3, 4].map((page) => (
          <button
            key={page}
            className={`px-3 py-1 rounded ${
              page === 1
                ? "bg-gradient-to-r from-[#2784B8] to-[#113B52] text-white"
                : "bg-white border border-gray-300 text-gray-600"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default PeopleDashboard;
