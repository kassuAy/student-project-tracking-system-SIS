import React from 'react'

interface UpdateGroupModalProps {
    showModal: boolean
    setShowModal: (showModal: boolean) => void
    _id?: string
    name: string
}

function UpdateGroupModal({
    showModal,
    setShowModal,
    _id,
    name
}: UpdateGroupModalProps) {
  return (
    <div>UpdateGroupModal</div>
  )
}

export default UpdateGroupModal