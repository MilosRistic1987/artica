
"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'



export default function Office() {
    const router = useRouter()
    return (
        <form className="loginForm">
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
                <input className='loginInputs' type="text" placeholder="Email or Phone" id="username" />
                <label htmlFor="password" className='loginLbl'>Password</label>
                <input className='loginInputs' type="password" placeholder="Password" id="password" />
                <button className='loginBtn'>Log In</button>
            </section>

        </form>
    );
}