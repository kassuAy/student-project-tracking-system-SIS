import { useState,useEffect } from "react";
import axios from "axios";

const Fetch_groupname=({onselect})=>{
    const [groups,setGroups]=useState([])
    const [seletedGroup,setSelectedGroup]=useState('')

    useEffect(()=>{
        const fetchGroups=async ()=>{
            const response= await axios.get("http://localhost:3000/api/Group/getGroup_api")

            setGroups(response.data)
        }

        fetchGroups()
    },[])
    const handleGroupChange=(event)=>{
        setSelectedGroup(event.target.value)
        onselect(event.target.value)
    }

    return (
        <div>
          {/* <label htmlFor="student">Select a group:</label> */}
          <select id="student" value={seletedGroup} onChange={handleGroupChange}>
            <option value="">-- Select a group name --</option>
            {groups.map((Group) => (
              <option key={Group.group_name} value={Group.group_name}>
                {Group.group_name}
              </option>
              
            ))}
          </select>
        </div>
      )
    }
    
    export default Fetch_groupname
