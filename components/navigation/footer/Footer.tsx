import clsx from 'clsx'
import Image from 'next/image'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
// import Rafiki from '../../public/rafiki.png';
// TODO: fix ui bug on the footer icons overlap on small screen size
export interface FooterProps {
  text?: string
  contact?: string
  home?: string
  projects?: string
  aboutUs?: string
  address?: string
  groups?: string
}
export const Footer = ({
  text = 'Student Project Tracking System',
  contact = 'sis@aau.et',
  home = 'Home',
  projects = 'Projects',
  aboutUs = 'About Us',
  groups = 'Groups',
  address = '6 kilo FBE, Addis Ababa University, Addis Ababa, Ethiopia',
  
}: FooterProps) => {
  return (
    <>
      <div className={clsx('grid grid-cols-5 gap-3 mx-auto')}>
        <ul className="hidden sm:block sm:col-span-1 mt-5">
          <Image
            className="hidden sm:block"
            src="/sos-logo.png"
            alt="/"
            width="200"
            height="200"
          />
        </ul>
        <ul className="col-span-1 sm:col-span-1 font-bold text-gray-900 items-center">
          <p className={clsx('mt-5 text-blue-700 text-3xl ')}>{text}</p>
          {/* <button
            type="button"
            className={clsx(
              'bg-blue-700 px-5 py-2 mb-5 text-white rounded md:px-10 md:py-3'
            )}
          >
            {text}
          </button> */}
        </ul>
        <ul className="col-span-1 text-gray-500">
          <p className={clsx('font-semibold text-gray-900 text-sm')}>
            Links
          </p>
          <li className={clsx('text-sm pb-2 cursor-pointer')}>{home}</li>
          <li className={clsx('text-sm pb-2 cursor-pointer')}>
            {projects}
          </li>
          <li className={clsx('text-sm pb-2 cursor-pointer')}>{groups}</li>
          <li className={clsx('text-sm cursor-pointer')}>{aboutUs}</li>          
        </ul>
        {/* <ul className="col-span-5 sm:col-span-1 text-gray-500">
          <p className={clsx('font-semibold text-gray-900 text-sm pb-5 ')}>
            Teams
          </p>
          <li className={clsx('text-sm pb-4 cursor-pointer')}>
            {boardMembers}
          </li>
          <li className={clsx('text-sm pb-4 cursor-pointer')}>{mentors}</li>
          <li className={clsx('text-sm pb-4 cursor-pointer')}>{excutives}</li>
          <li className={clsx('text-sm pb-4 cursor-pointer')}>{staffs}</li>
        </ul> */}
        <ul className="col-span-5 sm:col-span-1 text-gray-500 pb-5">
          <p className={clsx('font-semibold text-gray-900 text-sm ')}>
            Our Addresses
          </p>
          <li className={clsx('text-sm cursor-pointer')}>{address}</li>
          {/* <li className={clsx('text-sm pb-4 cursor-pointer')}>{newBlog}</li> */}
        </ul>
        <ul className="col-span-5 sm:col-span-1 text-gray-500 pb-5">
          <p className={clsx('font-semibold text-gray-900 text-sm ')}>
            Contact Us
          </p>
          <li className={clsx('text-sm cursor-pointer')}>{contact}</li>
          {/* <li className={clsx('text-sm pb-4 cursor-pointer')}>{newBlog}</li> */}
        </ul>
        
      </div>
      <hr className={clsx('')} />
      <div className={clsx('sm:w-full sm:flex justify-between text-gray-500 ')}>
        <div>
          <p className={clsx('text-sm sm:ml-5')}>
            {' '}
            2023 School of Information Science, Inc. All rights reserved{' '}
          </p>
        </div>
        <div className='sm:mr-16'>
          <a href="">
            <FaTwitter
            className={clsx('inline-block text-xl cursor-pointer mx-2')}
            />
          </a>
          <a href="">
            <FaFacebook
            className={clsx('inline-block text-xl cursor-pointer mx-2')}
          />
          </a>
          <a href="">
            <FaYoutube
            className={clsx('inline-block text-xl cursor-pointer mx-2')}
          />
          </a>
          <a href="">
            <FaLinkedin
            className={clsx('inline-block text-xl cursor-pointer mx-2')}
          />
          </a>
          <a href="">
            <FaInstagram
            className={clsx('inline-block text-xl cursor-pointer mx-2')}
          />
          </a>
          
          
        </div>
      </div>
    </>
  )
}
