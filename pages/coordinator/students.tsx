//coordinator/students

'use client'
import React from 'react'
import { ReactElement } from 'react'
import CoordinatorLayout from '../../components/layout/coordinator/CoordinatorLayout'
import {useState} from 'react'
import Head from 'next/head'
import { CreateStudentModal } from '../../components/modals/createStudentModal'
// import StudentTable from '../../components/studentTable/StudentTable'
import { GetServerSideProps, NextPage } from "next"
import { connectToMongoDB } from '../../lib/mongodb'
import User from '../../models/user'
import {useEffect} from 'react'
// interface Student{
//   fullName: string
//   email: string
//   username: string
//   password: string
// }
// interface Props{
//   students: Student[]
// }

const Students = () => {
  const [showModal, setShowModal] = useState(false)
  const [students, setAllStudents] = useState([]);
  useEffect(() => {
    fetchStudentsByRole('student');
  }, []);
  
  const fetchStudentsByRole = async (role) => {
    const response = await fetch(`/api/students?role=${role}`);
    const data = await response.json();
    const studentsByRole = data.filter((users) => users.role === role);
  
    setAllStudents(studentsByRole);
  };


  return (
    <div className='flex'>
      <CoordinatorLayout/>
      <div className='w-full'>
        <div className="flex justify-end mb-10 mt-12">
          <button
            className="bg-blue-500 text-white text-sm px-4 py-2 rounded shadow hover:shadow-lg "
            type="button"
            onClick={() => setShowModal(true)}
          >
            + Add Student
          </button>
        </div>
        {showModal ? (
          <CreateStudentModal
          setShowModal={setShowModal} 
          showModal={showModal}
          // role="STUDENT"
          
          />
        ) : null}

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div>
            <p className='text-gray-500 text-xl '>All Students</p>
          </div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                      Full Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Student ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Password
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
              </thead>             
          </table>

          {/* {students.map((student: Student, i: number) =>(
            <div key={i}>
              <StudentTable student={student} />
            </div>
          ))} */}
         
        </div>
      </div>
      
    </div>
  )
}

export default Students;