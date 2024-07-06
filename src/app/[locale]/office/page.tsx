
"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from '@/firebase/config';
import { LocalizationProps } from '@/types/types';





export default function Office({ params: { locale } }: LocalizationProps) {
    console.log(locale, 'paramsOffice')
    const router = useRouter()

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formValues: Record<string, string> = {};
        formData.forEach((value, name) => {
            formValues[name] = value.toString();
        });
        const { email, password } = formValues
        try {
            const res = await signInWithEmailAndPassword(firebaseAuth, email, password)
            console.log("resauth", res.user)
            res.user && router.push(`/${locale}/office/settings`)
        } catch (error) {
            console.error(error);
            //TO DO
            // ERROR MSG DISPLAY TOAST OR SOMETHING LIKE THIS
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
                <input className='loginInputs' type="text" placeholder="Email or Phone" id="username" name='email' />
                <label htmlFor="password" className='loginLbl'>Password</label>
                <input className='loginInputs' type="password" placeholder="Password" id="password" name='password' />
                <button className='loginBtn' type='submit'>Log In</button>
            </section>
        </form>
    );
}