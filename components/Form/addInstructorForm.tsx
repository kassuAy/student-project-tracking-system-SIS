import React, { useState } from 'react'

type Props = {}

const AddInstructorForm=()=> {
    const [instructor_id, setInstructorId]=useState('');
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');


    return (
    <div>
    <div className="mb-4">
    <label
      htmlFor="title"
      className="block font-medium text-gray-700 mb-2"
    >
      Instructor Id
    </label>
    <input
      type="text"
      name="title"
      id="title"
      value={instructor_id}
      onChange={(e) => setInstructorId(e.target.value)}
      placeholder="Enter your id"
      className="w-full border-gray-400 border-2 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
    />
    </div>
    <div className="mb-4">
    <label
      htmlFor="firstName"
      className="block font-medium text-gray-700 mb-2"
    >
      First Name :
    </label>
    <input
      type="text"
      name="firstName"
      id="firstName"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      placeholder="Enter title"
      className="w-full border-gray-400 border-2 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
    />
  </div>

  <div className="mb-4">
    <label
      htmlFor="lastNmae"
      className="block font-medium text-gray-700 mb-2"
    >
     Last Name :
    </label>
    <input
      type="text"
      name="lastName"
      id="title"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      placeholder="Enter title"
      className="w-full border-gray-400 border-2 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
    />
  </div>

  <div className="mb-4">
    <label
      htmlFor="username"
      className="block font-medium text-gray-700 mb-2"
    >
      user Name :
    </label>
    <input
      type="text"
      name="title"
      id="title"
      value={instructor_id}
      onChange={(e) => setInstructorId(e.target.value)}
      placeholder="Enter title"
      className="w-full border-gray-400 border-2 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
    />
    </div>
    </div>
  )
}

export default AddInstructorForm