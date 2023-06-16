import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import clsx from 'clsx'
import navBarData from './NavbarData'

function NavBar() {
    const [toggle, setToggle] = useState(false)

    const showNav = () => {
      setToggle(!toggle)
    }
  
    const router = useRouter()
  
    return (
      <nav className="fixed top-0 w-full bg-white  items-center flex px-6 py-3 z-50">
        <div className=" text-sm flex justify-between items-center w-full flex-wrap lg:flex-nowrap">
          {/* <Image
            src="/spms-logo.png"
            alt="School Program Management System logo"
            width={70}
            height={70}
            className="cursor-pointer rounded-full"
          /> */}
          <h1 className=' italic text-gray-200 text-sm bg-gradient-to-r from-[#264FAD] via-[#264FAD] to-[#029AF8] rounded-lg gap-x-3 justify-center'>SPTS</h1>
          <button
            className="flex justify-end lg:hidden ring-1 ring-primary rounded"
            onClick={showNav}
          >
            <i className="fas fa-bars text-primary w-9 h-9 flex justify-center items-center"></i>
          </button>
          <ul
            className={clsx(
              toggle ? ' flex' : ' hidden',
              'flex-col justify-center items-center',
              'w-full first:mt-2 lg:flex-row lg:w-auto',
              'lg:space-x-10 lg:flex'
            )}
          >
            {navBarData.map((link, index) => {
              return (
                <li key={index} className={clsx(link.cname)}>
                  <Link
                    href={link.href}
                    prefetch={false}
                    // onClick={showNav}
                    className={clsx(
                      router.pathname == link.href && 'text-primary', 'text-black no-underline'
                    )}
                  >
                    {link.title}
                    {router.pathname == link.href && (
                      <div className="flex justify-center">
                        <div className="border-primary w-4 border-b-4 rounded-[1.5px]"></div>
                      </div>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
  
          <div
            className={clsx(
              toggle ? ' flex' : ' hidden',
              ' justify-center items-center',
              'w-full first:mt-2 lg:flex-row',
              'lg:w-auto lg:flex'
            )}
          >
            {/* <Link
              href="Login"
              className=" w-24 p-2 px-1 rounded-lg justify-center  mt-4 lg-auto lg:mx-0 lg:flex lg:mt-0 text-black"
            >
              Login
            </Link> */}
            <button className="bg-primary w-24 p-2 px-1 text-white justify-center  rounded-lg lg-auto sm:mx-0 lg:flex sm:mt-0  ">
                <Link
                href="Login"
                className="text-white no-underline"
                >
                Login
                </Link>
            </button>
          </div>
        </div>
      </nav>
    )
}

export default NavBar