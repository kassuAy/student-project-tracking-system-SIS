import React, { useState } from 'react';

function SubmitTitle() {
  const [projectTitle, setProjectTitle] = useState([]);

  const handleTitleSubmission = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    setProjectTitle([...projectTitle, { title, description }]);
    form.reset();
  };

  return (
    <div className="bg-[#293645]">
      <main className="flex justify-center" style={{ height: '49.5rem' }}>
        <div
          className="flex justify-center w-full max-w-sm p-4
       border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 bg-white"
          style={{ marginTop: '8rem', height: '30rem' }}
        >
          <form onSubmit={handleTitleSubmission} className="space-y-6">
            <h3 className="font-bold">Submit Your Project Title</h3>
            <div>
              <label
                htmlFor="title"
                className="block mb-2 
           text-sm font-medium text-gray-900 dark:text-white"
              >
                Project Title:
              </label>
              <input
                type="text"
                name="title"
                className="bg-[#EDF2F7] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500dark:placeholder-gray-400"
                required
              />
            </div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Project Description:
            </label>
            <textarea
              name="description"
              className="bg-[#EDF2F7] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400"
            />
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
        <h2>Submitted Projects:</h2>
        <ul>
          {projectTitle.map((project, index) => (
            <li key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default SubmitTitle;
