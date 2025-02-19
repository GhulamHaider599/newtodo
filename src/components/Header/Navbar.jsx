// import React from 'react'
// import logo from '../../assets/logo.svg'
// const Navbar = () => {
//   return (
//     <div className='flex justify-between items-center h-[80px] bg-[#F2EAEA] shadow-lg shadow-gray-500/50 '>
//       <div className='ms-3'> <img src={logo} alt="" className='w-[200px] h-[200px]' /></div>
//       <img src="https://randomuser.me/api/portraits/men/1.jpg" className="w-[60px] h-[60px] rounded-full border-2 me-4 border-white" alt="User" />
//     </div>
//   )
// }

// export default Navbar


import React from 'react';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-[80px] bg-[#F2EAEA] shadow-lg shadow-gray-500/50 px-4 sm:px-6 md:px-8'>
      {/* Logo */}
      <div className='flex-1'>
        <img src={logo} alt="Logo" className='w-[150px] sm:w-[180px] md:w-[200px] h-auto' />
      </div>

      {/* User Avatar */}
      <img
        src="https://randomuser.me/api/portraits/men/1.jpg"
        className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] rounded-full border-2 border-white"
        alt="User"
      />
    </div>
  );
}

export default Navbar;
