// import { useState } from 'react';
// import Link from 'next/link';
// import ChevronDownIcon from '@heroicons/react/solid'
// import clsx from 'clsx';

// type StudentSidebarProps = {
//   isOpen: boolean
// }
// const StudentSidebar = ({isOpen}: StudentSidebarProps) => {
//   const [isDropOpen, setIsDropOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropOpen(!isDropOpen);
//   };

//   return (
//     <div className="flex flex-col h-full w-64 text-black">
//       <div
//         className={clsx(
//           isOpen ? 'w-64' : 'hidden',
//           'relative h-screen  p-5 pt-8',
//           ' duration-300'
//         )}
//       >
//         <div className="flex gap-x-4">
//             <p className='bg-gradient-to-r from-[#264FAD] via-[#264FAD] to-[#029AF8] text-white rounded-lg gap-x-3 text-xl'>SPTS</p>
//           {/* <Image
//             src="/booking.jpg"
//             alt="Africa to silicon valley logo"
//             width={100}
//             height={100}
//             className="cursor-pointer"
//           /> */}
//         </div>
//       <div className="flex-grow overflow-y-auto">
//         <ul className="px-4 py-2 text-gray-500">
//           <li className="my-2">
//             <Link href="/student/dashboard" legacyBehavior>
//               <a className="flex items-center justify-between p-2 rounded-md hover:bg-gray-200">
//                 Dashboard
//               </a>
//             </Link>
//           </li>
//           <li className="my-2">
//             <Link href="/student/formGroup" legacyBehavior>
//               <a className="flex items-center justify-between p-2 rounded-md hover:bg-gray-200">
//                 Form Group
//               </a>
//             </Link>
//           </li>
//           <li className="my-2">
//             <button
//               className="flex items-center justify-between w-full p-2 rounded-md hover:bg-gray-00"
//               onClick={toggleDropdown}
//             > 
//               <span>Course Project</span>
//               {/* <ChevronDownIcon className="h-5 w-5"/> */}
//             </button>
//             {isDropOpen && (
//               <ul className="pl-4">
//                 <li className="my-2">
//                   <Link href="/student/submitTitle" legacyBehavior>
//                     <a className="p-2 rounded-md hover:bg-gray-200">Submit Title</a>
//                   </Link>
//                 </li>
//                 <li className="my-2" >
//                   <Link href="/student/submitProgress" legacyBehavior>
//                     <a className="p-2 rounded-md hover:bg-gray-200">Submit Progress</a>
//                   </Link>
//                 </li>
//                 <li className="my-2">
//                   <Link href="/student/submitProject" legacyBehavior>
//                     <a className="p-2 rounded-md hover:bg-gray-200">Submit Project</a>
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//         </ul>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default StudentSidebar;



import clsx from 'clsx'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FaAdjust, FaDatabase, FaEdit, FaUser } from 'react-icons/fa'
import {CgLogOut} from 'react-icons/cg'
import {BiGroup} from 'react-icons/bi'
import {RxDashboard} from 'react-icons/rx'

type SidebarProps = {
  isOpen: boolean
}

const Sidebar = ({ isOpen }: SidebarProps) => {
    const Menus = [
        { title: 'view groups', src: <FaUser size={15} />, linkto: '/students/formGroup/page' },
        { title: 'create group',src: <FaAdjust size={15}/>, linkto:'/students/submitgroup'},
        { title: 'Submit title', src: <FaAdjust size={15} />, linkto: '/students/submitTitle/page' },
        { title: 'View Progress',src: <FaEdit size={15} />, linkto: '/students/viewProgress'},
        { title: 'Upload project',src:<FaAdjust size={15}/>, linkto: '/students/uploadProject'},
        { title: 'Logout', src: <CgLogOut size={15} />, linkto: '/students/logout' },
        
    ]
    const router = useRouter();
    const pathName = usePathname();
  return (
    <div className="flex bg-white text-secondary-text text-sm shadow-lg justify-start">
      <div
        className={clsx(
          isOpen ? 'w-64' : 'hidden',
          'relative h-screen  p-5 pt-8',
          ' duration-300'
        )}
      >
        <div className="flex gap-x-4">
            <p className='bg-gradient-to-r from-[#264FAD] via-[#264FAD] to-[#029AF8] text-white rounded-lg gap-x-3 text-xl'>SPTS</p>
          {/* <Image
            src="/booking.jpg"
            alt="Africa to silicon valley logo"
            width={100}
            height={100}
            className="cursor-pointer"
          /> */}
        </div>

        <ul>
          <li
            className={clsx(
              ' cursor-pointer my-6',
              'hover:border-l-4 hover:border-white',
              ' hover:bg-light-white'
            )}
          >
            <div
              className={clsx(
                'p-2 rounded ',
                // 'bg-black',
                pathName == '/admin/dashboard' &&
                  'bg-gradient-to-r from-[#264FAD]',
                ' via-[#264FAD] to-[#029AF8]'
              )}
            >
              <Link
                href="/admin/dashboard"
                prefetch={false}
                className={clsx(
                  'flex gap-x-3 items-center',
                  pathName == '/admin/dashboard' && 'text-white', 'no-underline text-gray-500'
                )}
              >
                <RxDashboard size={15} />
                <span
                  className={`${!isOpen && 'hidden'} origin-left duration-200`}
                >
                  Dashboard
                </span>
              </Link>

            </div>
          </li>
          {/* </ul> */}
          <div className="text-[#B9B9C3] text-xs uppercase pl-2">Content</div>
          {/* <ul> */}
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={clsx(
                ' cursor-pointer my-2',
                'hover:border-l-4 hover:border-white',
                ' hover:bg-light-white'
              )}
            >
              <div
                className={clsx(
                  'p-2 rounded ',
                  pathName == Menu.linkto &&
                    'bg-gradient-to-r from-[#264FAD]',
                  ' via-[#264FAD] to-[#029AF8]'
                )}
              >
                <Link
                  href={Menu.linkto ? Menu.linkto : '#'}
                  prefetch={false}
                  className={clsx(
                    'flex gap-x-3 items-center',
                    pathName == Menu.linkto && 'text-white no-underline', 'no-underline'
                  )}
                >
                  {Menu.src}
                  <span
                    className={`${
                      !isOpen && 'hidden'
                    } origin-left duration-200 `}
                  >
                    <div className=' text-gray-500'>
                      {Menu.title}
                    </div>
                  </span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar


