"use client";

import { PhotoFile } from "@/model/Photo";
import type { PhotoEditorProps } from "@/model/PhotoEditor";
import { ImageUploader } from "antd-mobile";
import { useState, type FC } from "react";

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
