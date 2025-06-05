import React from "react";

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
  // ... Add more dummy people
];

const PeopleDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Floating Navbar */}
      <nav className="bg-blue-600 text-white mx-auto rounded-full px-8 py-2 shadow-lg w-fit flex gap-6 justify-center mb-6">
        {["Dashboard", "People", "Hiring", "Salary", "Reviews"].map((item, i) => (
          <a
            key={i}
            href="#"
            className={`px-3 py-1 rounded-full ${
              item === "People" ? "bg-white text-blue-600 font-semibold" : "hover:bg-blue-500"
            }`}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">List of people</h2>
        <button className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 text-sm">
          Add new member
        </button>
      </div>

      {/* Filter Section */}
      <div className="flex flex-wrap gap-2 mb-4">
        <input
          type="text"
          placeholder="Search"
          className="border px-3 py-1.5 rounded-md text-sm w-40"
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
        <button className="text-blue-600 text-sm px-3 py-1.5">Export</button>
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
                ? "bg-blue-600 text-white"
                : "bg-white border border-gray-300 text-gray-600"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PeopleDashboard;
