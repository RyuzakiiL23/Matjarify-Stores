'use client';
import { FaXTwitter, FaInstagram, FaGithub, FaXmark , FaBars } from "react-icons/fa6";
import React, { useEffect, useState } from 'react';
import './Nav.css';
import Link from "next/link";
import { usePathname } from "next/navigation";
// import logo from '../public/logo-no-bg.png';


function NavMenu() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  const handleClose = () => {
    setOpen(false); // Close the menu
  }

  useEffect(() => {
    const handleScroll = () => {
      if (open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'visible';
      }
    };

    const handleCloseOnResize = () => {
      // Close the menu when screen size changes to less than md
      if (open && window.innerWidth < 768) {
        setOpen(false);
      }
    };

    handleScroll();
    window.addEventListener('resize', handleCloseOnResize);

    return () => {
      document.body.style.overflow = 'visible';
      window.removeEventListener('resize', handleCloseOnResize);
    };
  }, [open]);

  const [scrollClassName, setScrollClassName] = useState('');
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [textColor, setTextColor] = useState('white');
  const pathname = usePathname();
  const [windowStat, setWindowStat] = useState(false)

  useEffect(() => {
    if (pathname.includes('contact')) {
      setTextColor('[#17191f]');
    } if (window.scrollY === 0 && !pathname.includes('contact')) {
      setTextColor('white');
    }
    function handleScroll() {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > prevScrollY ? 'down' : 'up';
      const scrolColor = currentScrollY > 612 ? '[#17191f] bg-white' : 'white bg-[#17191f]';

      currentScrollY !== 0 ? setWindowStat(true) : setWindowStat(false);
      setTextColor(scrolColor);
      setScrollClassName(scrollDirection);
      setPrevScrollY(currentScrollY);
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY, pathname]);

  return (
    <div className={`absolute w-full transition-all duration-300  ${scrollClassName === 'down' ? 'opacity-0 mt-[-40px]' : 'mt-0'}`}>
      <div className={`relative ${windowStat ? 'transition-all duration-300' : ''} text-${textColor}`} >
        <div className={`flex bg-blur-lg h-24 w-full transition duration-300 ${open ? 'bg-[#17191f] text-white' : ''}  justify-between items-center xl:px-28 px-4 md:pr-16`}>
          <div className='xl:hidden absolute right-6 cursor-pointer'>
            <input onChange={handleOpen} className='hidden' type="checkbox" id="check" checked={open} />
            <label htmlFor="check" className='icons'>
              <i id='menu-icon' className="cursor-pointer text-xl hover:opacity-50 transition duration-300"><FaBars/></i>
              <i id='close-icon' className="cursor-pointer text-xl hover:opacity-50 transition duration-300"><FaXmark /></i>
            </label>
          </div>
          {/* <ul className='hidden md:flex gap-12 xl:text-xl text-md'>
            <li className={`ulli  cursor-pointer`}><Link href='/' onClick={handleClose}>Home</Link></li>
            <li className={`ulli  cursor-pointer`}><Link href='/services' onClick={handleClose}>Services</Link></li>
            <li className={`ulli  cursor-pointer`}><Link href='/pricing' onClick={handleClose}>Pricing</Link></li>
            <li className={`ulli  cursor-pointer`}><Link href='/about' onClick={handleClose}>About us</Link></li>
            <li className={`ulli  cursor-pointer`}><Link href='/contact' onClick={handleClose}>Contact</Link></li>
          </ul> */}
        </div>
        <div className={`overflow-hidden justify-between  2xl:hidden bg-[#17191f] flex flex-col text-white text-2xl  transition-all duration-500 ${open ? 'h-screen p-4 z-50 pb-28 ' : 'h-0'}`}>
          <ul className="flex flex-col">
            <li className={`ulli my-1 font-extrabold cursor-pointer transition-all duration-500 ${open ? 'mr-auto ml-4' : 'ml-[-1000px]'} `}><Link href='/' onClick={handleClose}>Home</Link></li>
            <li className={`ulli my-1 font-extrabold cursor-pointer transition-all duration-500 ${open ? 'mr-auto ml-4' : 'ml-[-1000px]'} `}><Link href='/services' onClick={handleClose}>Services</Link></li>
            <li className={`ulli my-1 font-extrabold cursor-pointer transition-all duration-500 ${open ? 'mr-auto ml-4' : 'ml-[-1000px]'} `}><Link href='/pricing' onClick={handleClose}>Pricing</Link></li>
            <li className={`ulli my-1 font-extrabold cursor-pointer transition-all duration-500 ${open ? 'mr-auto ml-4' : 'ml-[-1000px]'} `}><Link href='/about' onClick={handleClose}>About Us</Link></li>
            <li className={`ulli my-1 font-extrabold cursor-pointer transition-all duration-500 ${open ? 'mr-auto ml-4' : 'ml-[-1000px]'} `}><Link href='/contact' onClick={handleClose}>Contact </Link></li>
          </ul>
          <ul className="flex flex-col">
            <div className={`text-sm text-gray-500 transition-all duration-500 ${open ? 'mr-auto ml-4' : 'ml-[-1000px]'} `}>Get in touch</div>
            {/* <li className={`ulli border-b border-gray-700 text-lg font-medium cursor-pointer transition-all duration-500 ${open ? 'mr-auto ml-4' : 'ml-[-1000px]'} `}><ContactEmail/></li> */}
          </ul>
          <ul className="flex flex-col">
            <div className={`flex h-10 w-full gap-12 `}>
              <FaGithub className={`hover:opacity-50   cursor-pointer transition-all duration-300 ${open ? ' ml-4' : 'ml-[-1000px]'} `} />
              <FaInstagram className="hover:opacity-50 transition-all duration-300 cursor-pointer" />
              <FaXTwitter className="hover:opacity-50 transition-all duration-300 cursor-pointer" />
            </div>
            <li className={`ulli border-b border-gray-700 text-sm font-medium cursor-pointer transition-all duration-500 ${open ? 'mr-auto ml-4' : 'ml-[-1000px]'} `}>307 Riad Al Ismailia Anasi, Meknes 50050</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavMenu;