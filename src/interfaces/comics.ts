import { Comic } from './comic';

export interface Comics {

    available: number;

    collectionURI: string;

    items: Array<Comic>;

    returned: number;
}