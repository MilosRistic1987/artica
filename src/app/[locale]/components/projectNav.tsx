"use client"

import ArticaLogo from './articaLogo';

const ProjectNav: React.FC<{ projectName: string, locale: string }> = ({ projectName, locale }) => {

    return (
        <section className='projectNav'>
            <ArticaLogo logoMesaures={{ logoWidth: 100, logoHeight: 100 }} locale={locale} />
            <h1>{projectName}</h1>
        </section>

    );
};

export default ProjectNav;