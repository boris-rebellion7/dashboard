import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

type Props = {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
};

const ImageUploader: React.FC<Props> = ({ data, setData }) => {
    const [images, setImages] = useState<File[]>([]);

    // Initialize images from product data
    useEffect(() => {
        if (data.images?.length) {
            // Convert URLs to File objects if needed
            Promise.all(
                data.images.map(async (url) => {
                    const response = await fetch(url);
                    const blob = await response.blob();
                    return new File([blob], url.split('/').pop() || 'image.jpg', {
                        type: blob.type,
                    });
                })
            ).then(setImages);
        }
    }, [data.images]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setImages(prev => [...prev, ...acceptedFiles]);
        // Update parent data with new image URLs
        setData(prev => ({
            ...prev,
            images: [
                ...prev.images,
                ...acceptedFiles.map(file => URL.createObjectURL(file))
            ]
        }));
    }, [setData]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: { 'image/*': [] },
        onDrop,
        multiple: true,
    });

    const removeImage = (index: number) => {
        setImages(prev => prev.filter((_, i) => i !== index));
        setData(prev => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index)
        }));
    };

    return (
        <div className='section-spacing bg-white'>
            <h2 className="font-lexendBold mb-7">Media</h2>

            <div className='flex'>
                <img
                    src="/icons/upload.svg"
                    alt="Upload"
                    className='mr-7' />

                <div
                    {...getRootProps()}
                    className="border border-softGray px-4 py-3 rounded w-full text-14 text-gray"
                >
                    <input {...getInputProps()} />
                    {
                        isDragActive
                            ? <p>Drop the images here ...</p>
                            : <p>Drop files here or click to upload.</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default ImageUploader;
