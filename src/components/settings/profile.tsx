"use client"
import Link from 'next/link';
import {
    HomeIcon
} from '@heroicons/react/24/solid';
import Image from 'next/image'
import { getPageImage, uploadFile } from '@/firebase/actions';
import { ImageBucket } from '@/types/types';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { User, getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { firebaseAuth } from '@/firebase/config';
import { getUsername } from '@/helpers/utils';





const Profile: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const avatarRef = useRef<HTMLInputElement>(null)
    const [avatarSrc, setAvatarSrc] = useState<string>('')
    const [displayName, setDisplayName] = useState<string>('')

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            console.log('before,user', user)
            if (user) {
                setUser(user)
                const anonymousIcon = '/avatar.png';
                const anonymousName = 'anonymous';
                const avatarIcon = user?.photoURL || anonymousIcon;
                const avatarName = user?.displayName || anonymousName;
                setAvatarSrc(avatarIcon)
                setDisplayName(avatarName)
            } else {
                console.log("nouser")
                setUser(null);
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);


    console.log("userPRrofileepage", user)

    const handleAvatarPhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files[0]) {
            const file = files[0];
            const reader = new FileReader();

            reader.onloadend = () => {
                setAvatarSrc(reader.result as string);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleDisplayName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDisplayName(event.target.value)
    }

    console.log(user, "USERPROOOFILEE")
    const update = async (avatarName: string, avatarPhoto: string) => {
        const uid = "pDLNtGgo5pZq6nlQF9Ud5lEypOI3"
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
            try {
                await updateProfile(user, {
                    displayName: avatarName,
                    photoURL: avatarPhoto
                });
                console.log('Profile updated successfully');
            } catch (error) {
                console.error('Error updating profile:', error);
            }
        } else {
            console.error('No user is signed in');
        }
    };

    const handleForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        const data = {
            avatarFile: formData.get('avatarFile'),
            avatarName: formData.get('avatarName') as string
        };
        const username = getUsername(user?.email as string)
        const avatarPhoto = await uploadFile(data.avatarFile, `${ImageBucket.USERS}/${username}`, 'avatar')
        const response = await update(data.avatarName, avatarPhoto.downloadURL)
        console.log(response, "responseeeeeeeeeee")

        // Process formData or send it to the server
        // For example, you can log it to the console:
        console.log('avatarPhoto', avatarPhoto);
    }

    return (
        <section className='profileWrrapp'>
            <form onSubmit={handleForm}>
                <div className='fileSwitcherWrapp'>
                    <input
                        type="file"
                        ref={avatarRef}
                        onChange={handleAvatarPhoto}
                        name='avatarFile'
                    />
                    <Image
                        src={avatarSrc as string}
                        width={300}
                        height={300}
                        alt="Artica International"
                    />
                </div>
                <input className='articaInpt' type='text' name='avatarName' value={displayName} onChange={(event) => handleDisplayName(event)} />
                <button type='submit'>Update Profile</button>
            </form>
        </section>
    );
};

export default Profile;