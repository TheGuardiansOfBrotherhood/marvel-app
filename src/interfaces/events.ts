import { Event } from "./event";

export interface Events {

    available: number;

    collectionURI: string;

    items: Array<Event>;

    returned: number;
}