export enum Collestions {
    ARTICA_PROJECTS = 'artica-projects'
}

export enum ImageBucket {
    BACKGROUND = 'background',
    USERS = 'users',
    PROJECTS = 'projects'
}



export enum ImageSubBucket {
    MAIN = 'main',
    CLIENTS = 'clients'
}

export type TProjectFB = {
    name: string
    id: string
}

export interface FileObject {
    bucket: string;
    id: string;
    file: File;
}

export type TClinetLink = {
    id: string;
    value: string
}

export type ClientFileWithLink = FileObject & { link?: string };