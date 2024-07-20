import { Collestions, Language, TClientsAndPartners, TProjectFB, } from "@/types/types";
import { firebaseApp } from "./config";
import { getFirestore, collection, getDocs, getDoc, onSnapshot, query, where, addDoc, setDoc, doc, deleteDoc } from "firebase/firestore";

import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { ProjecService } from "./observable";


// export async function getServerData() {
//     const fireStore = getFirestore(firebaseApp)

//     const q = query(collection(fireStore, Collestions.ARTICA_PROJECTS));
//     const products: any = [];
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//         const projectService = new ProjecService();
//         querySnapshot.forEach((doc) => {
//             // console.log("OVDEEERERALTIME", doc.data().name)
//             products.push({
//                 id: doc.id, ...doc.data()
//             });

//             projectService.projectsSubject.next(products);
//             console.log(products, 'productsSNAP')
//         });

//     });
//     return unsubscribe;



export const createFBProject = async (project: any) => {
    const fireStore = getFirestore(firebaseApp)
    const result = await setDoc(doc(fireStore, Collestions.ARTICA_PROJECTS, project.id), project);
    return result
}

export const createFBPartner = async (partner: TClientsAndPartners) => {
    const fireStore = getFirestore(firebaseApp)
    const result = await setDoc(doc(fireStore, Collestions.ARTICA_PARTNERS, partner.id), partner);
    return result
}


export const getProjects = async () => {
    const fireStore = getFirestore(firebaseApp)
    const querySnapshot = await getDocs(collection(fireStore, Collestions.ARTICA_PROJECTS));
    let data: any[] = [];
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
    });

    return data
}

export const getPartners = async () => {
    const fireStore = getFirestore(firebaseApp)
    const querySnapshot = await getDocs(collection(fireStore, Collestions.ARTICA_PARTNERS));
    let data: TClientsAndPartners[] = [];
    querySnapshot.forEach((doc) => {
        data.push(doc.data() as TClientsAndPartners);
    });

    return data
}

export const deleteFBProject = async (projectName: string) => {
    const fireStore = getFirestore(firebaseApp)
    let response: boolean;
    try {
        await deleteDoc(doc(fireStore, Collestions.ARTICA_PROJECTS, projectName));
        response = true
    } catch (error) {
        response = false
    }
    return response
}

export const deleteFBPartner = async (id: string) => {
    const fireStore = getFirestore(firebaseApp)
    let response: boolean;
    try {
        await deleteDoc(doc(fireStore, Collestions.ARTICA_PARTNERS, id));
        response = true
    } catch (error) {
        response = false
    }
    return response
}

export const getProjectById = async (id: string) => {
    const fireStore = getFirestore(firebaseApp)
    const docRef = doc(fireStore, Collestions.ARTICA_PROJECTS, id);
    const docSnap = await getDoc(docRef);
    console.log(id)

    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        // docSnap.data() will be undefined in this case
        return null
    }
}


export const getPageImage = async (folderPath: string, imagePath: string) => {
    const storage = getStorage()
    const starsRef = ref(storage, `${folderPath}/${imagePath}`)

    try {
        const url = await getDownloadURL(starsRef)
        return url
    } catch (error: any) {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
            case 'storage/object-not-found':
                // File doesn't exist
                console.error('File does not exist')
                break
            case 'storage/unauthorized':
                // User doesn't have permission to access the object
                console.error('User does not have permission to access the object')
                break
            case 'storage/canceled':
                // User canceled the upload
                console.error('User canceled the upload')
                break
            case 'storage/unknown':
                // Unknown error occurred, inspect the server response
                console.error('Unknown error occurred')
                break
            default:
                console.error('An unexpected error occurred:', error.message)
                break
        }
    }
}


export const uploadFile = async (file: any, folderPath: string, imagePath: string, link?: string) => {
    console.log("usaooo")

    const storage = getStorage();
    const storageRef = ref(storage, `${folderPath}/${imagePath}`)

    // 'file' comes from the Blob or File API
    return uploadBytes(storageRef, file).then(async (snapshot) => {
        console.log('Uploaded a blob or file!', snapshot);
        const { metadata: { fullPath } } = snapshot
        const downloadURL = await getDownloadURL(snapshot.ref);
        console.log('File available at', downloadURL);
        return { fullPath, downloadURL, link };
    });
}



