import { useState } from 'react';
import axios from 'axios';
import Final_project from '../../models/projects';
export default function ProjectForm() {
  const [projectData, setProjectData] = useState({
    projectTitle: '',
    description: '',
    academic_year: '',
    demoImage: null,
    projectFile: null,
  });

  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setProject({ ...project, [name]: value });
  // }

  // function handleImageChange(event) {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setProject({
  //       ...project,
  //       image: { data: Buffer.from(reader.result), contentType: file.type },
  //     });
  //   };
  //   reader.readAsArrayBuffer(file);
  // }

  // function handleFileChange(event) {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setProject({
  //       ...project,
  //       file: { data: Buffer.from(reader.result), contentType: file.type },
  //     });
  //   };
  //   reader.readAsArrayBuffer(file);
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   axios
  //     .post('/api/projects', project)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

const handleSubmit=async (event)=>{
  event.preventDefault();

  const formData= new FormData();
  formData.append('projectTitle',projectData.projectTitle);
  formData.append('description',projectData.description);
  formData.append('academic_year',projectData.academic_year);
  formData.append('demoImage',projectData.demoImage);
  formData.append('projectFile',projectData.projectFile);

await fetch('/api/finalProject/project_upload',{
  method:'POST',
  body:formData,
});
};
const handleInputChange=(event)=>{
  const {name, value, files}=event.target;

  setProjectData((prevState)=>({
    ...prevState,
    [name]:files ? files[0]:value,
  }));
};


  return (
    // <div className='bg-[#293645]px-4 p-10 px-24 text-center justify-center ml-36'>
    // <div className=" absolute py-24 space-y-4 bg-gray-50 text-center justify-center ">
    //   <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
    //     <div className='mb-4'>
          
    //     <label htmlFor="title">Title:</label>
    //     </div>
        
    //     <input
    //       type="text"
    //       id="title"
    //       name="title"
    //       value={project.title}
    //       onChange={handleInputChange}
    //       className='w-full border-gray-400 border-2 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500'
    //     />
    //     <br />
    //     <br />

    //     <label htmlFor="description">Description:</label>
    //     <textarea
    //       id="description"
    //       name="description"
    //       value={project.description}
    //       onChange={handleInputChange}
    //       className="w-full border-gray-400 border-2 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
    //     />
    //     <br />
    //     <br />

    //     <label htmlFor="academic_year">Academic Year:</label>
    //     <input
    //       type="text"
    //       id="academic_year"
    //       name="academic_year"
    //       value={project.academic_year}
    //       onChange={handleInputChange}
    //       className="w-full border-gray-400 border-2 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
    //     />
    //     <br />
    //     <br />

    //     <label htmlFor="image">Image:</label>
    //     <input
    //       type="file"
    //       id="image"
    //       name="image"
    //       accept="image/*"
    //       onChange={handleImageChange}
    //     />
    //     <br />
    //     <br />

    //     <label htmlFor="file">File:</label>
    //     <input
    //       type="file"
    //       id="file"
    //       name="file"
    //       accept=".pdf"
    //       onChange={handleFileChange}
    //     />
    //     <br />
    //     <br />

    //     <button type="submit">Submit</button>
    //   </form>
    // </div>
    // </div>
    <div className='text-center items-center justify-center space-y-4 bg-gray-200'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='projectTitle'>Project Title</label>
          <input
            type='text'
            id='projectTitle'
            name='projectTitle'
            value={projectData.projectTitle}
            onChange={handleInputChange}
            className='border border-2-solid py-1 p-3 m-2'
            />   
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <textarea
          id='description'
          name='description'
          value={projectData.description}
          onChange={handleInputChange}
          className='border border-2-solid py-1 p-3 m-2'
          />
        </div>
        <div>
          <label htmlFor='academic_year'>Academic Year</label>
          <input
          type='text'
          id='academic_year'
          name='academic_year'
          value={projectData.academic_year}
          onChange={handleInputChange}
          className='border border-2-solid py-1 p-3 m-2'
          />
        </div>
        <div>
          <label htmlFor='demoImage'>Demo Image</label>
          <input
          type='file'
          id='demoImage'
          name='demoImage'
          accept='image/*'
          onChange={handleInputChange}
          className='border border-2-solid py-1 p-3 m-2'
          />
        </div>
        <div>
          <label htmlFor='projectFile'>File</label>
          <input 
          type='file'
          name='projectFile'
          accept='application/pdf'
          onChange={handleInputChange}
          className='border border-2-solid py-1 p-3 m-2'
          />
        </div>
        <button type='submit'className='bg-blue-500 py-1 p-3 m-2 '>Submit</button>
      </form>
    </div>
  );
}
