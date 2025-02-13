import React from 'react'
import { NavbarMenu } from "../../mockData/data"
import './Navbar.css'
import { ResponsiveMenu } from './ResponsiveMenu'
import { Link } from 'react-router-dom'

export const Navbar = () => {

   const [open, setOpen] =React.useState(false)

  return (
    <>
    <nav>
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-20 flex justify-between items-center py-8">
            {/* logo section */}
            <div>
                <a href="/">
                    <img src="/Images/logoicon.png" alt="" className="w-18 h-18" />
                </a>
            </div>
            {/* menu section */}
            <div className="hidden md:block">
                <ul className="flex items-center gap-6 text-black ">
                    {
                        NavbarMenu.map((item) => {
                            return(
                                <li key={item.id} className="mobilelist">
                                    <Link to={item.link} className="inline-block py-1 px-3 hover:text-amber-700">
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className=" flex items-center gap-4">
                {/* membership btn */}
                <button className="text-2xl hover:bg-amber-700 hover:text-black rounded-full p-2 duration-200" id='membership1'>
                    <img src="/Images/membership.png" alt="" className="w-8.5 h-8.5"/>
                </button>
                <button className="text-2xl hover:bg-amber-700 hover:text-black rounded-full p-2 duration-200" id='membership2'>
                    <img src="/Images/membership2.png" alt="" className="w-8.5 h-8.5"/>
                </button>
                {/* menu btn */}
                <button className="hover:bg-amber-700 hover:text rounded-md border-2 border-black-300 px-6 py-2 duration-200 hidden md:block" id='login'>
                    Login
                </button>
                <img src="/Images/menu.png" alt=""className="text-4xl w-6 h-6 hidden" id="menu1" onClick={() => setOpen(!open)} />
                <img src="/Images/menu2.png" alt=""className="text-4xl w-6 h-6 hidden" id="menu2" onClick={() => setOpen(!open)} />
            </div>
        </div> 
    </nav>
    <ResponsiveMenu open={open} />
    </>
  )
}
