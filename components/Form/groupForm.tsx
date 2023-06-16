import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import Button from '../Button';
import { InputErrors } from '../../types/error';
import { useRouter } from 'next/router';
import { ErrorText } from './InputFeildElements';
import { FaLess } from 'react-icons/fa';

const GroupForm = () => {
  const [group, setGroup] = useState({
    group_name: '',
    students: [{ name: '', student_id: '' }],
    batch: '',
  });
  const [validationErrors, setValidationErrors] = useState<InputErrors[]>([]);
  const [submitError, setSubmitError] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validateData = (): boolean => {
    const err = [];
    if (group.group_name?.length === 0) {
      err.push('field is required');
    } else if (group.students?.length === 0) {
      err.push('please fill all');
    } else if (group.batch?.length === 0) {
      err.push('enter the year');
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
    const list = [...group.students];
    list[index][name] = value;
    setGroup({
      ...group,
      students: list,
      [event.target.name]: event.target.value,
    });
  };

  function handleAddInput() {
    setGroup({
      ...group,
      students: [...group.students, { name: '', student_id: '' }],
    });
  }

  function handleRemoveInput(index) {
    const list = [...group.students];
    list.splice(index, 1);
    setGroup({ ...group, students: list });
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = validateData();
    if (isValid) {
      // add group to a database

      try {
        setLoading(true);
        const apiRes = await axios.post('/api/group_api', group);
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

  return (
    <div className="absolute p-24 items-center  justify-center ">
      <form
        onSubmit={handleSubmit}
        className="relative px-12 pt-5  items-center justify-center px-10 ml-4 shadow-md"
      >
        <label htmlFor="group_name" className="font-bold">
          Group Name:
        </label>
        <input
          className="border border-2-solid w-full"
          type="text"
          id="group_name"
          name="group_name"
          value={group.group_name}
          onChange={(event) =>
            setGroup({ ...group, group_name: event.target.value })
          }
        />
        <br />
        <br />
        <label htmlFor="batch" className="font-bold">
          Year
        </label>
        <input
          className="border border-2-solid w-full"
          type="text"
          id="batch"
          name="batch"
          required
          value={group.batch}
          onChange={(event) =>
            setGroup({ ...group, batch: event.target.value })
          }
        />
        <br />
        <br />

        <label className="font-bold">Students</label>
        <br />
        {group.students.map((student, index) => (
          <div key={index}>
            <div className="pt-5">
              <label> Name:</label>
              <input
                className=" border border-2-solid w-full"
                type="text"
                name="name"
                value={student.name}
                required
                onChange={(event) => handleInputChange(event, index)}
              />
            </div>
            <div>
              <label>ID:</label>
              <input
                className="border border-2-solid w-full"
                type="text"
                name="student_id"
                required
                value={student.student_id}
                onChange={(event) => handleInputChange(event, index)}
              />

              <button
                className="bg-red-400 rounded mt-2 px-9 py-2 text-white"
                type="button"
                onClick={() => handleRemoveInput(index)}
              >
                <p className="px-5"></p>Remove
              </button>
            </div>
          </div>
        ))}
        <button
          className="bg-blue-500 rounded h-full mt-3"
          type="button"
          onClick={handleAddInput}
        >
          <p className="px-5 p-2 text-white">Add Student</p>
        </button>
        <br />
        <br />
        <div className="pb-5">
          <Button title={'Submit'} type="submit" disabled={loading} />
        </div>

        {submitError && <ErrorText>{submitError}</ErrorText>}
        {/* <button type="submit" className='bg-blue-500 rounded'>Submit</button> */}
      </form>
    </div>
  );
};

export default GroupForm;
