import {NavLink, Outlet} from 'react-router-dom'
import {GrInstagram, GrFacebookOption, GrTwitter} from 'react-icons/gr'
import Logo from '../../assets/img/logo.png'
export const Nav = () => {

  return (
    <div 
    className= ' flex flex-row justify-between items-center h-10 w-full bg-black p-10 text-white  z-20 opacity-90'>
      <div>
         <NavLink to='/' ><img src={Logo} alt="Logo" className='h-48 '/></NavLink> 
      </div>

      <div className=''>
        <ul className='flex space-x-6'>
        <li><NavLink to='/' className='nav-links'>Home</NavLink></li>
          <li><NavLink to='/about' className='nav-links'>Who We Are</NavLink></li>
          <li><NavLink to='/watch-and-listen' className='nav-links'>Watch & Listen</NavLink></li>
          <li><NavLink to='/prayer' className='nav-links'>Prayer & Care</NavLink></li>
          {/* <li><NavLink to='ministries' className='nav-links'>Ministries</NavLink></li>  */}
        </ul>
      </div>

      <div className='flex justify-evenly items-center space-x-4'>
          <GrTwitter className='text-white'/>
          <GrFacebookOption className='text-white'/>
          <GrInstagram className='text-white'/>
      </div>

      <Outlet/>
    </div>
  )
}

