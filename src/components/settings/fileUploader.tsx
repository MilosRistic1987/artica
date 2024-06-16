import React, { useRef, useState } from 'react';
import { PhotoIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image'

interface FileUploaderProps {
    setFiles: (file: File, objKey: string, id: string) => void;
    size?: number
    objKey: string
    id: string
}

const FileUploader: React.FC<FileUploaderProps> = ({ setFiles, size = 7, objKey, id }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const handleRemoveFile = () => {
        setPreview(null);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files[0]) {
            const file = files[0];
            setFiles(file, objKey, id)
            const reader = new FileReader();

            reader.onloadend = () => {
                setPreview(reader.result as string);
            };

            reader.readAsDataURL(file);
        }
    };

    const style = { width: `${size}rem`, height: `${size}rem` }

    return (
        <div className='fileWrapper'>
            <div className="file-uploader" style={style}>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                />
                <PhotoIcon className="icon" />
            </div>
            {preview && <div className='filePreview' style={style}>
                <Image
                    src={preview as string}
                    layout='fill'
                    alt="Artica International Background"
                />
                <XMarkIcon onClick={handleRemoveFile} />
            </div>}
        </div>
    );
};

export default FileUploader;


