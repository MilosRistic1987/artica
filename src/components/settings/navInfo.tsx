
import Link from 'next/link';
import {
    HomeIcon
} from '@heroicons/react/24/solid';
import Image from 'next/image'
import { getPageImage } from '@/firebase/actions';
import { ImageBucket } from '@/types/types';
import { useEffect, useState } from 'react';







const NavInfo: React.FC = () => {

    const [logoSrc, setLogoSrc] = useState<string>('')

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const src = await getPageImage(ImageBucket.BACKGROUND, 'articaWall') as string;
                setLogoSrc(src);
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        fetchImage();
    }, []);


    return (
        <section className='navInfo'>
            <div className='navImageWrapp'>
                <div className='navImage'>
                    {logoSrc && <Image
                        src={logoSrc}
                        fill
                        alt="Artica International"

                    />}
                </div>
                <div className='navInfoContent'>
                    <label>Number of projects:<span>10</span></label>
                    <label>In Progress:<span>3</span></label>
                    <label>Completed:<span>7</span></label>

                </div>
            </div>
            <div className='navHomeWrapp'>
                <Link href='/'>
                    <HomeIcon />
                </Link>
            </div>

        </section>
    );
};

export default NavInfo;