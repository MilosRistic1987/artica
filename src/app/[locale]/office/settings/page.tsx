"use client"

import BGChanger from "@/app/[locale]/components/settings/bgChanger"
import Profile from "@/app/[locale]/components/settings/profile"
import PartnerCreator from "@/app/[locale]/components/settings/partnerCreator"


export default function Settings() {

  return (
    <main className="generalSettWrapp">
      <Profile />
      <BGChanger />
      <PartnerCreator />
    </main >
  )
}
