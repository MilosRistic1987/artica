"use client"

import ProjectCreator from "@/components/settings/projectCreator"
import { createProject, getPageImage } from "@/firebase/actions"
import { firebaseAuth } from "@/firebase/config"
import { ImageBucket } from "@/types/types"
import { signOut, getAuth, updateProfile } from "firebase/auth"
import { useEffect } from "react"


const articaProject = { name: 'SkyLoom Tower', src: '/projects/project1.jpg', state: "in progress", type: "Residential", clients: [{ id: 991, src: '/clients/globalfinance.jpg', width: 160 }], location: "Kragujevac, Serbia" }

export default function Settings() {


  // useEffect(() => {
  //   const fetchImage = async () => {
  //     try {
  //       const image = await getPageImage(ImageBucket.USERS, 'milos/avatar.jpg');
  //       console.log("image", image)
  //     } catch (error) {
  //       console.error('Error fetching image:', error);
  //     }
  //   };

  //   fetchImage();
  // }, []);


  const generateProject = () => {
    createProject(articaProject)
  }

  const logout = () => {
    signOut(firebaseAuth).then((res) => {
      // Sign-out successful.
      console.log(res)
    }).catch((error) => {
      console.log(error)
      // An error happened.
    });
  }

  const update = async () => {
    const uid = "pDLNtGgo5pZq6nlQF9Ud5lEypOI3"
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      try {
        await updateProfile(user, {
          displayName: "riksha",
          photoURL: "https://firebasestorage.googleapis.com/v0/b/artica-international.appspot.com/o/users%2Fmilos%2Favatar.jpg?alt=media&token=54f2ee2b-7cab-49e7-8643-61f8f8c72121"
        });
        console.log('Profile updated successfully');
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    } else {
      console.error('No user is signed in');
    }
  };

  return (
    <main>
      {/* seetings work !
      <button onClick={() => generateProject()}>create project</button> */}
      {/* <ProjectCreator /> */}

      <button onClick={logout}>logout</button>

      <button onClick={update}>update</button>

    </main >
  )
}
