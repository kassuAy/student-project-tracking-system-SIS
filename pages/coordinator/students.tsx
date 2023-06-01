import React from 'react'
import { ReactElement } from 'react'
import AdminLayout from '../../components/layout/admin/AdminLayout'
import {useState} from 'react'
import Head from 'next/head'
import { PrismaClient, Student, Prisma } from '@prisma/client'
import { CreateStudentModal } from '../../components/modals/CreateStudentModal'
import StudentTable from '../../components/studentTable/StudentTable'
import { GetServerSideProps } from "next"

const prisma = new PrismaClient();
  
export const getServerSideProps:GetServerSideProps= async() => {
    const students: Student[] = await prisma.student.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        studentId: true
      }
    });
    return {
        props: {
          initialStudents: students
        }
    };
}

 async function saveStudent(student: Prisma.StudentCreateInput){
  const response = await fetch('/api/admin/students.ts', {
    method: 'POST',
    body: JSON.stringify(student)
  });

  if(!response.ok){
    throw new Error(response.statusText)
  }

  return await response.json();
}

export default function Students ({initialStudents})  {
  const [showModal, setShowModal] = useState(false)
  const [students, setStudents] = useState<Student[]>(initialStudents)
 
  return (
    <div className='flex'>
      <AdminLayout/>
      <div className='w-full'>
        <div className="flex justify-end mb-10 mt-12">
          <button
            className="bg-primary text-white text-sm px-4 py-2 rounded shadow hover:shadow-lg "
            type="button"
            onClick={() => setShowModal(true)}
          >
            + Add Student
          </button>
        </div>
        {showModal ? (
          <CreateStudentModal 
          students={students}
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
                      First Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Last Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Student ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
              </thead>             
          </table>        
          {students.map((student: Student, i: number) =>(
            <div key={i}>
              <StudentTable student={student} />
            </div>
          ))}
         
        </div>
      </div>
      
    </div>
  )
}


// students.getLayout = function getLayout(page: ReactElement) {
//     return <AdminLayout>{page}</AdminLayout>
// }
// export default Students