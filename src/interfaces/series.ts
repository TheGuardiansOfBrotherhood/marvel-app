import { Serie } from './serie';

export interface Series {

    available: number;

    collectionURI: string;

    items: Array<Serie>;

    returned: number;
}