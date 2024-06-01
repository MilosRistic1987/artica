"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'







const ProjectNav: React.FC<{ projectName: string }> = ({ projectName }) => {
    const router = useRouter()
    return (
        <section className='projectNav'>
            <Image
                src="/articaNew.svg"
                width={100}
                height={100}
                alt="Artica International"
                style={{ cursor: 'pointer' }}
                title='Back to HOME'
                onClick={() => router.push('/')}
            />
            <h1>{projectName}</h1>
        </section>

    );
};

export default ProjectNav;