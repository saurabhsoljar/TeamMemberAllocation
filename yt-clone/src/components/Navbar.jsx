import React from 'react'
import Avatar from 'react-avatar';
import { AiOutlineMenu } from "react-icons/ai";
import youtub from "../../public/youtub.jpg";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddFill } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import profile from "../../public/profile.png"

const Navbar = () => {
  return (
    <div className='flex justify-between px-6 py-2'>
      <div className='flex border items-center space-x-4   '>
          <AiOutlineMenu className='tert-xl cursor-pointer'/>
          <img src={youtub} alt="" className='w-28 cursor-pointer' />
      </div>

      <div className=' flex w-[35%] items-center '>
        <div className='w-[100%] px-3 py-2 border rounded-l-full'>
          <input type="text" placeholder='Search' className='outline-none' /></div>
        <button className='px-4 py-2 border bg-gray-100 rounded-r-full'>
          <CiSearch size={"24px"}/></button>
        <IoMdMic size={"42px"} className='ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200'/>
      </div>

      <div className='flex space-x-5 items-center border'>
      <RiVideoAddFill className='text-2xl'/>
      <AiOutlineBell className='text-2xl'/>
      <Avatar src={profile} size='32' round={true} />

      </div>
    </div>
  )
}

export default Navbar