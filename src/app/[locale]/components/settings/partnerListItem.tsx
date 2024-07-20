"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import { deleteFBPartner, } from '@/firebase/actions'
import toast from 'react-hot-toast'
import { TClientsAndPartners } from '@/types/types'
import { extractDomainMiddlePart } from '@/helpers/utils'

const PartnerListItem = (partner: TClientsAndPartners) => {
    console.log("PartnerListItem", partner)
    const dialogRef = useRef<HTMLDialogElement>(null);
    const partnerName = extractDomainMiddlePart(partner.link)

    const handleDelete = () => {
        dialogRef.current?.showModal()
    }

    const handleCancel = () => {
        dialogRef.current?.close()
    }

    const confirmDelete = async () => {
        const resp = await deleteFBPartner(partner.id)
        if (resp) {
            toast.success("Artica Partner Successfuly Deleted");
            setTimeout(() => {
                dialogRef.current?.close()
            }, 2000);
        }
    }


    return (
        <div className='partnerListItemWrapp'>
            <dialog ref={dialogRef} className="delete-dialog">
                <div className="dialog-content">
                    <span className="warning-icon">&#9888;</span>
                    <label>Are you sure you want to delete </label>
                    <label className='dialogName'>{partnerName}?</label>
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
                    src={partner?.src}
                    fill
                    alt="Artica International Partner"
                />
            </div>
            <div className='setBtnWrapp'>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default PartnerListItem