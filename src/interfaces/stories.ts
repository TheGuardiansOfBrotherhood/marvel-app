import { Storie } from "./storie";

export interface Stories {

    available: number;

    collectionURI: string;

    items: Array<Storie>;

    returned: number;
}