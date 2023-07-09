import { BiCalendar, BiEditAlt , BiBarChartAlt } from "react-icons/bi";
import {FaPrayingHands} from "react-icons/fa";
import {TooltipComponent} from '@syncfusion/ej2-react-popups'


const Navbar = () => {
  return (
    <div className=" flex flex-col p-4 rounded-tr-md rounded-br-lg  justify-between h-screen bg-gray-100 ">
        <div className="nav-icons">
            <div> <h1 className="text-xl my-10">Logo</h1></div>
            <TooltipComponent content='Analytics' position="Top">
              <BiBarChartAlt  className="icon "/>
            </TooltipComponent>
            
            <BiCalendar className="icon "/>
            <BiEditAlt className="icon "/>
            <FaPrayingHands className="icon "/>
        </div>
        <footer className="lowercase text-center">
        &copy;
           <p> FGC-VP</p>
           <p>2023</p>
        </footer>
    </div>
  )
}

export default Navbar