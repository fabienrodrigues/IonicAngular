import { Album } from './album'; 

export class Artist {
	name: string;
	picture: string;
	about: string;
	albums: Album[];

	constructor(fields: any) {
		for (const f in fields) {
			this[f] = fields[f];
		}
	}
}