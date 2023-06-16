// import React, { useEffect, useState } from 'react';
// // import fetchData from '../lib/fetchData';
// import fetchData from '../../pages/api/fetchApis/getGroup';
// import ProjectList from '../../models/TitleModel';
// import { BiEdit,BiTrashAlt } from 'react-icons/bi';


// export default function ProjectForm() {
//   const [projects, setProjects] = useState([]);



// useEffect (()=>{
//     //Fetch title api
//     fetch("/api/fetchApis/getTitle")
//     .then((response)=>response.json())
//     .then((data)=>{
//         setProjects(data.projects);
//     })
//     .catch((error)=>{
//         console.log("Error fetching project titles:",error);
//     });
// }, []);
// return(
//     <div className="py-4 text-center justify-center">
//         <h2> list of submitted titles</h2>
//         <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                 <tr>
//                     <th scope="col" className="px-6 py-3">
//                      Group Name
//                     </th>
                    
//                     <th scope="col" className="px-6 py-3">
//                        Project title
//                     </th>
//                     <th scope="col" className="px-6 py-3">
//                         Description
//                     </th>
//                     <th scope="col" className="px-6 py-3">
//                         Action
//                     </th>
//                 </tr>
//               </thead>

//           <tbody className="bg-gray-200">
//             {projects.map((project)=>(
//                 <tr key={project._id} className="text-gray-700 border-b">
//                     <td className='py-4'>
//                         {project.groupName}
//                     </td>
//                     <td className='py-4'>
//                         {project.projects.projectTitle}
//                     </td>
//                     <td className='py-4'>
//                         {project.projects.description}
//                     </td>
//                     <td><td className='py-4'>
//                             <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                         </td></td>
//                 </tr>
//             ))}

//           </tbody>
//         </table>
//       </div>
// )

// }
