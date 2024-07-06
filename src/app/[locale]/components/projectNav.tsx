"use client"

import ArticaLogo from './articaLogo';

const ProjectNav: React.FC<{ projectName: string }> = ({ projectName }) => {

    return (
        <section className='projectNav'>
            <ArticaLogo logoMesaures={{ logoWidth: 100, logoHeight: 100 }} />
            <h1>{projectName}</h1>
        </section>

    );
};

export default ProjectNav;