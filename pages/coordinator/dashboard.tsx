import React from 'react'
import { ReactElement } from 'react'
import CoordinatorLayout from '../../components/layout/coordinator/CoordinatorLayout'
// import Students from '../../components/cards/students/Students'
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
        <CoordinatorLayout />
        <h1 className='mt-10 text-gray-500'>Welcome to Coordinator Dashboard</h1>
        
    </div>
  )
}

Dashboard.getLayout = function getLayout(page: ReactElement){
    return <CoordinatorLayout>{page}</CoordinatorLayout>
}
export default Dashboard