
import Link from 'next/link';
import {
    HomeIcon
} from '@heroicons/react/24/solid';
import Image from 'next/image'
import { getPageImage, getProjects } from '@/firebase/actions';
import { ImageBucket, Language, TGroupedProjects } from '@/types/types';
import { useEffect, useState } from 'react';







const NavInfo: React.FC = () => {

    const [logoSrc, setLogoSrc] = useState<string>('')
    const [groupedProjectCount, setGroupedProjectCount] = useState<TGroupedProjects>({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [src, projects] = await Promise.all([
                    getPageImage(ImageBucket.BACKGROUND, 'articaWall') as Promise<string>,
                    getProjects()
                ]);
                const groupByState = Object.groupBy(projects, project => {
                    return project.state[Language.ENGLISH];
                });
                console.log('groupByState', groupByState)
                setGroupedProjectCount({
                    inProgress: groupByState['in progress']?.length || 0,
                    completed: groupByState['completed']?.length || 0,
                });
                setLogoSrc(src);
                // handle the projects data as needed
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const totalProjectsCount = groupedProjectCount.completed + groupedProjectCount.inProgress;

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
                    <label>Number of projects:<span>{totalProjectsCount}</span></label>
                    <label>In Progress:<span>{groupedProjectCount.inProgress}</span></label>
                    <label>Completed:<span>{groupedProjectCount.completed}</span></label>

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