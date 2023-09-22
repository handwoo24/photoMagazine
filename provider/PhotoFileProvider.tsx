"use client";

import type { PhotoFile } from "@/model/PhotoFile";
import type { FC, PropsWithChildren } from "react";
import { useState } from "react";
import photoContext from "@/context/photoContext";

const { Provider } = photoContext;

const PhotoFileProvider: FC<PropsWithChildren> = ({ children }) => {
  const PhotoFile = useState<PhotoFile>([]);

  return <Provider value={PhotoFile}>{children}</Provider>;
};

export default PhotoFileProvider;
