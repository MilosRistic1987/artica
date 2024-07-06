"use client"

import React, { Dispatch, SetStateAction } from 'react';

import { Language, TLocale, TagType } from '@/types/types';
import { generateId } from '@/helpers/utils';
import { MinusCircleIcon, TagIcon } from '@heroicons/react/24/outline';


interface TagMProps {
    developmentTags: TLocale[],
    managmentTags: TLocale[],
    setManagmentTags: Dispatch<SetStateAction<TLocale[]>>,
    setDevelopmentTags: Dispatch<SetStateAction<TLocale[]>>

}

const TagManager: React.FC<TagMProps> = ({ developmentTags, managmentTags, setManagmentTags, setDevelopmentTags }) => {

    const handleAddTag = (tagType: string) => {
        const newTag = { id: generateId(), en: '', rs: '' };
        if (tagType === TagType.MANAGMENT) {
            setManagmentTags([...managmentTags, newTag])
        } else {
            setDevelopmentTags([...developmentTags, newTag])
        }
    }

    const handleRemoveTag = (tagType: string, id: string) => {
        if (tagType === TagType.MANAGMENT) {
            setManagmentTags([...managmentTags.filter(tag => tag.id !== id)])
        } else {
            setDevelopmentTags([...developmentTags.filter(tag => tag.id !== id)])
        }
    }

    const handleTagsChange = (id: string, tagValue: string, tagType: string, lang: string) => {
        if (tagType === TagType.MANAGMENT) {
            setManagmentTags(prevManTags =>
                prevManTags.map(manTag =>
                    manTag.id === id ? { ...manTag, [lang]: tagValue } : manTag
                )
            );
        } else {
            setDevelopmentTags(prevDevTags =>
                prevDevTags.map(devTag =>
                    devTag.id === id ? { ...devTag, [lang]: tagValue } : devTag
                )
            );
        }
    }


    return (<section className='inputSection'>
        <div className="form-group">
            <label>Development Tags:</label>
            {developmentTags.map((tag) => (
                <div key={tag.id} className="tag-input">
                    <input
                        className='articaInpt'
                        required
                        type="text"
                        placeholder="English Tag"
                        value={tag[Language.ENGLISH]}
                        onChange={(e) => handleTagsChange(tag.id, e.target.value, TagType.DEVELOPMENT, Language.ENGLISH)}
                    />
                    <input
                        className='articaInpt'
                        required
                        type="text"
                        placeholder="Serbian Tag"
                        value={tag[Language.SERBIAN]}
                        onChange={(e) => handleTagsChange(tag.id, e.target.value, TagType.DEVELOPMENT, Language.SERBIAN)}
                    />
                    <MinusCircleIcon className='removeIcon' onClick={() => handleRemoveTag(TagType.DEVELOPMENT, tag.id)} />
                </div>
            ))}
            <div className='addBtnTagWrapp' onClick={() => handleAddTag(TagType.DEVELOPMENT)}>
                <div className='addBtnIcon'>
                    <TagIcon />
                </div>
                <label >
                    Add Development Tag
                </label>
            </div>
        </div>
        <div className="form-group">
            <label>Managment Tags:</label>
            {managmentTags.map((tag) => (
                <div key={tag.id} className="tag-input">
                    <input
                        className='articaInpt'
                        required
                        type="text"
                        placeholder="English Tag"
                        value={tag[Language.ENGLISH]}
                        onChange={(e) => handleTagsChange(tag.id, e.target.value, TagType.MANAGMENT, Language.ENGLISH)}
                    />
                    <input
                        className='articaInpt'
                        required
                        type="text"
                        placeholder="Serbian Tag"
                        value={tag[Language.SERBIAN]}
                        onChange={(e) => handleTagsChange(tag.id, e.target.value, TagType.MANAGMENT, Language.SERBIAN)}
                    />
                    <MinusCircleIcon className='removeIcon' onClick={() => handleRemoveTag(TagType.MANAGMENT, tag.id)} />
                </div>
            ))}
            <div className='addBtnTagWrapp' onClick={() => handleAddTag(TagType.MANAGMENT)}>
                <div className='addBtnIcon'>
                    <TagIcon />
                </div>
                <label >
                    Add Managmet Tag
                </label>
            </div>
        </div>
    </section>)
};

export default TagManager;