"use client";


import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { useTransition } from 'react';

const LanguagePicker: React.FC = () => {

    const [isPending, startTransition] = useTransition()
    const localActive = useLocale()
    const router = useRouter()
    const handleLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value;
        console.log("selectedLanguage", selectedLanguage)
        router.replace(`/${selectedLanguage}`)
    };

    return (
        <select disabled={isPending} defaultValue={localActive} className="languagePicker" onChange={handleLanguage}>
            <option value="rs">RS</option>
            <option value="en">EN</option>
        </select>
    );
};

export default LanguagePicker;

