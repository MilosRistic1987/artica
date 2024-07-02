import { ClientFileWithLink, FileObject, ProjectStatus, TClients, TIdVal, TLocale, TUploadedUrl } from "@/types/types";

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


export const separateUrls = (urls: TUploadedUrl[]): { clientArray: TClients[]; mainArray: string[] } => {
    return urls.reduce(
        (acc: { clientArray: TClients[]; mainArray: string[] }, url: TUploadedUrl, index: number) => {

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




