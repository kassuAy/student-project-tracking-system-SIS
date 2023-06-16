import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import Button from '../Button';
import { InputErrors } from '../../types/error';
import { useRouter } from 'next/router';
import { ErrorText } from './InputFeildElements';
import { BiEdit, BiTrashAlt } from 'react-icons/bi';
import { useEffect } from 'react';
const SubmitTitle = () => {
  const [project_title, setTitle] = useState({
    groupName: '',
    projects: [{ projectTitle: '', description: '' }],
  });
  const [validationErrors, setValidationErrors] = useState<InputErrors[]>([]);
  const [submitError, setSubmitError] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const validateData = (): boolean => {
    const err = [];
    if (project_title.groupName?.length === 0) {
      err.push('field is required');
    } else if (project_title.projects?.length === 0) {
      err.push('please fill all');
    }

    setValidationErrors(err);

    if (err.length > 0) {
      return false;
    } else {
      return true;
    }
  };
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index
  ) => {
    // We get property name from event.target.name and set the value from onChange in it
    // So name in our input component should be same as the property in data state

    const { name, value } = event.target;
    const list = [...project_title.projects];
    list[index][name] = value;
    setTitle({
      ...project_title,
      projects: list,
      [event.target.name]: event.target.value,
    });
  };

  function handleAddInput() {
    setTitle({
      ...project_title,
      projects: [
        ...project_title.projects,
        { projectTitle: '', description: '' },
      ],
    });
  }

  function handleRemoveInput(index) {
    const list = [...project_title.projects];
    list.splice(index, 1);
    setTitle({ ...project_title, projects: list });
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = validateData();
    if (isValid) {
      // add group to a database

      try {
        setLoading(true);
        const apiRes = await axios.post(
          '/api/studentApi/title_api',
          project_title
        );
        // .catch((error) => {
        //   console.error(error);
        // });
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          const errorMsg = error.response?.data?.error;
          setSubmitError(errorMsg);
        }
      }

      setLoading(false);
    }
  };

  //
  const [projects, setProjects] = useState([]);
  const [fetchGroup, setFetchedGroup] = useState([]);
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

  //fetch the group name from the database

  // useEffect(() => {
  //   fetch('/api/fetchApis/getGroup')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setFetchedGroup(data.fetchGroup);
  //     })
  //     .catch((error) => {
  //       console.log('error fetching group name');
  //     });
  // }, []);

  return (
    <div>
      {/* className=" justify-center py-4 text-center justify-center" */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <form onSubmit={handleSubmit}>
          <div className="p-8 bg-gray rounded-lg shadow-lg">
            <h3 className="text-blue-500 text-3xl font-bold">
              {' '}
              Submit Your Project Title
            </h3>
            <div className="flex flex-row py-4  ">
              <label htmlFor="groupName" className="font-bold px-4 ">
                Group Name:
              </label>
              <input
                className="border border-2-solid rounded"
                type="text"
                id="groupName"
                name="groupName"
                value={project_title.groupName}
                onChange={(event) =>
                  setTitle({ ...project_title, groupName: event.target.value })
                }
              />
              {/* {fetchGroup.map((groups) => (
            <select key={groups._id}>
              <option>select your group name</option>

              <option>{groups.group_name}</option>
            </select>
          ))} */}
            </div>

            <label
              htmlFor="projects"
              className="ml-10 font-bold text-center justify-center"
            >
              project titles:
            </label>
            <br />
            {project_title.projects.map((project, index) => (
              <div key={index}>
                <div className="py-4 flex flex-row">
                  <label className=" font-bold px-6"> Title:</label>
                  <input
                    className=" border border-2-solid ml-10 rounded"
                    type="text"
                    name="projectTitle"
                    value={project.projectTitle}
                    onChange={(event) => handleInputChange(event, index)}
                  />
                </div>
                <div className="flex flex-row ">
                  <label className="font-bold px-4 rounded h-[50px]">
                    Descriptions:
                  </label>
                  <input
                    className="border border-2-solid "
                    type="text"
                    name="description"
                    value={project.description}
                    onChange={(event) => handleInputChange(event, index)}
                  />

                  <button
                    className="bg-red-500 rounded ml-4"
                    type="button"
                    onClick={() => handleRemoveInput(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <button
              className="bg-blue-500 mt-4 rounded h-full text-center ml-10"
              type="button"
              onClick={handleAddInput}
            >
              Add title
            </button>
            <br />
            <br />
            <Button title={'submit'} type="submit" disabled={loading} />

            {submitError && <ErrorText>{submitError}</ErrorText>}
            {/* <button type="submit" className='bg-blue-500 rounded'>Submit</button> */}
          </div>
        </form>
      </div>
      <div className="items-center justify-center space-y-4">
        <div>
          <p className="text-gray-500 text-xl ">All Students</p>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
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

          <tbody className="bg-gray-200">
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
                  <td className="py-4">
                    <a
                      href="#"
                      className="font-medium text-white bg-blue-500 py-1 px-2 rounded hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                  <td px-16 py-2>
                    <button className="cursor">
                      <span className="bg-green-500 text-white px-2 py-1 rounded ml-2">
                        Active
                      </span>
                    </button>
                  </td>
                </td>
                <td px-16 py-2 justify-around gap-2>
                  <button className="cursor">
                    <BiEdit size={25} color={'rgb(34,197,94)'}></BiEdit>
                  </button>
                  <button className="cursor">
                    <BiTrashAlt size={25} color={'rgb(244,63,94)'}></BiTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmitTitle;
