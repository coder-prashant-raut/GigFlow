import React from 'react';
import LOGO from '../assets/logo.png'


const SalaryDashboard = () => {
  const employees = [
    { name: 'Alicia Shankur', email: 'alicia.shankur@gmail.com', job: 'Software Engineer', dept: 'Engineering', salary: '$2,500', status: 'Paid' },
    { name: 'James Oyinkan', email: 'jamesoyinkan@gmail.com', job: 'Visual Designer', dept: 'Design', salary: '$2,100', status: 'Paid' },
    { name: 'Aresem Vlamadir', email: 'darioleksiy@yahoo.com', job: 'Sales Manger', dept: 'Product', salary: '$4,700', status: 'Pending' },
    { name: 'Kito Ashuth', email: 'ashuths@gmail.com', job: 'Content Writer', dept: 'Content', salary: '$2,000', status: 'Paid' },
    { name: 'Diti Shreyas', email: 'dshreyas@gmail.com', job: 'Backend Engineer', dept: 'Engineering', salary: '$2,500', status: 'Paid' },
    { name: 'Alicia Shankur', email: 'alicia.shankur@gmail.com', job: 'Product Manager', dept: 'Product', salary: '$4.00', status: 'Pending' },
    { name: 'Dario Berik', email: 'darioleksiy@yahoo.com', job: 'Software Engineer', dept: 'Engineering', salary: '$1,900', status: 'Paid' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4  font-sans">
      <div className="bg-white pb-4 rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
         <div className="w-screen flex justify-center items-center">
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
            item === "Salary" ? "bg-white text-blue-700 font-semibold" : "text-gray-600 hover:text-blue-600"
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

        <div className='flex justify-center items-center'>
<div className=' mt-1.5 w-7xl' >
            <div className='w-full flex justify-between items-center'>
 <h2 className="text-lg font-semibold mb-4">Salary Activities</h2>
            <select className="border p-2 rounded">
                <option>May 2025</option>
              </select>
           </div>
           <div className='w-full flex justify-between items-center mt-2'>
 <div className="flex gap-2 mb-3">
              <input type="text" placeholder="Search" className="border border-black/40 px-3 py-2 rounded w-80" />
              <button className="border border-black/40 px-4 py-2 rounded font-semibold text-black/40">Filter</button>
            </div>

          
              
              <div className="flex justify-between items-center gap-5">
                <div className="text-sm">Monthly Salary -</div>
                <div className="text-lg font-semibold">$3500</div>
              </div>
           
            </div>

        </div>
        </div>

        {/* Content */}
        <div className='flex justify-center items-center'>
<div className="grid grid-cols-4 gap-4  rounded w-7xl ">
          {/* Salary Table */}
          <div className="col-span-3">
                     <table className="w-full text-left shadow-xl px-4">
              <thead className="bg-gray-200">
                <tr className=' text-sm '>
                  <th className="p-2">Name</th>
                  <th className="p-2">Job Title</th>
                  <th className="p-2">Department</th>
                  <th className="p-2">Net Salary</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp, index) => (
                  <tr key={index} className="border-t border-black/40 rounded-xl">
                    <td className="p-2">
                      <div className="font-semibold">{emp.name}</div>
                      <div className="text-sm text-gray-500">{emp.email}</div>
                    </td>
                    <td className="p-2">{emp.job}</td>
                    <td className="p-2">{emp.dept}</td>
                    <td className="p-2">{emp.salary}</td>
                    <td className="p-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${emp.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {emp.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sidebar */}
          <div className="bg-white rounded-xl px-4">
           

  <div className=" mx-auto bg-white overflow-hidden relative">
  {/* Blue Top Half */}
  <div className="h-20 w-full bg-blue-500 rounded-t-xl"></div>

  {/* Profile Image */}
  <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
    <img
      src="https://randomuser.me/api/portraits/women/44.jpg"
      alt="profile"
      className="w-20 h-20 rounded-full border-4 border-white"
    />
  </div>

  {/* Name & Role */}
  <div className="mt-14 text-center pb-4">
    <div className="font-semibold text-lg">Elizabeth James</div>
    <div className="text-sm text-gray-500">UI Designer</div>
  </div>
</div>

            <div className="text-sm space-y-2">
              <div className="flex justify-between"><span>Position:</span><span className="font-semibold">UI lead</span></div>
              <div className="flex justify-between"><span>Department:</span><span className="font-semibold">Design</span></div>
              <div className="flex justify-between"><span>Status:</span><span className="font-semibold">Active</span></div>
              <div className="flex justify-between"><span>Basic Salary:</span><span className="font-semibold">$3500</span></div>
              <div className="flex justify-between"><span>Bonus & Overtime:</span><span className="font-semibold">$500</span></div>
              <div className="flex justify-between"><span>Deduction:</span><span className="font-semibold">$0.00</span></div>
              <div className="flex justify-between"><span>Next Salary:</span><span className="font-semibold">$3500</span></div>
              <div className="flex justify-between"><span>Bank Details:</span><span className="font-semibold">234567890 Polaris Bank</span></div>
              <div className="flex justify-between"><span>Currency:</span><span className="font-semibold">$USD</span></div>
            </div>
<hr className='my-4 text-black/40'/>
            <div className=" text-left flex justify-between items-center w-full">
              <button className="text-blue-600 text-sm underline">View Payroll History</button>
              <div>→</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryDashboard;
