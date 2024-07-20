import React, { FormEvent, useEffect, useState } from 'react'
import Image from 'next/image'
import { createFBPartner, uploadFile } from '@/firebase/actions'
import { ImageBucket } from '@/types/types'
import { generateId } from '@/helpers/utils'
import toast from 'react-hot-toast'

const PartnerCreator = () => {
    // const avatarRef = useRef<HTMLInputElement>(null)
    const [partnerSrc, setPartnerSrc] = useState<string>('')
    const [displayName, setDisplayName] = useState<string>('')

    useEffect(() => {
        setPartnerSrc('/partners/partner-placeholder.jpg')

    }, []);




    const handlePartnerPhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files[0]) {
            const file = files[0];
            const reader = new FileReader();

            reader.onloadend = () => {
                setPartnerSrc(reader.result as string);
            };

            reader.readAsDataURL(file);
        }
    };

    // const handleDisplayName = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setDisplayName(event.target.value)
    // }


    // const update = async (avatarName: string, avatarPhoto: string) => {
    //     const uid = "pDLNtGgo5pZq6nlQF9Ud5lEypOI3"
    //     const auth = getAuth();
    //     const user = auth.currentUser;
    //     if (user) {
    //         try {
    //             await updateProfile(user, {
    //                 displayName: avatarName,
    //                 photoURL: avatarPhoto
    //             });
    //             console.log('Profile updated successfully');
    //         } catch (error) {
    //             console.error('Error updating profile:', error);
    //         }
    //     } else {
    //         console.error('No user is signed in');
    //     }
    // };

    const handleForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        const partnerFile = formData.get('partnerFile') as File
        const partnerLink = formData.get('partnerLink') as string
        try {
            const response = await uploadFile(partnerFile, ImageBucket.PARTNERS, partnerFile?.name, partnerLink)
            console.log("response", response)
            if (response) {
                const partner = {
                    id: generateId(),
                    src: response.downloadURL,
                    link: response.link as string

                }
                await createFBPartner(partner)
                toast.success("Artica Partner Successfuly Created");
                form.reset()
            }

        } catch (error) {
            toast.error("There was an error during partner creation.Please try later !")
        }

    }

    return (
        <section className='profileWrrapp'>
            <form onSubmit={handleForm}>
                <div className='fileSwitcherWrapp'>
                    <input
                        required
                        type="file"
                        // ref={avatarRef}
                        onChange={handlePartnerPhoto}
                        name='partnerFile'
                    />
                    <Image
                        src={partnerSrc as string}
                        width={300}
                        height={300}
                        alt="Artica International"
                    />
                </div>
                <input required className='articaInpt' type='text' name='partnerLink' placeholder='Insert Partner URL' />
                <button type='submit'>Create Partner</button>
            </form>
        </section>
    )
}

export default PartnerCreator