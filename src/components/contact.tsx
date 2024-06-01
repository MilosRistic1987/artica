"use client"

import React, { useEffect, useState } from 'react';
import {
    EnvelopeOpenIcon
} from '@heroicons/react/24/solid';




const Contact: React.FC = () => {

    return (
        <section className='contactSection' id='contact'>
            <article className='contactIconwrapp'>
                <EnvelopeOpenIcon />
                <label>Let's talk about</label>
                <label>everything !</label>
            </article>
            <div className='contactFormWrapp'>
                <form>
                    <div className='formHeadingWrapp'>
                        <h1>Contact Us</h1>
                    </div>
                    <div className='contactInlineWrapp'>
                        <div className='inptWrapp'>
                            <label>Full name</label>
                            <input type='text' placeholder='name' />
                        </div>
                        <div className='inptWrapp'>
                            <label>Email Address</label>
                            <input type='text' placeholder='email' />
                        </div>
                    </div>
                    <div className='inptWrapp'>
                        <label>Subject</label>
                        <input type='text' placeholder='subject' />
                    </div>
                    <div className='inptWrapp'>
                        <label>Message</label>
                        <textarea placeholder='message' />
                    </div>
                    <div className='contactBtnWrapp'>
                        <button>Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;