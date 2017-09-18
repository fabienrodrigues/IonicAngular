import { Track } from './track'; 

export class Album {
    name: string;
    thumb: string;
    tracks: Track[];

    constructor(fields: any) {
        for (const f in fields) {
            this[f] = fields[f];
        }
    }
}
