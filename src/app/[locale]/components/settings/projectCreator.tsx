"use client"
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import FileUploader from './fileUploader';
import { createFBProject, uploadFile } from '@/firebase/actions';
import {
    RocketLaunchIcon,
} from '@heroicons/react/24/solid';
import {
    SquaresPlusIcon,
    MinusCircleIcon
} from '@heroicons/react/24/outline';
import { expandFilesWithLink, generateId, getStatusObject, separateUrls } from '@/helpers/utils';
import { FileObject, ImageBucket, ImageSubBucket, Language, TIdVal, TLocale } from '@/types/types';
import ArticaLoader from '../articaLoader';
import TagManager from '../tagManager';
import toast from 'react-hot-toast';



interface FileInputEvent extends ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & EventTarget;
}

interface Tag {
    serbian: string;
    english: string;
}



const ProjectCreator: React.FC = () => {
    const initialLocaleState = { en: '', rs: '', id: generateId() };
    const [title, setTitle] = useState<TLocale>(initialLocaleState);
    const [projectType, setProjectType] = useState<TLocale>(initialLocaleState);
    const [projectLocation, setProjectLocation] = useState<TLocale>(initialLocaleState);

    const [clientLinks, setClientLinks] = useState<TIdVal[]>([])
    const [files, setFiles] = useState<FileObject[]>([]);
    const [developmentTags, setDevelopmentTags] = useState<TLocale[]>([])
    const [managmentTags, setManagmentTags] = useState<TLocale[]>([])
    const [projectStatus, setProjectStatus] = useState<string>('inprogress')
    const dialogRef = useRef<HTMLDialogElement>(null);

    const resetForm = () => {
        setTitle(initialLocaleState);
        setProjectType(initialLocaleState);
        setProjectLocation(initialLocaleState);
        setClientLinks([]);
        setFiles([]);
        setDevelopmentTags([]);
        setManagmentTags([]);
        setProjectStatus('inprogress');
    };


    const handleFileChange = (file: File, bucket: string, id: string) => {
        const newFileObject: FileObject = {
            bucket,
            id,
            file
        };
        setFiles(prevFiles => [...prevFiles, newFileObject]);
    };

    const handleRemoveClient = (id: string) => {
        setClientLinks([...clientLinks.filter(client => client.id !== id)])

    }

    const handleClientsLink = (newClient: TIdVal) => {
        setClientLinks(prevClientLinks =>
            prevClientLinks.map(clientLink =>
                clientLink.id === newClient.id ? { ...clientLink, value: newClient.value } : clientLink
            )
        );
    };


    const handleAddClient = () => {
        setClientLinks([...clientLinks, { id: generateId(), value: '' }])
    };

    const createProject = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dialogRef.current?.showModal()
        const expandedFiles = expandFilesWithLink(files, clientLinks)
        const uploadPromises = expandedFiles.map((promise) => {
            const path = promise.bucket === 'project' ? ImageSubBucket.MAIN : ImageSubBucket.CLIENTS
            return uploadFile(promise.file, `${ImageBucket.PROJECTS}/${title[Language.ENGLISH]}/${path}`, promise.file.name, promise.link);
        });
        try {
            const uploadedUrls = await Promise.all(uploadPromises);
            const { clientArray, mainArray } = separateUrls(uploadedUrls)
            const state = getStatusObject(projectStatus)
            const project = { name: title, state, src: mainArray[0], clients: clientArray, type: projectType, location: projectLocation, managmentTags, developmentTags, id: generateId(), createdAt: new Date() }
            console.log("projectforupload", project)
            const result = await createFBProject(project)
            toast.success("Artica Project Successfuly Created");
            setTimeout(() => {
                resetForm()
                dialogRef.current?.close()
            }, 2000);
        } catch (error) {
            console.error('Error uploading files:', error);
            toast.error("There was an error during project creation.Please try later !")
        }


        // { name: 'SkyLoom Tower', src: '/projects/project1.jpg', state: "in progress", type: "Residential", clients: [{ id: 991, src: '/clients/globalfinance.jpg', width: 160 }], location: "Kragujevac, Serbia" },
        // const imageUrl = await uploadFile(file, 'product', 'projekat1')
        // console.log("imageUrl", imageUrl)
    }

    console.log("projecStatus", projectStatus)

    return (
        <form className="form" onSubmit={createProject}>
            <ArticaLoader dialogRef={dialogRef} />
            <section className='inputSection'>
                <div className="form-group">
                    <label htmlFor="title">Project Title:</label>
                    <div className='inpDividerWrapp'>
                        <input
                            required
                            className='articaInpt'
                            type="text"
                            placeholder='Project Title'
                            value={title[Language.ENGLISH]}
                            onChange={(e) => setTitle((prevTitle) => ({
                                ...prevTitle,
                                [Language.ENGLISH]: e.target.value
                            }))}

                        />
                        <input
                            className='articaInpt'
                            type="text"
                            required
                            placeholder='Naziv Projekta'
                            value={title[Language.SERBIAN]}
                            onChange={(e) => setTitle((prevTitle) => ({
                                ...prevTitle,
                                [Language.SERBIAN]: e.target.value
                            }))}

                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="serbianSubtitle">Project Type:</label>
                    <div className='inpDividerWrapp'>
                        <input
                            className='articaInpt'
                            required
                            type="text"
                            placeholder='Project Type'
                            value={projectType[Language.ENGLISH]}
                            onChange={(e) => setProjectType((prevType) => ({
                                ...prevType,
                                [Language.ENGLISH]: e.target.value
                            }))}
                        />
                        <input
                            className='articaInpt'
                            type="text"
                            required
                            placeholder='Tip Projekta'
                            value={projectType[Language.SERBIAN]}
                            onChange={(e) => setProjectType((prevType) => ({
                                ...prevType,
                                [Language.SERBIAN]: e.target.value
                            }))}
                        />

                    </div>
                </div>
            </section>
            <section className='inputSection'>
                <div className="form-group">
                    <label htmlFor="englishSubtitle">Project Location:</label>
                    <div className='inpDividerWrapp'>
                        <input
                            className='articaInpt'
                            type="text"
                            required
                            placeholder='Project Location'
                            value={projectLocation[Language.ENGLISH]}
                            onChange={(e) => setProjectLocation((prevLocation) => ({
                                ...prevLocation,
                                [Language.ENGLISH]: e.target.value
                            }))}
                        />
                        <input
                            className='articaInpt'
                            type="text"
                            required
                            placeholder='Lokacija Projekta'
                            value={projectLocation[Language.SERBIAN]}
                            onChange={(e) => setProjectLocation((prevLocation) => ({
                                ...prevLocation,
                                [Language.SERBIAN]: e.target.value
                            }))}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label>Project Status:</label>
                    <div className="radio-input">
                        <label className="label">
                            <input
                                value="inprogress"
                                name="value-radio"
                                checked={projectStatus === "inprogress"}
                                id="value-1"
                                type="radio"
                                onChange={(e) => setProjectStatus(e.target.value)}
                            />
                            <p className="text">In progress</p>
                        </label>
                        <label className="label">
                            <input value="completed" name="value-radio" id="value-2" type="radio" checked={projectStatus === 'completed'} onChange={(e) => setProjectStatus(e.target.value)} />
                            <p className="text">Completed</p>
                        </label>

                    </div>
                </div>
            </section>


            <div className="form-group">
                <label htmlFor="image">Project Image:</label>
                <FileUploader setFiles={handleFileChange} objKey='project' id={generateId()} />
            </div>
            <TagManager developmentTags={developmentTags} managmentTags={managmentTags} setManagmentTags={setManagmentTags} setDevelopmentTags={setDevelopmentTags} />
            <div className="">
                <label>Clients:</label>
                {clientLinks.map((client, index) => (
                    <div className='clientWrapp'>
                        <FileUploader key={client.id} size={4} setFiles={handleFileChange} objKey='clients' id={client.id} />
                        <input
                            className='articaInpt'
                            type="text"
                            id="title"
                            placeholder='Client Link'
                            value={client.value}
                            onChange={(e) => handleClientsLink({ id: client.id, value: e.target.value })}
                        />
                        <MinusCircleIcon className='removeIcon' onClick={() => handleRemoveClient(client.id)} />
                    </div>
                ))}
                <div className='addBtnWrapp' onClick={handleAddClient}>
                    <div className='addBtnIcon'>
                        <SquaresPlusIcon />
                    </div>
                    <label >
                        Add Client
                    </label>
                </div>
            </div>
            <button className='createBtn' type="submit">Create Project <RocketLaunchIcon /></button>
        </form>
    );
};

export default ProjectCreator;
