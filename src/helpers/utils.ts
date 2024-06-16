import { ClientFileWithLink, FileObject, TClinetLink } from "@/types/types";

export const generateId = () => Math.random().toString(36).substr(2, 9) + Date.now().toString(36);


export const expandFilesWithLink = (files: FileObject[], links: TClinetLink[]): ClientFileWithLink[] => {
    return files.map(file => {
        const matchedLink = links.find(link => link.id === file.id);
        return matchedLink ? { ...file, link: matchedLink.value } : file;
    });
};

