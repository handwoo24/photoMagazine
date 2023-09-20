"use client";

import type { FC, CSSProperties } from "react";
import type { PhotoFile } from "@/model/Photo";
import { ImageUploader } from "antd-mobile";
import { useState } from "react";

interface PhotoEditorProps {
  style?: CSSProperties;
}

const PhotoEditor: FC<PhotoEditorProps> = ({ style }) => {
  const [fileList, setFileList] = useState<PhotoFile[]>([]);

  const upload = async (file: File) => ({
    url: URL.createObjectURL(file),
  });

  return (
    <ImageUploader value={fileList} onChange={setFileList} upload={upload} />
  );
};

export default PhotoEditor;
