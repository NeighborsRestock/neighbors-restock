import { ICONS } from "./constants";

export type Icon = keyof typeof ICONS;
export type CardInfo = {
    title: string;
    bodyText: string;
};