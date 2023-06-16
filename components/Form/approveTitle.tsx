import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { connectToMongoDB } from '../../lib/mongodb';
import { BiEdit, BiTrashAlt } from 'react-icons/bi';
type Props = {};

function ApproveTitle({}: Props) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    //Fetch title api
    fetch('/api/fetchApis/getTitle')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.projects);
      })
      .catch((error) => {
        console.log('Error fetching project titles:', error);
      });
  }, []);

  const handleApproveClick = async (projectTitle) => {
    const response = await fetch('/api/updateApprovalStatus', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        projectTitle,
        newStatus: 'approved',
      }),
    });

    if (response.ok) {
      // TODO: Update the status of the project in state to reflect the new approval status.
    } else {
      // TODO: Display an error message to the user.
    }
  };
  return (
    <div>
      <div className="items-center justify-center space-y-4 ">
        <h2 className="text-center text-2xl"> List of submitted titles</h2>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs  text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr className="w-full">
              <th scope="col" className="px-6 py-3">
                Group Name
              </th>

              <th scope="col" className="px-6 py-3">
                Project title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="">
            {projects.map((project) => (
              <tr key={project._id} className="text-gray-700 border-b">
                <td className="py-4">{project.groupName}</td>
                <td>
                  <ul>
                    {project.projects.map((title) => (
                      <li key={title._id}>
                        <p>Title: {title.projectTitle}</p>
                      </li>
                    ))}
                  </ul>
                </td>
                <td>
                  <ul>
                    {project.projects.map((title) => (
                      <li key={title._id}>
                        <p>Description: {title.description}</p>
                      </li>
                    ))}
                  </ul>
                </td>

                <td>
                  <td px-16 py-2>
                    <button className="cursor">
                      <span className="bg-green-500 text-white px-2 py-1 rounded ml-2">
                        Approve
                      </span>
                    </button>
                  </td>

                  <td px-16 py-2>
                    <button className="cursor">
                      <span className="bg-red-500 text-white px-2 py-1 rounded ml-2">
                        Reject
                      </span>
                    </button>
                  </td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ApproveTitle;
