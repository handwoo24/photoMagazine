import type { ImageUploadItem } from "antd-mobile";
import type { Dispatch, SetStateAction } from "react";

export type PhotoFile = ImageUploadItem[];

export type SetPhotoFile = Dispatch<SetStateAction<PhotoFile>>;
