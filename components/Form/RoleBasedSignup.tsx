import { useState } from 'react';
import InstructorSignUpForm from './InstructorSignUpForm';
import StudentSignUpForm from './StudentSignUpForm';

function RoleBasedSignup() {
  const [selectedRole, setSelectedRole] = useState('instructor');

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    // Perform validation and submission of form data
  };

  return (
    <div className='bg-gray-200 text-center justify-center py-4'>
      <h1 className='font-serif text-blue-500 '>Welcome to SPTS ,<br/>
        Register here! </h1>
        <br/>
      <label htmlFor="role">Select your role:</label>
      <select id="role" value={selectedRole} onChange={handleRoleChange}>
        <option value="">select role ...</option>
        <option value="instructor">Instructor</option>
        <option value="student">Student</option>
      </select>
      {selectedRole === 'instructor' ? (
       <InstructorSignUpForm onSubmit={handleSubmit} />
      ) : (
        <StudentSignUpForm onSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default RoleBasedSignup;