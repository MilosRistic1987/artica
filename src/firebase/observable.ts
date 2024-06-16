

import { Collestions, TProjectFB } from "@/types/types";
import { collection, getFirestore, onSnapshot, query } from "firebase/firestore";
import { BehaviorSubject, Observable, catchError, from, map, lastValueFrom } from "rxjs";
import { firebaseApp } from "./config";
import { revalidatePath, revalidateTag } from "next/cache";

export class ProjecService {
    public projectsSubject: BehaviorSubject<TProjectFB[]>;
    public projectsObservable: Observable<TProjectFB[]>;
    public projects: TProjectFB[]

    constructor() {
        // Initialize the BehaviorSubject with an empty array
        this.projectsSubject = new BehaviorSubject<TProjectFB[]>([]);
        this.projectsObservable = this.projectsSubject.asObservable();
        this.projects = []
    }



    geTProjectFBs() {
        return this.projectsObservable;
    }
    geTProjects() {
        return this.projects;
    }


    getServerData() {
        const fireStore = getFirestore(firebaseApp)
        const q = query(collection(fireStore, Collestions.ARTICA_PROJECTS));
        const products: TProjectFB[] = [];
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            console.log(5)
            revalidatePath('/', 'page')
            querySnapshot.forEach((doc) => {
                products.push({
                    id: doc.id, name: doc.data().name
                });
                // this.projectsSubject.next(products);
                // this.projectsObservable.subscribe((res) => this.projects = [...res]);
            });

        });

        return unsubscribe;

    }


    fetchProjects(): Promise<TProjectFB[]> {
        console.log(4)
        return new Promise((resolve, reject) => {
            const subscription = this.geTProjectFBs().subscribe({
                next: async (projects) => {
                    console.log('before4')
                    if (!projects.length) {
                        this.getServerData();
                        console.log('4-a')
                        this.projects = projects
                    } else {
                        console.log('4-b')
                        resolve(projects);
                        subscription.unsubscribe(); // Unsubscribe to avoid memory leaks
                    }
                },
                error: (err) => {
                    reject(err);
                    subscription.unsubscribe(); // Unsubscribe on error to avoid memory leaks
                }
            });
        });
    }



}

