"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from '@/firebase/config';
import { LocalizationProps } from '@/types/types';
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";


export default function Office({ params: { locale } }: LocalizationProps) {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formValues: Record<string, string> = {};
        formData.forEach((value, name) => {
            formValues[name] = value.toString();
        });
        const { email, password } = formValues;
        try {
            const res = await signInWithEmailAndPassword(firebaseAuth, email, password);
            console.log("resauth", res.user);
            res.user && router.push(`/${locale}/office/settings`);
        } catch (error) {
            console.error(error);
            toast.error((error as Error).message);
            // TODO: Display error message using toast or similar
        }
    };

    return (
        <form className="loginForm" onSubmit={handleSubmit}>
            <section className='logoSection'>
                <Image
                    src="/articaNew.svg"
                    width={150}
                    height={150}
                    alt="Artica International"
                    style={{ cursor: 'pointer' }}
                    title='Back to HOME'
                    onClick={() => router.push('/')}
                />
            </section>
            <section className='inputsSection'>
                <article className='loginHeading'>
                    <label>Welcome to</label>
                    <label>Artica office</label>
                    <label>Login here</label>
                </article>
                <label htmlFor="username" className='loginLbl'>Username</label>
                <input className='loginInputs' type="text" placeholder="Email or Phone" id="username" name='email' required />
                <label htmlFor="password" className='loginLbl'>Password</label>
                <div className='passwordContainer'>
                    <input
                        className='loginInputPass'
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        id="password"
                        name='password'
                        required
                    />
                    <span
                        className='passwordToggleIcon'
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                    </span>
                </div>
                <button className='loginBtn' type='submit'>Log In</button>
            </section>
        </form>
    );
}
