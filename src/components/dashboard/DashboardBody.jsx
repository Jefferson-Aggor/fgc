// import AvatarImage from '../assets/img/avatar.jpg'
import Image from '../../assets/img/bg-1.jpg'
const DashboardBody = () => {
  return (
    <div className="w-screen p-20">
       <div className="flex flex-row justify-between w-full mb-3 ">
            <h1 className="text-2xl">Good morning, <span className="text-blue-700 font-extrabold">Jefferson!</span> </h1>
            <div className="flex"></div>
       </div>
       <div>
          <p className="text-xl">Event Updates</p>
          <form action="">
            <select name="event" id="event">
              <option value="" disabled selected>Select update type</option>
              <option value="announcement">Announcement</option>
              <option value="news">News</option>
              <option value="upcoming_event">Upcoming Event</option>
            </select>
          </form>
       </div>
       
    </div>
  )
}

export default DashboardBody