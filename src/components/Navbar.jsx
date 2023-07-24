import { NavLink, Outlet } from 'react-router-dom'
import { BiEditAlt } from "react-icons/bi";
import { SlEnvolopeLetter } from "react-icons/sl"
// import {FaPrayingHands} from "react-icons/fa";



export const Navbar = () => {
  return (
    <div className=" flex flex-col p-4 rounded-tr-md rounded-br-lg  justify-between min-h-screen bg-gray-100">
      <div className="nav-icons">
        <NavLink to='/dashboard/updates'><BiEditAlt className="icon " /></NavLink>
        <NavLink to='/dashboard/newsletters'><SlEnvolopeLetter className="icon " /></NavLink>
      </div>

      <footer className="lowercase text-center">
        &copy;
        <p> FGC-VP</p>
        <p>2023</p>
      </footer>
      <Outlet />
    </div>
  )
}

export default Navbar