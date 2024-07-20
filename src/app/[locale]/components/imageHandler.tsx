"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { handleLoadingComplete } from '@/helpers/utils'

const ImageHandler = ({ imgData }: any) => {
    const [dimensions, setDimensions] = useState({ width: 50, height: 50 });
    console.log(imgData.name, dimensions)
    return (
        <Image
            src={imgData.src}
            width={dimensions.width}
            height={dimensions.height}
            alt={imgData.alt}
            onLoadingComplete={({ naturalWidth, naturalHeight }) => {
                const properDimensions = handleLoadingComplete(naturalWidth, naturalHeight)
                setDimensions(properDimensions)
            }}
        />

    )
}

export default ImageHandler