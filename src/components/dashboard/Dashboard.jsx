import Navbar from "../Navbar"
import DashboardBody from "./DashboardBody"

export const Dashboard = () => {
  return (
    <div className="flex">
        <Navbar/>
        <DashboardBody/>
    </div>
  )
}