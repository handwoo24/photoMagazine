import type { ImageUploadItem } from "antd-mobile";
import type { Dispatch, SetStateAction } from "react";

export type Photo = any;

export type PhotoFile = ImageUploadItem;

export type SetPhoto = Dispatch<SetStateAction<Photo | null>>;
