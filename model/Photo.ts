import type { Dispatch, SetStateAction } from "react";

export type Photo = any;

export type SetPhoto = Dispatch<SetStateAction<Photo | null>>;
