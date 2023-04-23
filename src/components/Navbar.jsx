import { useState } from 'react'
import Logo from '../assets/logo.svg'
import { Bars3Icon } from '@heroicons/react/24/solid'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const handdleMenu = () => {
    setMenu(!menu)
  }

  return (
    <>
      { menu && <MobileMenu menu={menu} setMenu={setMenu}/> }
      <nav className='px-[24px] mt-[40px] mb-[20px] lg:px-[0px]'>
        <div className="flex items-center justify-between lg:w-[75%] lg:mx-auto">
          <img src={Logo} alt="Logo Shortly" />
          {/* Mobile  */}
          <div onClick={handdleMenu} className='lg:hidden'>
            <Bars3Icon className='h-8 w-8 text-gray-400'/>
          </div>

          {/* Desktop */}
          <div className='w-full hidden lg:flex justify-between items-center ml-[40px]'>
            <ul className='flex items-center font-bold gap-[35px] text-gray-400 text-[18px]'>
              <li className='hover:text-black hover:cursor-pointer'>Features</li>
              <li className='hover:text-black hover:cursor-pointer'>Pricing</li>
              <li className='hover:text-black hover:cursor-pointer'>Resources</li>
            </ul>
            <div className='flex font-bold gap-[30px] text-[18px]'>
              <button className="text-gray-400 hover:text-black hover:cursor-pointer">Login</button>
              <button className="bg-primary text-white w-[105px] h-[45px] rounded-[25px] hover:bg-hover">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
