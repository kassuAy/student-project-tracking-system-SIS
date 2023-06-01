'use client'
import React from 'react'
import { itemData } from './itemData'
import Link from 'next/link'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export const Items = () => {
  const router = useRouter()
  return (
    <div>
         
         <ul
            // className={clsx(
            //   toggle ? ' flex' : ' hidden',
            //   'flex-col justify-center items-center',
            //   'w-full first:mt-2 lg:flex-row lg:w-auto',
            //   'lg:space-x-10 lg:flex'
            // )}
            className='grid grid-cols-6'
          >
            
            {itemData.map((link, index) => {
              return (
                <li key={index} className={clsx(link.cname)}>
                  <Link
                    href={link.href}
                    prefetch={false}
                    // onClick={showNav}
                    className={clsx(
                      // router.pathname == link.href && 'text-primary', 'text-black no-underline',
                    )}
                  >
                    {/* {link.image} */}
                    <Image
                    src={link.image}
                    alt='image'
                    width='300'
                    height='300'
                    />

                   
                    <div className='font-semibold text-xl '>
                     {link.title}
                    </div>
                    <div className='text-sm text-gray-500'>
                      {link.date}
                    </div>
                    <div>
                      <Link href={link.href}>View Details</Link>
                    </div>
                    {/* {router.pathname == link.href && (
                      <div className="flex justify-center">
                        <div className="border-primary w-4 border-b-4 rounded-[1.5px]"></div>
                      </div>
                    )} */}
                  </Link>
                </li>
              )
            })}
          </ul>
    </div>
  )
}

export default Items