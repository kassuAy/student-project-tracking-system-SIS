import { useState,useRef } from 'react';

function StudentSignUpForm({ onSubmit }) {
  const [username, setUsername] = useState('');
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform validation of form data
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Submit form data to instructor collection in MongoDB
    onSubmit({ username, email, password, role: 'student' });
  };

  const usernameRef = useRef(null);
  const firstNameRef=useRef(null);
  const lastNameRef=useRef(null);
  const emailRef = useRef(null);
  const passwordRef=useRef(null);
  const confirmPasswordRf=useRef(null);

  const handleReset = () => {
    setUsername('');
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    usernameRef.current.value = '';
    firstNameRef.current.value='';
    lastNameRef.current.value='';
    emailRef.current.value = '';
    passwordRef.current.value='';
    confirmPasswordRf.current.value='';
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="text-center justify-center py-4"
    >
      <div className="mb-4 flex flex-row text-center justify-center">
        <div className='px-4'>
          <label htmlFor="username">studentId</label>
        </div>
        <div className="ml-2">
          <input
            type="text"
            id="username"
            ref={usernameRef}
            placeholder="student ID"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="px-10 border-gray-400 border-2 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <div className="mb-4 flex flex-row text-center justify-center">
        <div className='px-4'>
          <label htmlFor="username">first Name</label>
        </div>
        <div className="ml-2">
          <input
            type="text"
            id="firstName"
            ref={firstNameRef}
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            className="px-10 border-gray-400 border-2 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="mb-4 flex flex-row text-center justify-center">
        <div className='px-4'>
          <label htmlFor="username">Last Name</label>
        </div>
        <div className="ml-2">
          <input
            type="text"
            id="lastName"
            ref={lastNameRef}
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            className="px-10 border-gray-400 border-2 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="mb-4 flex flex-row text-center justify-center">
        <div className='px-4'>
          <label htmlFor="email">Email:</label>
        </div>
        <div className="ml-8">
          <input
            type="email"
            id="email"
            ref={emailRef}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="px-10 border-gray-400 border-2 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <div className="mb-4 flex flex-row text-center justify-center">
        <div className='px-3'>
          <label htmlFor="password">Password:</label>
        </div>
        <div className="ml-2">
          <input
            type="password"
            ref={passwordRef}
            
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="px-10 border-gray-400 border-2 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="mb-4 flex flex-row text-center justify-center">
        <div className=''>
          <label htmlFor="confirm-password">Confirm Password:</label>
        </div>
        <div className="">
          <input
            type="password"
            ref={confirmPasswordRf}
            id="confirm-password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            className="px-10 mr-7 border-gray-400 border-2 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
    
      <button type="submit" className="bg-blue-700 rounded text-white text-sm px-4 py-2 border-2 border-gray shadow hover:shadow-lg outline-none focus:outline-none">Register</button>
      <button type='button' className="bg-red-700 rounded text-white text-sm px-4 py-2 border-2 border-gray shadow hover:shadow-lg outline-none focus:outline-none"
      onClick={handleReset}
      >cancel</button>
    </form>
  );
}

export default StudentSignUpForm;
