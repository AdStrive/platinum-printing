"use client";
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (route) => pathname === route;

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Motions
  const mobLinkVariants = {
    open: {
      
      opacity: 1,
    },
    closed: {
      
      opacity: 0,
    },
  };

  const sidebarVariants = {
    open: {
      y: 200,
      transition: {
        duration: 0.3,
        stiffness: 20,
      },
    },
    closed: {
      y: -600,
      transition: {
        duration: 0.5,
        stiffness: 400,
        damping: 40,
      },
    },
  };
  
  const desktopLinkVariants = {
    hidden: {
      y: -80,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative bg-white w-full p-4 h-[80px] flex justify-center items-center">
      <div className="absolute left-0 top-0 h-full bg-white"></div>
      <div
        className={`${
          isMobileMenuOpen ? '' : 'rounded-bl-[20px]'
        } absolute transition-all duration-300 right-0 top-0 h-full  bg-[#4d648e] md:w-[60%] w-[50%]`}
      ></div>
      <nav className="relative container">
        <div className="container mx-auto flex justify-between items-center w-full">
          {/* Logo */}
          <motion.div
            className="flex items-center w-[40%]"
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <a
              onClick={() => router.push('/')}
              className="text-black cursor-pointer text-lg font-bold"
            >
              {/* Need to replace */}
              Platinum Printing Solutions Logo
            </a>
          </motion.div>

          {/* Navbar Links (Hidden on small screens) */}
          <motion.div className="menu md:flex hidden items-center justify-center gap-5 md:gap-10 lg:gap-24 w-[60%]">
            <motion.a
              variants={desktopLinkVariants}
              initial="hidden"
              animate="visible"
              onClick={() => router.push('/')}
              className={`block ml-6 cursor-pointer transition-all duration-300 whitespace-nowrap
                ${isActive('/') ? 'active-link' : 'menu-link'}`}
            >
              Home
            </motion.a>
            <motion.a
              variants={desktopLinkVariants}
              initial="hidden"
              animate="visible"
              onClick={() => router.push('/products')}
              className={`block cursor-pointer transition-all duration-300 whitespace-nowrap
                ${isActive('/products') ? 'active-link' : 'menu-link'}`}
            >
              Products
            </motion.a>
            <motion.a
              variants={desktopLinkVariants}
              initial="hidden"
              animate="visible"
              onClick={() => router.push('/about-us')}
              className={`block cursor-pointer transition-all duration-300 whitespace-nowrap ${
                isActive('/about-us') ? 'active-link' : 'menu-link'
              }`}
            >
              About Us
            </motion.a>
            <motion.a
              variants={desktopLinkVariants}
              initial="hidden"
              animate="visible"
              onClick={() => router.push('/contact-us')}
              className={`block cursor-pointer transition-all duration-300 whitespace-nowrap ${
                isActive('/contact-us') ? 'active-link' : 'menu-link'
              }`}
            >
              Contact Us
            </motion.a>
          </motion.div>

          {/* Mobile Menu Button (Visible on small screens) */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="cursor-pointer focus:outline-none"
            >
              <svg width="21px" height="21px" viewBox="0 0 23 23">
                <motion.path
                  strokeWidth="3"
                  stroke="#fafafa"
                  strokeLinecap="round"
                  animate={isMobileMenuOpen ? 'open' : 'closed'}
                  initial="closed"
                  variants={{
                    closed: { d: 'M 2 2.5 L 20 2.5' },
                    open: { d: 'M 3 16.5 L 17 2.5' },
                  }}
                />
                <motion.path
                  strokeWidth="3"
                  stroke="#fafafa"
                  strokeLinecap="round"
                  initial={{ opacity: 1 }}
                  animate={isMobileMenuOpen ? 'open' : 'closed'}
                  d="M 2 9.423 L 20 9.423"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                />
                <motion.path
                  strokeWidth="3"
                  stroke="#fafafa"
                  strokeLinecap="round"
                  initial="closed"
                  animate={isMobileMenuOpen ? 'open' : 'closed'}
                  variants={{
                    closed: { d: 'M 2 16.346 L 20 16.346' },
                    open: { d: 'M 3 2.5 L 17 16.346' },
                  }}
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu (Hidden by default) */}
      <motion.div
        variants={sidebarVariants}
        initial="closed"
        animate={isMobileMenuOpen ? 'open' : 'closed'}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="md:hidden absolute right-0"
      >
        <motion.div
          className={`transition-all duration-700 ease-in-out transform flex flex-col items-center justify-center gap-6 w-[50vw] h-[350px] rounded-bl-[20px] bg-[#4d648e] p-2 px-6 text-[14px]`}
        >
          <motion.a
            variants={mobLinkVariants}
            initial="closed"
            animate={isMobileMenuOpen ? 'open' : 'closed'}
            transition={{ delay: 0.02, duration: 0.05, ease: 'easeInOut' }}
            onClick={() => {
              router.push('/');
              setMobileMenuOpen(!isMobileMenuOpen);
            }}
            className={`block cursor-pointer transition-all duration-300 uppercase w-full text-center ${
              isActive('/')
                ? 'text-white bg-[#b5ccf6]/90 rounded-md text-center p-2'
                : 'text-white hover:text-[#b5ccf6]'
            }`}
          >
            Home
          </motion.a>
          <motion.a
            variants={mobLinkVariants}
            initial="closed"
            animate={isMobileMenuOpen ? 'open' : 'closed'}
            transition={{ delay: 0.02, duration: 0.05, ease: 'easeInOut' }}
            onClick={() => {
              router.push('/products');
              setMobileMenuOpen(!isMobileMenuOpen);
            }}
            className={`block cursor-pointer transition-all duration-300 uppercase w-full text-center ${
              isActive('/products')
                ? 'text-white bg-[#b5ccf6]/90 rounded-md text-center p-2'
                : 'text-white hover:text-[#b5ccf6]'
            }`}
          >
            Products
          </motion.a>

          <motion.a
            variants={mobLinkVariants}
            initial="closed"
            animate={isMobileMenuOpen ? 'open' : 'closed'}
            transition={{ delay: 0.05, duration: 0.2, ease: 'easeInOut' }}
            onClick={() => {
              router.push('/about-us');
              setMobileMenuOpen(!isMobileMenuOpen);
            }}
            className={`block cursor-pointer transition-all duration-300 uppercase w-full text-center ${
              isActive('/about-us')
                ? 'text-white bg-[#b5ccf6]/90 rounded-md p-2'
                : 'text-white hover:text-[#b5ccf6]'
            }`}
          >
            About Us
          </motion.a>
          <motion.a
            variants={mobLinkVariants}
            initial="closed"
            animate={isMobileMenuOpen ? 'open' : 'closed'}
            transition={{ delay: 0.06, duration: 0.25, ease: 'easeInOut' }}
            onClick={() => {
              router.push('/contact-us');
              setMobileMenuOpen(!isMobileMenuOpen);
            }}
            className={`block cursor-pointer transition-all duration-300 uppercase w-full text-center ${
              isActive('/contact-us')
                ? 'text-white bg-[#b5ccf6]/90 rounded-md text-center p-2'
                : 'text-white hover:text-[#b5ccf6]'
            }`}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Navbar;