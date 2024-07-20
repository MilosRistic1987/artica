import { ClientFileWithLink, FileObject, Language, ProjectStatus, TClientsAndPartners, TIdVal, TLocale, TUploadedUrl } from "@/types/types";

export const generateId = () => Math.random().toString(36).substr(2, 9) + Date.now().toString(36);


export const expandFilesWithLink = (files: FileObject[], links: TIdVal[]): ClientFileWithLink[] => {
    return files.map(file => {
        const matchedLink = links.find(link => link.id === file.id);
        return matchedLink ? { ...file, link: matchedLink.value } : file;
    });
};


export const getUsername = (email: string) => {
    let username = email.split('@')[0];
    return username;
}


const statusMapping: Record<string, TLocale> = {
    [ProjectStatus.COMPLETED]: {
        en: 'completed',
        rs: 'zavrseno',
        id: generateId(),
    },
    [ProjectStatus.INPROGRESS]: {
        en: 'in progress',
        rs: 'radovi u toku',
        id: generateId(),
    },
    // Add other mappings as needed
};


export function getStatusObject(status: string): TLocale | undefined {
    return statusMapping[status];
}


export const separateUrls = (urls: TUploadedUrl[]): { clientArray: TClientsAndPartners[]; mainArray: string[] } => {
    return urls.reduce(
        (acc: { clientArray: TClientsAndPartners[]; mainArray: string[] }, url: TUploadedUrl, index: number) => {

            if (url.link) {
                const { link, ...clientRest } = url
                const client = { src: url.downloadURL, link, id: generateId() }
                acc.clientArray.push(client);
            } else {
                acc.mainArray.push(url.downloadURL);
            }

            return acc;
        },
        { clientArray: [], mainArray: [] }
    );
}


export const handleGroupByState = (projects: any[]) => {
    return projects.reduce((acc, project) => {
        const state = project.state[Language.ENGLISH];
        if (!acc[state]) {
            acc[state] = [];
        }
        acc[state].push(project);
        return acc;
    }, {} as Record<string, any[]>);
};

export const handleLoadingComplete = (naturalWidth: number, naturalHeight: number) => {
    const isWide = naturalWidth / naturalHeight >= 1.5;
    console.log("isWide", isWide)
    const wideWidth = (naturalWidth / naturalHeight) * 50
    return {
        width: isWide ? wideWidth : 50,
        height: 50,
    }
};

export const extractDomainMiddlePart = (url: string) => {
    const domain = url.match(/:\/\/(www\.)?([^/]+)/)?.[2];
    if (!domain) return null;
    const parts = domain.split('.');
    return parts.length === 3 ? parts[1] : parts[0];
}




