import React from 'react'

const Navbar = () => {
  return (
    <nav className='py-5 bg-emerald-400'>
        <div className='container'>
            <div className="menu-row flex justify-between items-center	">
                <div className="logo w-24"><img src="images/logo.png" alt="logo" /></div>
                <div>
                    <ul className='flex gap-7 text-lg  font-semibold mr-2 '>
                        <li><a className='text-slate-400 hover:text-white hover:bg-orange-400 transition duration-500 hover: rounded-xl p-1' href="#">Home</a></li>
                        <li><a className='text-slate-400 hover:text-white hover:bg-orange-400 transition duration-500 hover: rounded-xl p-1' href="#">About</a></li>
                        <li><a className='text-slate-400 hover:text-white hover:bg-orange-400 transition duration-500 hover: rounded-xl p-1' href="#">Services</a></li>
                        <li><a className='text-slate-400 hover:text-white hover:bg-orange-400 transition duration-500 hover: rounded-xl p-1'  href="#">contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
