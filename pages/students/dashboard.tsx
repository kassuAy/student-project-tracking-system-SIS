import React from 'react'
import { ReactElement } from 'react'
// import AdminLayout from '../../components/layout/admin/AdminLayout'
// import Students from '../../components/cards/students/Students'
import StudentLayout from '../../components/layout/student/StudentLayout'
import FullScreenLoader from '../../components/loader/FullScreenLoader'
import { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/auth'
import { useRouter } from 'next/router'

function Dashboard() {
  const router = useRouter()
  const {isLoading: authLoading} = useAuth()
  useEffect(() => {
    // if(!authLoading){
    //   router.push(/auth/login)
    // }
  }, [authLoading])

  if(authLoading) {
    return <FullScreenLoader />
  }

  

  return (
    <div className='flex'>
      
        <StudentLayout />
        
        {/* <nav className="">
        <ul className='flex flex-row gap-10 mt-10 bg-[#F7AB0A] '>
        <li>submit title</li>
        <li>submit Project</li>
        <li>view progress</li>
        <li>upload final project</li>
      </ul>
      </nav> */}
     
        <h1 className=' mt-10 text-gray-500'>Welcome to Students Dashboard</h1>
        
    </div>
  )
}

Dashboard.getLayout = function getLayout(page: ReactElement){
    return <StudentLayout>{page}</StudentLayout>
}
export default Dashboard