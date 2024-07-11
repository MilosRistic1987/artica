import React from 'react'
import Image from 'next/image'

const ProjectListItem = (project: any) => {
    console.log("ProjectListItem", project)
    return (
        <div className='projectListItemWrapp'>
            <div className='imgWrapp'>
                <Image
                    src={project?.src}
                    fill
                    alt="Artica International Project"
                    title='Back to HOME'
                />
            </div>
            <div className='setProjectHeading'>
                <label>{project?.name['en']}</label>
            </div>
            <div className='setBtnWrapp'>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default ProjectListItem