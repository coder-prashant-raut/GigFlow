import React from 'react'
import RegisterPage from './components/RegisterPage'
import DashboardPage from './components/DashboardPage'
import PeopleDashboard from './components/PeopleDashboard'
import SalaryDashboard from './components/SalaryDashboard'
import SignIn from './components/SignIn'
import JobPostingForm from './components/JobPostingForm'

function App() {
  return (
   <div className="space-y-6">
  <RegisterPage />
  <SignIn />
  <DashboardPage />
  <PeopleDashboard />
  <SalaryDashboard />
  <JobPostingForm />
</div>

  )
}

export default App