// import AvatarImage from '../assets/img/avatar.jpg'
import Image from '../../assets/img/bg-1.jpg'
const DashboardBody = () => {
  return (
    <div className="w-screen p-20">
       <div className="flex flex-row justify-between w-full mb-3 ">
            <h1 className="text-2xl">Good morning, <span className="text-blue-700 font-extrabold">Jefferson!</span> </h1>
            <div className="flex">
                <div className="">
                  {/* <AvatarImage/> */}
                  <audio src="https://drive.google.com/drive/u/0/folders/1e3TvpJVRC-lWRigHW62bSVfvEUcmnl04" >Sermon</audio>
                </div>
            </div>
       </div>
       
    </div>
  )
}

export default DashboardBody