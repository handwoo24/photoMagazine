"use client";

import type { Photo, PhotoProviderProps } from "@/model/Photo";
import type { FC } from "react";
import { useState } from "react";
import photoContext from "@/context/photoContext";

const { Provider } = photoContext;

const PhotoProvider: FC<PhotoProviderProps> = ({ children }) => {
  const Photo = useState<Photo | null>(null);

  return <Provider value={Photo}>{children}</Provider>;
};

export default PhotoProvider;
