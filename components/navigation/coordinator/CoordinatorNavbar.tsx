import React from 'react'
import clsx from 'clsx'
import { FaBars } from 'react-icons/fa'

interface CoordinatorNavBarProps {
  openSidebar: boolean
  setOpenSidebar: (openSidebar: boolean) => void 
}

const CoordinatorNavbar = ({
  openSidebar,
  setOpenSidebar,

}: CoordinatorNavBarProps) => {
  return (
    <nav className="fixed top-0 w-full bg-white  items-center px-6 py-2 z-10 shadow-lg">
      <div className=" text-sm flex justify-between items-center">
        <FaBars
          className={clsx(
            'absolute-right-2 top-32 w-7 border-2',
            'cursor-pointer rounded-full',
            !openSidebar && 'rotate-180'
          )}
          onClick={() => setOpenSidebar(!openSidebar)}
          size={20}
        />
        <div className={clsx(openSidebar && 'pr-64')}>
          <div>
            {/* <div>{user?.user.firstName}</div>
            <div>{user?.user.lastName}</div>
            <div>{user?.user.userId?.email}</div>

            <div>{user?.user.userId?.role}</div> */}
            <div className="flex flex-col text-sm  text-secondary-text">
              <div className="">
                
                {/* {user?.user.firstName} {user?.user.lastName} */}
              </div>

              <div className="uppercase text-xs text-right">
               
                {/* {user?.user.userId?.role} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default CoordinatorNavbar