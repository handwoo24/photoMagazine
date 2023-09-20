import type { Dispatch, ReactNode, SetStateAction } from "react";

export type Photo = any;

export type SetPhoto = Dispatch<SetStateAction<Photo | null>>;

export interface PhotoProviderProps {
  children?: ReactNode;
}
