"use client"
import Link from 'next/link';
import {
    HomeIcon
} from '@heroicons/react/24/solid';
import Image from 'next/image'
import { getPageImage, uploadFile } from '@/firebase/actions';
import { ImageBucket } from '@/types/types';
import { FormEvent, useEffect, useRef, useState } from 'react';






const BGChanger: React.FC = () => {
    const backgroundRef = useRef<HTMLInputElement>(null)
    const [articaBgSrc, setArticaBgSrc] = useState<string>('')

    useEffect(() => {
        const fetchImage = async () => {
            const articaLandingBg = await getPageImage(ImageBucket.BACKGROUND, 'articaWall');
            console.log("articaLandingBg", articaLandingBg)
            setArticaBgSrc(articaLandingBg as string)
        };

        fetchImage();
    }, []);


    const handleBackgroundPhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files[0]) {
            const file = files[0];
            const reader = new FileReader();

            reader.onloadend = () => {
                setArticaBgSrc(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };



    const handleForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        const data = {
            avatarFile: formData.get('bgFile'),
        };

        const bgPhoto = await uploadFile(data.avatarFile, ImageBucket.BACKGROUND, 'articaWall')



        // Process formData or send it to the server
        // For example, you can log it to the console:
        console.log('bgPhoto', bgPhoto);
    }







    return (
        <section className='profileWrrapp'>
            <form onSubmit={handleForm}>
                {articaBgSrc && <div className='fileSwitcherWrapp'>
                    <input
                        type="file"
                        ref={backgroundRef}
                        onChange={handleBackgroundPhoto}
                        name='bgFile'
                    />
                    <Image
                        src={articaBgSrc as string}
                        width={300}
                        height={300}
                        alt="Artica International"
                    />
                </div>
                }
                <button type='submit' className='bgChangerBtn'>Change Background</button>
            </form>
        </section>
    );
};

export default BGChanger;