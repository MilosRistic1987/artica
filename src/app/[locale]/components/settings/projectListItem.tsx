"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import { deleteFBProject } from '@/firebase/actions'
import toast from 'react-hot-toast'

const ProjectListItem = (project: any) => {
    console.log("ProjectListItem", project)
    const dialogRef = useRef<HTMLDialogElement>(null);

    const handleDelete = () => {
        dialogRef.current?.showModal()
    }

    const handleCancel = () => {
        dialogRef.current?.close()
    }

    const confirmDelete = async () => {
        const resp = await deleteFBProject(project?.id)
        if (resp) {
            toast.success("Artica Project Successfuly Deleted");
            setTimeout(() => {
                dialogRef.current?.close()
            }, 2000);
        }
    }


    return (
        <div className='projectListItemWrapp'>
            <dialog ref={dialogRef} className="delete-dialog">
                <div className="dialog-content">
                    <span className="warning-icon">&#9888;</span>
                    <label>Are you sure you want to delete </label>
                    <label className='dialogName'>{project?.name['en']}?</label>
                    <label>All data will be lost forever.</label>
                    <label>This action cannot be undone.</label>
                    <div className="dialog-buttons">
                        <button className="cancel-button" onClick={handleCancel}>Cancel</button>
                        <button className="confirm-button" onClick={confirmDelete} >Confirm</button>
                    </div>
                </div>
            </dialog>

            <div className='imgWrapp'>
                <Image
                    src={project?.src}
                    fill
                    alt="Artica International Project"
                    title='Back to HOME'
                />
            </div>
            <div className='setProjectHeading'>
                <label>{project?.name['en']}</label>
            </div>
            <div className='setBtnWrapp'>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default ProjectListItem