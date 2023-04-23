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
      { menu ? <MobileMenu menu={menu} setMenu={setMenu}/> : null}
      <nav className='px-[24px] mt-[40px] mb-[20px]'>
        <div className="flex items-center justify-between">
          <img src={Logo} alt="Logo Shortly" />
          {/* Mobile  */}
          <div onClick={handdleMenu}>
            <Bars3Icon className='h-8 w-8 text-gray-400'/>
          </div>

          {/* Desktop */}
          <div className='w-full hidden'>
            <ul></ul>
            <div></div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
