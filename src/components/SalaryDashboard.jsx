import React from 'react';

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
    <div className="min-h-screen bg-gray-100 p-4 font-sans">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-xl font-bold">GIGFLOWW</div>
            <div className="ml-6 space-x-4">
              <button className="hover:underline">Dashboard</button>
              <button className="hover:underline">People</button>
              <button className="hover:underline">Hiring</button>
              <button className="hover:underline border-b-2 border-white pb-1">Salary</button>
              <button className="hover:underline">Reviews</button>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="user" />
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-3 gap-4 p-6">
          {/* Salary Table */}
          <div className="col-span-2">
            <h2 className="text-lg font-semibold mb-4">Salary Activities</h2>
            <div className="flex gap-2 mb-3">
              <input type="text" placeholder="Search" className="border px-3 py-2 rounded w-full" />
              <button className="border px-4 py-2 rounded bg-gray-200">Filter</button>
            </div>
            <table className="w-full text-left border">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2">Name</th>
                  <th className="p-2">Job Title</th>
                  <th className="p-2">Department</th>
                  <th className="p-2">Net Salary</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp, index) => (
                  <tr key={index} className="border-t">
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
          <div className="bg-white border rounded p-4">
            <div className="flex justify-between mb-4">
              <select className="border p-2 rounded">
                <option>May 2025</option>
              </select>
              <div className="text-right">
                <div className="text-sm">Monthly Salary -</div>
                <div className="text-lg font-semibold">$3500</div>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="profile" className="w-16 h-16 rounded-full" />
              <div>
                <div className="font-semibold">Elizabeth James</div>
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

            <div className="mt-4 text-right">
              <button className="text-blue-600 text-sm underline">View Payroll History</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryDashboard;
