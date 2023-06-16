import React from 'react';
import SubmitTitle from '../../../components/Form/TitleSubmitForm';
// import ProjectForm from '../../../components/Form/fetchTitle';
type Props = {};

function page({}: Props) {
  return (
    <div>
      
      <SubmitTitle/>
      
      {/* <ProjectForm/> */}

    </div>
  );
}

export default page;

// import Fetch_groupname from "../../../components/Form/fetchGroup"

// const GroupPage = () => {
//   const handleGroupSelect = (group_name) => {
//     console.log(`Selected group name: ${group_name}`)
//     // Do something with the selectedgroup name, such as fetching the group data
//   }

//   return (
//     <div>
//       <Fetch_groupname onselect={handleGroupSelect} />
//     </div>
//   )
// }

// export default GroupPage
