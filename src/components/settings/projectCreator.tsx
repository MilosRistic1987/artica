"use client"
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import FileUploader from './fileUploader';
import { uploadFile } from '@/firebase/actions';
import {
    RocketLaunchIcon,
} from '@heroicons/react/24/solid';
import {
    SquaresPlusIcon,
    MinusCircleIcon
} from '@heroicons/react/24/outline';
import { expandFilesWithLink, generateId } from '@/helpers/utils';
import { FileObject, ImageBucket, ImageSubBucket, TClinetLink } from '@/types/types';
import ArticaLoader from '../articaLoader';


interface FileInputEvent extends ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & EventTarget;
}

interface Tag {
    serbian: string;
    english: string;
}



const ProjectCreator: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [serbianSubtitle, setSerbianSubtitle] = useState<string>('');
    const [englishSubtitle, setEnglishSubtitle] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);
    const [tags, setTags] = useState<Tag[]>([{ serbian: '', english: '' }]);
    const [clients, setClients] = useState<string[]>([]);
    const [clientLinks, setClientLinks] = useState<TClinetLink[]>([])
    const [file, setFile] = useState<File | null>(null);
    const [files, setFiles] = useState<FileObject[]>([]);
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [projectStatus, setProjectStatus] = useState<string>('inprogress')

    const handleImageUpload = (e: FileInputEvent, setImageFn: React.Dispatch<React.SetStateAction<File | null>>) => {
        setImageFn(e.target.files?.[0] || null);
    };

    const handleTagsChange = (index: number, key: keyof Tag, value: string) => {
        const newTags = [...tags];
        newTags[index][key] = value;
        setTags(newTags);
    };

    const handleAddTag = () => {
        setTags([...tags, { serbian: '', english: '' }]);
    };

    // const handleClientImageUpload = (index: number, file: File | null) => {
    //     const newClients = [...clients];
    //     newClients[index] = file;
    //     setClients(newClients);
    // };

    const handleFileChange = (file: File, bucket: string, id: string) => {
        const newFileObject: FileObject = {
            bucket,
            id,
            file
        };
        setFiles(prevFiles => [...prevFiles, newFileObject]);
    };

    const handleClientsLink = (newClient: TClinetLink) => {
        setClientLinks(prevClientLinks =>
            prevClientLinks.map(clientLink =>
                clientLink.id === newClient.id ? { ...clientLink, value: newClient.value } : clientLink
            )
        );
    };

    console.log(clientLinks, "clientLinks")


    const handleAddClient = () => {
        setClientLinks([...clientLinks, { id: generateId(), value: '' }])
    };

    const createProject = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("dialogRef.current", dialogRef.current)
        dialogRef.current?.showModal()
        const expandedFiles = expandFilesWithLink(files, clientLinks)
        const uploadPromises = expandedFiles.map((promise) => {
            const path = promise.bucket === 'project' ? ImageSubBucket.MAIN : ImageSubBucket.CLIENTS
            return uploadFile(promise.file, `${ImageBucket.PROJECTS}/${title}/${path}`, promise.file.name, promise.link);
        });
        try {
            const uploadedUrls = await Promise.all(uploadPromises);
            uploadedUrls.map((url, index) => {
                console.log(`Uploaded file ${index + 1} to ${url.downloadURL} and path is ${url.fullPath} `);
                return null; // Ensuring a return value in map callback
            });
            console.log(uploadedUrls, ' uploadedUrls')
        } catch (error) {
            console.error('Error uploading files:', error);
        }
        console.log("uploadPromises", uploadPromises)
        // const imageUrl = await uploadFile(file, 'product', 'projekat1')
        // console.log("imageUrl", imageUrl)
    }



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
                            id="title"
                            placeholder='Project Title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <input
                            className='articaInpt'
                            type="text"
                            id="title"
                            placeholder='Naziv Projekta'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="serbianSubtitle">Project Type:</label>
                    <div className='inpDividerWrapp'>
                        <input
                            className='articaInpt'
                            type="text"
                            id="serbianSubtitle"
                            placeholder='Project Type'
                            value={serbianSubtitle}
                            onChange={(e) => setSerbianSubtitle(e.target.value)}
                        />
                        <input
                            className='articaInpt'
                            type="text"
                            id="serbianSubtitle"
                            placeholder='Tip Projekta'
                            value={serbianSubtitle}
                            onChange={(e) => setSerbianSubtitle(e.target.value)}
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
                            id="title"
                            placeholder='Project Location'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <input
                            className='articaInpt'
                            type="text"
                            id="title"
                            placeholder='Lokacija Projekta'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
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
            <div className="form-group">
                <label>Tags:</label>
                {tags.map((tag, index) => (
                    <div key={index} className="tag-input">
                        <input
                            type="text"
                            placeholder="Serbian Tag"
                            value={tag.serbian}
                            onChange={(e) => handleTagsChange(index, 'serbian', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="English Tag"
                            value={tag.english}
                            onChange={(e) => handleTagsChange(index, 'english', e.target.value)}
                        />
                    </div>
                ))}
                <button type="button" onClick={handleAddTag}>
                    Add Tag
                </button>
            </div>
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
                        <MinusCircleIcon className='removeIcon' />
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
