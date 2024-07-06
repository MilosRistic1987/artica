"use client"
import { firebaseAuth } from '@/firebase/config';
import { TAvatar } from '@/types/types';
import {
    HomeIcon
} from '@heroicons/react/24/solid';
import { User, onAuthStateChanged, signOut } from 'firebase/auth';
import Image from 'next/image'
    ;
import { redirect, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';








const Avatar: React.FC = () => {

    const [user, setUser] = useState<User | null>(null);
    const [avatarIcon, setAvatarIcon] = useState<string>('')
    const [avatarName, setAvatarName] = useState<string>('')
    const router = useRouter()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            console.log('before,user', user)
            if (user) {
                setUser(user)
                const anonymousIcon = '/avatar.png';
                const anonymousName = 'anonymous';
                const avatarIcon = user?.photoURL || anonymousIcon;
                const avatarName = user?.displayName || anonymousName;
                setAvatarIcon(avatarIcon);
                setAvatarName(avatarName)
            } else {
                console.log("nouser")
                setUser(null);
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);


    console.log('user', user)

    const logout = () => {
        signOut(firebaseAuth).then((res) => {
            // Sign-out successful.
            console.log(res)
            router.replace('/')
        }).catch((error) => {
            console.log(error)
            // An error happened.
        });
    }

    return (
        <section className='avatar'>
            <h1>Hi, {avatarName}</h1>
            <Image
                src={avatarIcon}
                width={100}
                height={100}
                alt="Artica International"

            />

            <button onClick={logout}>logout</button>

        </section>
    );
};

export default Avatar;