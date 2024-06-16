
import Link from 'next/link';
import {
    HomeIcon
} from '@heroicons/react/24/solid';
import Image from 'next/image'
import { getPageImage } from '@/firebase/actions';
import { ImageBucket } from '@/types/types';







const NavInfo: React.FC = async () => {

    const logoSrc = await getPageImage(ImageBucket.BACKGROUND, 'articaWall.jpg') as string

    return (
        <section className='navInfo'>
            <div className='navImageWrapp'>
                <div className='navImage'>
                    <Image
                        src={logoSrc}
                        layout='fill'
                        alt="Artica International"

                    />
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