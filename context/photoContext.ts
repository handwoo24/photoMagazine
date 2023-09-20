"use client";

import type { Photo, SetPhoto } from "@/model/Photo";
import { createContext } from "react";

const photoContext = createContext<[Photo | null, SetPhoto]>([
  null,
  () => void null,
]);

export default photoContext;
