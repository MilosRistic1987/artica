"use client"
import { firebaseAuth } from '@/firebase/config';
import {
    HomeIcon
} from '@heroicons/react/24/solid';
import { onAuthStateChanged } from 'firebase/auth';
import Image from 'next/image'
    ;
import { useEffect, useState } from 'react';







const Avatar: React.FC = async () => {

    const [user, setUser] = useState<any>();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            console.log('before,user', user)
            if (user) {
                setUser(user)
            } else {
                console.log("nouser")
                setUser(null);
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    return (
        <section className='avatar'>

            <Image
                src={user?.photoURL}
                width={100}
                height={100}
                alt="Artica International"

            />

        </section>
    );
};

export default Avatar;