import { assets } from "../assets/frontend_assets/assets.js";
import { NavLink,Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import {  useState } from "react";
import {motion,AnimatePresence} from "framer-motion"
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
    const [isOpen,setIsOpen]=useState(false);

    return (
        <div className="flex items-center justify-between py-5 font-medium">
            
            <a href="/"><img src={assets.logo} alt="" className="w-36 h-14" /></a>
            
            {/* gap mean betwenn childs */}
        
        {/* hr perpose of this tag  is just to create a horizontal line across the page */}
            <ul className="hidden sm:flex gap-5 text-sm text-gray-700 ">
                <NavLink to='/' className="flex flex-col items-center gap-1 ">
                <p>HOME</p>
                <hr className="w-1/2 h-[2px] bg-gray-800 hidden"/>
            
                </NavLink>
                <NavLink to='/collection' className="flex flex-col items-center gap-1 ">
                <p>COLLECTION</p>
                <hr className="w-1/2 h-[2px] bg-gray-800 hidden"/>
            
                </NavLink>
                <NavLink to='/about' className="flex flex-col items-center gap-1 ">
                <p>ABOUT</p>
                <hr className="w-1/2 h-[2px] bg-gray-800 hidden"/>
            
                </NavLink>
                <NavLink to='/contact' className="flex flex-col items-center gap-1 ">
                <p>CONTACT</p>
                <hr className="w-1/2 h-[2px] bg-gray-800 hidden"/>
            
                </NavLink>

            </ul>
            <div className="flex items-center gap-6">
            <FaSearch className="cursor-pointer"/>
            <div className="group relative  ">
            <CgProfile className="cursor-pointer "/>
            <div className="group-hover:block hidden dropdown-menu absolute gap-6 text-gray-600">
                <div className="flex flex-col w-36  py-2 gap-1">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                
                <p className="cursor-pointer hover:text-black">Orders</p>
               
                <p className="cursor-pointer hover:text-black">Logout</p>
                </div>
              
            </div>
           

            </div>
            <Link to='/cart' className="">
            <img src={assets.cart_icon} alt="" className="w-[15px]" /></Link>
            <div className="sm:hidden">
                <button
                onClick={()=>setIsOpen(!isOpen)}
                className="mt-2  z-50">{isOpen?<RxCross2 />:<IoMenu />}</button>
            </div>
           
            <AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, y: -100 }}
      transition={{ duration: 0.5 }}
      className="absolute top-20 -left-5 pr-2 w-full h-[180px] z-20"
    >
      <div className="text-xl font-semibold uppercase bg-yellow-500 text-white m-6 rounded-3xl p-6 w-full h-full">
        <div className="flex flex-col justify-center items-center gap-5">
          <Link to='/collection'  onClick={()=>setIsOpen(!isOpen)}>COLLECTION</Link>
          <Link to='about'  onClick={()=>setIsOpen(!isOpen)}>ABOUT</Link>
          <Link to='contact'  onClick={()=>setIsOpen(!isOpen)}>CONTACT</Link>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>


          
            </div>
           
           
        </div>
    );
};

export default Navbar;
