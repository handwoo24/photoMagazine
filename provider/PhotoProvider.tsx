"use client";

import type { Photo } from "@/model/Photo";
import type { FC, PropsWithChildren } from "react";
import { useState } from "react";
import photoContext from "@/context/photoContext";

const { Provider } = photoContext;

const PhotoProvider: FC<PropsWithChildren> = ({ children }) => {
  const Photo = useState<Photo | null>(null);

  return <Provider value={Photo}>{children}</Provider>;
};

export default PhotoProvider;
