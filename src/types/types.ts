export enum Collestions {
    ARTICA_PROJECTS = 'artica-projects'
}

export enum ImageBucket {
    BACKGROUND = 'background',
    USERS = 'users',
    PROJECTS = 'projects'
}

export interface LocalizationProps {
    params: {
        locale: string;
    };
}

export interface NavigationProps {
    locale: string;
}

export interface NavLabel {
    en: string;
    rs: string;
};

export interface NavItem {
    navLabel: NavLabel
    path: string;
}


export enum ImageSubBucket {
    MAIN = 'main',
    CLIENTS = 'clients'
}

export enum TagType {
    MANAGMENT = 'managment',
    DEVELOPMENT = 'development'
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

export type TIdVal = {
    id: string;
    value: string
}

export type TGroupedProjects = {
    [key: string]: number;
};

export enum Language {
    ENGLISH = 'en',
    SERBIAN = 'rs'
}

export type TLocale = {
    en: string;
    rs: string;
    id: string;
}

export type TAvatar = {
    iconSrc: string
    displayName: string
}

export enum ProjectStatus {
    COMPLETED = 'completed',
    INPROGRESS = 'inprogress',
    // Pending = 'pending',
    // Add other statuses as needed
}

export type TUploadedUrl = {
    downloadURL: string;
    fullPath: string;
    link: string | undefined;
};

export type TClients = {
    src: string;
    link: string;
    id: string
}

export type ClientFileWithLink = FileObject & { link?: string };