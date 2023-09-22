"use client";

import type { PhotoFile, SetPhotoFile } from "@/model/PhotoFile";
import { createContext } from "react";

const photoFileContext = createContext<[PhotoFile, SetPhotoFile]>([
  [],
  () => void null,
]);

export default photoFileContext;
