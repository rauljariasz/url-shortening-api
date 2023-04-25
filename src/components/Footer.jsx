import React from 'react';
import Logo from '../assets/logo.svg'
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import { BsPinterest, BsInstagram } from "react-icons/bs";



const Footer = () => {
  return (
    <footer id='Footer' className='bg-darkViolet py-[50px] lg:pt-[80px] relative'>
      <div className='lg:flex w-[75%] mx-auto'>
        {/* img */}
        <div>
          <img className='brightness-0 invert-[100%] mx-auto lg:w-[150px]' src={Logo} alt="" />
        </div>

        {/* ListOfLinks */}
        <div className='lg:flex lg:w-full lg:justify-end lg:pr-[50px] lg:gap-[65px] desktop:pr-[100px]'>
          {/* Features */}
          <div className='flex justify-center mt-[50px] lg:mt-0'>
            <ul className='text-gray-400 text-center flex flex-col gap-[20px] lg:text-start'>
              <li className='text-white font-bold'>Features</li>
              <li className='hover:text-primary'>
                <a href="#Footer" rel="noopener noreferrer">Link Shortening</a>
              </li>
              <li className='hover:text-primary'>
                <a href="#Footer" rel="noopener noreferrer">Branded Links</a>
              </li>
              <li className='hover:text-primary'>
                <a href="#Footer" rel="noopener noreferrer">Analytics</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className='flex justify-center mt-[50px] lg:mt-0'>
            <ul className='text-gray-400 text-center flex flex-col gap-[20px] lg:text-start'>
              <li className='text-white font-bold'>Resources</li>
              <li className='hover:text-primary'>
                <a href="#Footer" rel="noopener noreferrer">Blog</a>
              </li>
              <li className='hover:text-primary'>
                <a href="#Footer" rel="noopener noreferrer">Developers</a>
              </li>
              <li className='hover:text-primary'>
                <a href="#Footer" rel="noopener noreferrer">Support</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className='flex justify-center mt-[50px] lg:mt-0'>
            <ul className='text-gray-400 text-center flex flex-col gap-[20px] lg:text-start'>
              <li className='text-white font-bold'>Company</li>
              <li className='hover:text-primary'>
                <a href="#Footer" rel="noopener noreferrer">About</a>
              </li>
              <li className='hover:text-primary'>
                <a href="#Footer" rel="noopener noreferrer">Our Team</a>
              </li>
              <li className='hover:text-primary'>
                <a href="#Footer" rel="noopener noreferrer">Careers</a>
              </li>
              <li className='hover:text-primary'>
                <a href="#Footer" rel="noopener noreferrer">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Socials */}
        <div className='flex w-full justify-center gap-[20px] mt-[50px] lg:w-[200px] lg:mt-0'>
          <AiFillFacebook className='w-[35px] h-[35px] text-white hover:text-primary hover:cursor-pointer' />
          <AiOutlineTwitter className='w-[35px] h-[35px] text-white hover:text-primary hover:cursor-pointer' />
          <BsPinterest className='w-[30px] h-[30px] text-white hover:text-primary hover:cursor-pointer' />
          <BsInstagram className='w-[30px] h-[30px] text-white hover:text-primary hover:cursor-pointer' />
        </div>
      </div>
      <div>
        <p className='text-center text-white text-[12px] absolute bottom-2 right-[50%] translate-x-[50%] w-full'>
        Frontmentor Challenge. Coded with ♥ by <a className='text-primary font-bold' href="https://github.com/rauljariasz" target="_blank" rel="noopener noreferrer">Raul Arias</a>!.
        </p>
        </div>
    </footer>
  );
};

export default Footer;