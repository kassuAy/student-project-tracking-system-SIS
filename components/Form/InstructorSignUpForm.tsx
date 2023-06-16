import { useState } from 'react';

function InstructorSignUpForm({ onSubmit }) {
  const [username, setUsername] = useState('');
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
    onSubmit({ username, email, password, role: 'instructor' });
  };

  return (
    <form onSubmit={handleSubmit} className='text-center justify-center py-4'>
    
    <div className='mb-4 flex flex-row text-center justify-center'> 
    <div className='px-4'>
    <label htmlFor="username">Username/ Id:
    </label></div>
    <div className='ml-8'>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        className="px-10 border-gray-400 border-2 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
      />
      </div>
    </div> 

    <div className='mb-4 flex flex-row text-center justify-center'>
      
      <div className='px-10'>
      <label htmlFor="email">Email:</label>
      </div>
      <div className='ml-10'>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="px-10 border-gray-400 border-2 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
      />
      </div>
      </div>
      <div className='mb-4 flex flex-row text-center justify-center'>
      
      <div className='px-10'>
        <label htmlFor="password">Password:</label>
      </div>
      <div className='ml-2'>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className="px-10 border-gray-400 border-2 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
      />
      </div>
      </div>
      <div className='mb-4 flex flex-row text-center justify-center'>
      <div className='px-2'>
      <label htmlFor="confirm-password">Confirm Password:</label>
      </div>
      <div className='ml-4'>
      <input
        type="password"
        id="confirm-password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
        className="px-10 border-gray-400 border-2 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
         />
      </div>
      </div>

      <button type="submit" className="bg-blue-700 rounded text-white text-sm px-4 py-2 border-2 border-gray shadow hover:shadow-lg outline-none focus:outline-none">Sign Up</button>
      <button type='button' className="bg-red-700 rounded text-white text-sm px-4 py-2 border-2 border-gray shadow hover:shadow-lg outline-none focus:outline-none">cancel</button>
    </form>
  );
}

export default InstructorSignUpForm;