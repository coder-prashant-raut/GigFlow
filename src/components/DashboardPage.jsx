import React from "react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { day: 'Mon', value: 30 },
  { day: 'Tue', value: 60 },
  { day: 'Wed', value: 80 },
  { day: 'Thu', value: 70 },
  { day: 'Fri', value: 50 },
  { day: 'Sat', value: 65 },
  { day: 'Sun', value: 70 },
];


const DashboardPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen overflow-x-hidden  text-gray-800 font-sans">
      {/* Top Navbar */}
     <div className="w-screen flex justify-center items-center">
 <header className="bg-gradient-to-b from-blue-500/50 via-blue-500/30 to-blue-500/10 shadow-md px-6 py-4 mt-4 mx-6 w-7xl rounded-4xl flex items-center justify-between">
  <div className="flex items-center space-x-4">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Iconic_image_placeholder.svg"
      alt="Logo"
      className="h-8 w-8"
    />
    <span className="text-xl font-bold text-blue-600">GIGFLOWW</span>
    <nav className="ml-6 hidden md:flex space-x-4">
      {["Dashboard", "People", "Hiring", "Salary", "Reviews"].map((item, i) => (
        <a
          key={i}
          href="#"
          className={`px-3 py-1 rounded-full ${
            item === "Dashboard" ? "bg-blue-100 text-blue-700 font-semibold" : "text-gray-600 hover:text-blue-600"
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
      {/* Banner */}
     <div className="w-full flex justify-center items-center">
 <div className="px-6 py-2">
        <div className="bg-white rounded-lg mt-4 px-6 py-3 shadow-sm w-7xl">
          <p className="text-sm text-gray-700">
            Optimize your experience on Gigfloww – track your job post, manage teams and streamline HR operations effortlessly today!
          </p>
        </div>
      </div>
     </div>

    <div className="w-full flex justify-center items-center">
 <main className="px-6 py-4 space-y-6 w-7xl">
  {/* Top Section: Performance + Sidebar */}
  <div className="flex flex-col lg:flex-row gap-6">
    <section className="flex-1 space-y-6">
      {/* Welcome & Stats */}
      <div>
        <h2 className="text-2xl font-semibold">Welcome Back, Nuraj group</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          {[
            { label: "Employees", count: 24 },
            { label: "Hiring", count: 5 },
            { label: "Projects", count: 1 },
          ].map((card, idx) => (
            <div key={idx} className="bg-white  p-4 rounded-lg shadow-sm">
              <p className="text-gray-600">{card.label}</p>
              <p className="text-3xl font-bold">{card.count}</p>
              <hr className="text-black/20" />
             <div className="flex justify-between items-center">
               <a href="#" className="text-sm text-blue-600 mt-2 inline-block">
                View Details
              </a>

              <a href="" className="font-bold"> →</a>
             </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Report */}
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Performance Report</h3>
          <select className="text-sm border border-gray-300 rounded px-2 py-1">
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.5}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="day" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#3b82f6" fillOpacity={1} fill="url(#colorValue)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>

    {/* Right Sidebar */}
    <aside className="w-full lg:w-[300px] space-y-4">
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Upcoming Actions</h3>
          <p className="text-sm text-gray-500">📅 Wed 23, May 2025</p>
        </div>
        <ul className="space-y-3 text-sm">
          {[
            { time: "03:30 pm", title: "Meeting with Jade - UI designer" },
            { time: "05:00 pm", title: "Meeting with Content team" },
            { time: "07:00 pm", title: "vishal Intern" },
            { time: "06:00 pm", title: "Meeting with Content team" },
            { time: "09:00 pm", title: "Interview with Achuyat - UI Intern" },
            { time: "03:30 pm", title: "Meeting with Jade - UI designer" },
            { time: "05:00 pm", title: "Meeting with Content team" },
          ].map((event, idx) => (
            <li key={idx} className="border-l-4 border-blue-500 pl-2">
              <p className="font-medium">{event.time}</p>
              <p className="text-gray-600">{event.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  </div>

  {/* Incoming Applications - Full Width */}
  <div className="bg-white rounded-lg p-4 shadow-sm">
  <div className="flex justify-between items-center mb-4">
    <h3 className="text-lg font-semibold">Incoming Application</h3>
    <div className="flex gap-2">
      <button className="text-sm border border-gray-300 px-3 py-1 rounded hover:bg-gray-100">Filter</button>
      <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">See all</button>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {[1, 2, 3, 4].map((app, idx) => (
      <div key={idx} className="border rounded-lg p-4 space-y-2">
        {/* Candidate Info */}
        <div className="flex items-center gap-3">
          <img
            src={`https://i.pravatar.cc/150?img=${idx + 1}`}
            className="w-10 h-10 rounded-xl"
            alt="Candidate"
          />
          <div>
            <p className="text-sm font-medium">Candidate {idx + 1}</p>
            <p className="text-sm text-gray-500 ">3 years in Software Development</p>
          </div>
        </div>

        {/* Experience Info */}
            <p className="text-sm font-medium text-gray-700">Latest Experience</p>

        <div className="flex items-start gap-2">
      <img
  src={"https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" || "https://placehold.co/40x40"}
  alt="Company Logo"
  className="w-8 h-8 rounded-xl object-cover mt-1"
/>

          <div>
            <p className="text-sm text-gray-600">
              Tucker Inc<br />12 Dec 2021 - 10 May 2025
            </p>
          </div>
        </div>
<hr  className="text-black/20"/>
        {/* Resume Link with Arrow */}
     <a
  href="#"
  className="flex justify-between items-center text-blue-600 text-sm font-medium hover:text-blue-800"
>
  <span>View Resume</span>
  <span className="ml-2">→</span>
</a>

      </div>
    ))}
  </div>
</div>

</main>
    </div>

    </div>
  );
};

export default DashboardPage;
