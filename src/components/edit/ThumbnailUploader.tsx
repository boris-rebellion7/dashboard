import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

const ImageWrapper = styled.div<{ className?: string }>`
  position: relative;
  width: 100%;
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.24);
  border-radius: 5px;
`

type Props = {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
};

const ThumbnailUploader: React.FC<Props> = ({ data, setData }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]; // Only take the first file
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setData(prev => ({ ...prev, thumbnail: imageUrl }));
    }
  }, [setData]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': []
    },
    maxFiles: 1,
    multiple: false,
    onDrop
  });

  return (
    <section className="bg-white section-spacing">
      <h2 className="text-18 font-lexendBold mb-10">Thumbnail</h2>
      
      <div className="flex flex-col items-center">
        {data.thumbnail ? (
          <div className="relative w-full mb-4 group">
            <ImageWrapper className="aspect-[190/150]">
              <img 
                src={data.thumbnail} 
                alt="Thumbnail" 
                className="w-full h-full object-cover rounded-xl" 
              />
            </ImageWrapper>

            <button
              onClick={() => setData(prev => ({ ...prev, thumbnail: null }))}
              className="absolute top-2 right-2 bg-white/90 rounded-full p-1.5
                       opacity-0 group-hover:opacity-100 transition-opacity
                       hover:bg-red-500 hover:text-white"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ) : (
          <div
            {...getRootProps()}
            className={`
              w-full h-40 border-2 border-dashed rounded-xl
              flex flex-col items-center justify-center
              transition-colors duration-200 ease-in-out
              cursor-pointer
              ${isDragActive 
                ? 'border-blue bg-blue/5' 
                : 'border-gray/20 hover:border-blue/50'
              }
            `}
          >
            <input {...getInputProps()} />
            <img
              src="/icons/upload.svg"
              alt="Upload"
              className="w-12 h-12 mb-3"
            />
            <p className="text-14 text-gray text-center">
              Set the product thumbnail<br />
              Only *.png, *.jpg accepted
            </p>
          </div>
        )}
      </div>

      <p className="text-14 text-gray text-center mt-7">
        Set the product thumbnail image. Only *.png, *.jpg and *.jpeg files are accepted
      </p>
    </section>
  );
};

export default ThumbnailUploader;
