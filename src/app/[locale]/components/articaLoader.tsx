"use client";

import React from 'react';

interface ArticaLoaderProps {
    dialogRef: React.LegacyRef<HTMLDialogElement>;
}

const ArticaLoader: React.FC<ArticaLoaderProps> = ({ dialogRef }) => {
    return (
        <dialog id="dialog" ref={dialogRef}>
            <div className="middle">
                <div className="bar bar1"></div>
                <div className="bar bar2"></div>
                <div className="bar bar3"></div>
                <div className="bar bar4"></div>
                <div className="bar bar5"></div>
                <div className="bar bar6"></div>
                <div className="bar bar7"></div>
                <div className="bar bar8"></div>
            </div>
            <h1>CREATING...</h1>
        </dialog>
    );
};

export default ArticaLoader;
