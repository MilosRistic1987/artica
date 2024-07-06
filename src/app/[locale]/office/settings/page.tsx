"use client"

import BGChanger from "@/app/[locale]/components/settings/bgChanger"
import Profile from "@/app/[locale]/components/settings/profile"
import ProjectCreator from "@/app/[locale]/components/settings/projectCreator"
import { createFBProject, getPageImage } from "@/firebase/actions"
import { firebaseAuth } from "@/firebase/config"
import { ImageBucket } from "@/types/types"
import { signOut, getAuth, updateProfile, onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/navigation"

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
    createFBProject(articaProject)
  }





  return (
    <main className="generalSettWrapp">
      {/* seetings work !
      <button onClick={() => generateProject()}>create project</button> */}
      {/* <ProjectCreator /> */}


      {/* 
      <button onClick={update}>update</button> */}

      <Profile />
      <BGChanger />
      <section></section>

    </main >
  )
}
