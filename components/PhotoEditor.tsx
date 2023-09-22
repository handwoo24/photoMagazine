"use client";

import type { FC, CSSProperties } from "react";
import { ImageUploader } from "antd-mobile";
import { useContext } from "react";
import photoFileContext from "@/context/photoFileContext";

interface PhotoEditorProps {
  style?: CSSProperties;
}

const PhotoEditor: FC<PhotoEditorProps> = ({ style }) => {
  const [photoFile, setPhotoFile] = useContext(photoFileContext);

  const upload = async (file: File) => ({
    url: URL.createObjectURL(file),
  });

  return (
    <ImageUploader
      maxCount={1}
      multiple={false}
      value={photoFile}
      onChange={setPhotoFile}
      upload={upload}
      style={style}
    />
  );
};

export default PhotoEditor;
