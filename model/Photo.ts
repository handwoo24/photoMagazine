import type { ImageUploadItem } from "antd-mobile";
import type { Dispatch, ReactNode, SetStateAction } from "react";

export type Photo = any;

export type PhotoFile = ImageUploadItem;

export type SetPhoto = Dispatch<SetStateAction<Photo | null>>;

export interface PhotoProviderProps {
  children?: ReactNode;
}
