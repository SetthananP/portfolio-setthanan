import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div id='Contact' className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center'>
      <div>
        <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
      </div>
      <ul className='text-sm md:text-xl'>
        <li className='flex gap-1 items-center'>
          <MdOutlineEmail size={20} />
          <a href="mailto:setthanan.p@gmail.com" className="hover:underline">setthanan.p@gmail.com</a>
        </li>
        <li className='flex gap-1 items-center'>
          <CiLinkedin size={20} />
          <a href="https://www.linkedin.com/in/setthanan" target="_blank" rel="noopener noreferrer" className="hover:underline">
            linkedin.com/in/setthanan
          </a>
        </li>
        <li className='flex gap-1 items-center'>
          <FaGithub size={20} />
          <a href="https://github.com/SetthananP" target="_blank" rel="noopener noreferrer" className="hover:underline">
            github.com/SetthananP
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
