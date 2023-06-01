import React from 'react'
import GroupCard from './Group'

function GroupContainer() {
    const Groups = [
        {name: 'Group 1', _id: '1'},
        {name: 'Group 2', _id: '2'}
    ]
  return (
    <div>
        {
           Groups == undefined || Groups.length === 0 ? (
            <div className='flex justify-evenly'>
                <div className='font-semibold text-xl'>No Groups</div>
            </div>
           ) : (
            <>
                <h1 className='text-xl text-gray-700'>All Groups</h1>
                <div>
                    {Groups.map((group) => (
                        <GroupCard key={group._id} {...group} />
                    ))}
                </div>
            </>
           ) 
        }
    </div>
  )
}

export default GroupContainer