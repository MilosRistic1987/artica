"use client"

import React from 'react';
import {
    EnvelopeOpenIcon
} from '@heroicons/react/24/solid';
import { useTranslations } from 'next-intl';




const Contact: React.FC = () => {
    const t = useTranslations('Contact');

    return (
        <section className='contactSection' id='contact'>
            <article className='contactIconwrapp'>
                <EnvelopeOpenIcon />
                <label>{t('greeting.sec1')}</label>
                <label>{t('greeting.sec2')}</label>
            </article>
            <div className='contactFormWrapp'>
                <form>
                    <div className='formHeadingWrapp'>
                        <h1>{t('heading')}</h1>
                    </div>
                    <div className='contactInlineWrapp'>
                        <div className='inptWrapp'>
                            <label>{t('nameInput.label')}</label>
                            <input type='text' placeholder={t('nameInput.placeholder')} />
                        </div>
                        <div className='inptWrapp'>
                            <label>{t('emailInput.label')}</label>
                            <input type='text' placeholder={t('emailInput.placeholder')} />
                        </div>
                    </div>
                    <div className='inptWrapp'>
                        <label>{t('subjectInput.label')}</label>
                        <input type='text' placeholder={t('subjectInput.placeholder')} />
                    </div>
                    <div className='inptWrapp'>
                        <label>{t('messageInput.label')}</label>
                        <textarea placeholder={t('messageInput.placeholder')} />
                    </div>
                    <div className='contactBtnWrapp'>
                        <button>{t('button')}</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;