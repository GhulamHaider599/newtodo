import React from 'react'
import logo from '../../assets/logo.svg'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-[80px] bg-[#F2EAEA] shadow-lg shadow-gray-500/50 '>
      <div className='ms-3'> <img src={logo} alt="" className='w-[200px] h-[200px]' /></div>
      <img src="https://randomuser.me/api/portraits/men/1.jpg" className="w-[60px] h-[60px] rounded-full border-2 me-4 border-white" alt="User" />
    </div>
  )
}

export default Navbar