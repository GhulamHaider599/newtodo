// import React from 'react'
// import logo from '../../assets/logo.svg'
// import { FiFacebook, FiGitBranch, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
// const Copyright = () => {
//   return (
//     <div className='flex justify-between items-center h-[80px] bg-[#F2EAEA]'>
//    <div className='ms-3'>  <img src={logo} alt="logo" /> </div>
//    <div className="content">
//     <p className='actor-regular font-semibold text-lg'>&copy; 2025 Ghulam Haider. All Rights Reserved.</p>
//    </div>
//    <div className="icons flex justify-between gap-4 me-4">
//     <FiFacebook className="text-black  cursor-pointer border rounded-full p-1  hover:bg-black hover:text-white transition" size={30}/>
//     <FiLinkedin className="text-black cursor-pointer border rounded-full p-1  hover:bg-black hover:text-white transition" size={30}/>
//     <FiTwitter className="text-black cursor-pointer border rounded-full p-1  hover:bg-black hover:text-white transition" size={30}/>
//     <FiGithub className="text-black cursor-pointer border rounded-full p-1  hover:bg-black hover:text-white transition" size={30}/>
//    </div>
   

//       </div>


//   )
// }

// export default Copyright


import React from 'react';
import logo from '../../assets/logo.svg';
import { FiFacebook, FiGitBranch, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Copyright = () => {
  return (
    <div className="bg-[#F2EAEA] py-4 px-6">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        {/* Logo */}
        <div className="mb-4 sm:mb-0">
          <img src={logo} alt="logo" className="w-[150px] sm:w-[180px]" />
        </div>

        {/* Copyright Text */}
        <div className="content text-center sm:text-left">
          <p className="font-semibold text-lg">
            &copy; 2025 Ghulam Haider. All Rights Reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center sm:justify-start gap-4 mt-4 sm:mt-0">
          <FiFacebook className="text-black cursor-pointer border rounded-full p-2 hover:bg-black hover:text-white transition" size={30} />
          <FiLinkedin className="text-black cursor-pointer border rounded-full p-2 hover:bg-black hover:text-white transition" size={30} />
          <FiTwitter className="text-black cursor-pointer border rounded-full p-2 hover:bg-black hover:text-white transition" size={30} />
          <FiGithub className="text-black cursor-pointer border rounded-full p-2 hover:bg-black hover:text-white transition" size={30} />
        </div>
      </div>
    </div>
  );
}

export default Copyright;
