import { Thumbnail } from './thumbnail';
import { Comics } from './comics';
import { Series } from './series';
import { Stories } from './stories';
import { Events } from './events';
import { Url } from './url';

export interface Character {

    id: number;

    name: string;

    description: string;

    modified?: string;

    thumbnail?: Thumbnail;

    resourceURI?: string;

    comics?: Comics;

    series?: Series;

    stories?: Stories;

    events?: Events;

    urls?: Array<Url>;
}